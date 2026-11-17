package com.example.project_back.service.Impl;
import java.util.*;
import com.example.project_back.service.*;
import com.example.project_back.repository.*;
import com.example.project_back.entity.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.repository.CatalogRepository;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
@Service public class AttemptServiceImpl implements AttemptService  {
    private final AttemptRepository attempts;
    private final CatalogRepository store;
    private final Json json;
    public AttemptServiceImpl(AttemptRepository attempts,CatalogRepository store,Json json)  {
        this.attempts=attempts;
        this.store=store;
        this.json=json;
    }
    private ExamAttempt row(String id,Account u,boolean lock)  {
        ExamAttempt r=attempts.get(id,lock);
        if(!u.role().equals("ADMIN")&&!r.owner().equals(u.id()))throw ApplicationException.missing();
        return r;
    }
    @Transactional public ObjectNode start(Account u,JsonNode b)  {
        String examId=Json.required(b,"examId",128);
        ObjectNode snapshot=store.get("exams",examId).deepCopy();
        String school=Json.text(b,"schoolId");
        if(!school.isBlank()&&!snapshot.path("schoolId").asText("hubt").equals(school))throw ApplicationException.missing();
        snapshot.put("_mode",b.path("mode").asText("exam"));
        boolean retry=!Json.text(b,"retryFrom").isBlank();
        if(retry)  {
            ExamAttempt previous=row(Json.text(b,"retryFrom"),u,false);
            if(previous.result()==null||!previous.snapshot().path("id").asText().equals(examId))throw ApplicationException.bad("Không có kết quả để làm lại.");
            ArrayNode missed=json.array();
            for(JsonNode q:previous.result().path("session"))  {
                if(q.path("picked").isNull()||q.path("picked").asInt()!=q.path("a").asInt())  {
                    ObjectNode copy=(ObjectNode)q.deepCopy();
                    copy.remove(List.of("picked","skipped","_sourceIndex","_choiceOrder"));
                    missed.add(copy);
                }
            }
            snapshot.set("questions",missed);
        }
        if(snapshot.path("questions").isEmpty())throw ApplicationException.bad("Đề chưa có câu hỏi.");
        int i=0;
        for(JsonNode q:snapshot.path("questions"))((ObjectNode)q).put("_sourceIndex",i++);
        String id=UUID.randomUUID().toString();
        attempts.create(id,u.id(),examId,snapshot,retry);
        return json.object().put("id",id).set("questions",snapshot.path("questions"));
    }
    @Transactional public ObjectNode submit(Account u,String id,JsonNode request)  {
        ExamAttempt row=row(id,u,true);
        if(row.result()!=null)return row.result();
        if(!row.status().equals("ACTIVE"))throw ApplicationException.conflict("Lượt thi đã kết thúc.");
        ObjectNode mobileSnapshot=row.snapshot();
        if(MobileAttemptSupport.enabled(mobileSnapshot)){
            if(MobileAttemptSupport.expired(mobileSnapshot)){
                ((ObjectNode)mobileSnapshot.path("_mobile")).put("timedOut",true);
                row.mobileSnapshot(mobileSnapshot);
                request=MobileAttemptSupport.request(mobileSnapshot,new com.fasterxml.jackson.databind.ObjectMapper());
            }
        }
        JsonNode source=row.snapshot().path("questions"),answers=request.path("answers");
        if(!answers.isArray()||answers.size()!=source.size())throw ApplicationException.bad("Danh sách trả lời không khớp lượt thi.");
        Set<Integer> seen=new HashSet<>();
        ArrayNode session=json.array(),details=json.array();
        List<Integer> correct=new ArrayList<>(),picked=new ArrayList<>();
        for(JsonNode a:answers)  {
            if(!a.path("index").isIntegralNumber())throw ApplicationException.bad("Thiếu chỉ số câu.");
            int index=a.path("index").asInt();
            if(index<0||index>=source.size()||!seen.add(index))throw ApplicationException.bad("Câu hỏi trùng hoặc không tồn tại.");
            JsonNode order=a.path("order");
            if(!order.isArray()||order.size()!=4)throw ApplicationException.bad("Thứ tự đáp án không hợp lệ.");
            Set<Integer> perm=new HashSet<>();
            for(JsonNode n:order)if(!n.isIntegralNumber()||n.asInt()<0||n.asInt()>3||!perm.add(n.asInt()))throw ApplicationException.bad("Thứ tự đáp án không hợp lệ.");
            Integer choice=null;
            if(a.hasNonNull("picked"))  {
                if(!a.path("picked").isIntegralNumber()||a.path("picked").asInt()<0||a.path("picked").asInt()>3)throw ApplicationException.bad("Lựa chọn không hợp lệ.");
                choice=a.path("picked").asInt();
            }
            ObjectNode q=(ObjectNode)source.get(index).deepCopy();
            ArrayNode options=json.array();
            int answer=0;
            for(int j=0;j<4;j++)  {
                int original=order.get(j).asInt();
                options.add(q.path("o").get(original));
                if(original==q.path("a").asInt())answer=j;
            }
            q.set("o",options);
            q.put("a",answer);
            if(choice==null)q.putNull("picked");
            else q.put("picked",choice);
            q.put("skipped",choice==null);
            q.set("_choiceOrder",order);
            session.add(q);
            correct.add(answer);
            picked.add(choice);
            ObjectNode detail=json.object().put("question",q.path("q").asText()).put("correctAnswer",answer).put("isCorrect",choice!=null&&choice==answer).put("explanation",q.path("explanation").asText(""));
            detail.set("options",options);
            if(choice==null)detail.putNull("studentAnswer");
            else detail.put("studentAnswer",choice);
            details.add(detail);
        }
        Grading.Stats stats=Grading.score(correct,picked);
        ObjectNode result=json.object().put("id",id).put("examId",row.snapshot().path("id").asText()).put("examTitle",row.snapshot().path("title").asText()).put("title",row.snapshot().path("title").asText()).put("studentId",u.id()).put("studentName",u.name()).put("studentCode",u.studentCode()).put("className",u.className()).put("date",System.currentTimeMillis()).put("total",stats.total()).put("correct",stats.correct()).put("wrong",stats.wrong()).put("unanswered",stats.unanswered()).put("pct",stats.pct()).put("retry",row.retry());
        result.put("schoolId",row.snapshot().path("schoolId").asText("hubt"));
        result.put("mode",row.snapshot().path("_mode").asText("exam"));
        result.set("session",session);
        result.set("details",details);
        attempts.submit(id,result);
        return result;
    }
    public ObjectNode result(Account u,String id)  {
        ExamAttempt r=row(id,u,false);
        if(r.result()==null)throw ApplicationException.conflict("Bài chưa nộp.");
        return r.result();
    }
    public List<JsonNode> history(Account u)  {
        return attempts.history(u.id(),u.role().equals("ADMIN"));
    }
    public void clear(Account u)  {
        attempts.clear(u.id());
    }
    @Transactional public void abandon(Account u,String id)  {
        ExamAttempt r=row(id,u,true);
        if(r.status().equals("ACTIVE"))attempts.abandon(id);
    }
}
