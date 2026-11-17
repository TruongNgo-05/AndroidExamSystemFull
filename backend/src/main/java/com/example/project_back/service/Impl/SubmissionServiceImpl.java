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
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
@Service public class SubmissionServiceImpl implements SubmissionService  {
    private final CatalogRepository store;
    private final CatalogService catalog;
    private final Json json;
    public SubmissionServiceImpl(CatalogRepository store,CatalogService catalog,Json json)  {
        this.store=store;
        this.catalog=catalog;
        this.json=json;
    }
    public List<ObjectNode> list(Account u)  {
        return store.list("submissions").stream().filter(s->u.role().equals("ADMIN")||s.path("studentId").asText().equals(u.id())).toList();
    }
    @Transactional public ObjectNode create(Account u,ObjectNode b)  {
        String data=Json.required(b,"fileData",15000000),name=Json.required(b,"fileName",255);
        if(!name.toLowerCase(Locale.ROOT).matches(".*\\.(pdf|docx|doc)$"))throw ApplicationException.bad("Chỉ nhận PDF, DOC hoặc DOCX.");
        int comma=data.indexOf(',');
        if(comma<0||!data.substring(0,comma).matches("data:(application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document);base64"))throw ApplicationException.bad("Định dạng tệp không hợp lệ.");
        byte[] bytes;
        try  {
            bytes=Base64.getDecoder().decode(data.substring(comma+1));
        }
        catch(IllegalArgumentException e)  {
            throw ApplicationException.bad("Tệp base64 không hợp lệ.");
        }
        if(bytes.length==0||bytes.length>10*1024*1024)throw ApplicationException.bad("Tệp tối đa 10 MB.");
        boolean pdf=name.toLowerCase().endsWith(".pdf"),docx=name.toLowerCase().endsWith(".docx");
        if(bytes.length<4||(pdf&&!(bytes[0]==37&&bytes[1]==80&&bytes[2]==68&&bytes[3]==70))||(docx&&!(bytes[0]==80&&bytes[1]==75))||(!pdf&&!docx&&!(bytes[0]==(byte)0xd0&&bytes[1]==(byte)0xcf)))throw ApplicationException.bad("Nội dung tệp không khớp phần mở rộng.");
        String major=Json.text(b,"majorId");
        String majorTitle=major.isBlank()?"Môn học chung":store.get("majors",major).path("title").asText();
        ObjectNode s=json.object().put("id",UUID.randomUUID().toString()).put("title",Json.required(b,"title",300)).put("description",Json.text(b,"description")).put("majorId",major).put("majorTitle",majorTitle).put("fileName",name).put("fileType",pdf?"pdf":"word").put("fileSize",bytes.length).put("fileData",data).put("studentId",u.id()).put("studentName",u.name()).put("studentCode",u.studentCode()).put("studentClass",u.className()).put("studentEmail",u.email()).put("createdAt",java.time.Instant.now().toString()).put("status","PENDING").put("adminFeedback","");
        return store.create("submissions",s);
    }
    @Transactional public ObjectNode review(Account u,String id,JsonNode b)  {
        ObjectNode s=store.get("submissions",id,true);
        if(!s.path("status").asText().equals("PENDING"))throw ApplicationException.conflict("Đề đã được duyệt.");
        String status=Json.text(b,"status");
        if(!Set.of("APPROVED","REJECTED").contains(status))throw ApplicationException.bad("Trạng thái không hợp lệ.");
        s.put("status",status).put("reviewedAt",java.time.Instant.now().toString()).put("reviewedBy",u.name()).put("adminFeedback",b.path("reason").asText(status.equals("APPROVED")?"Đã phê duyệt đề thi.":"Nội dung chưa phù hợp"));
        if(status.equals("APPROVED")&&b.path("createExamRecord").asBoolean())  {
            ObjectNode e=json.object().put("id","submission_"+id).put("title",s.path("title").asText()).put("description",s.path("description").asText()).put("majorId",s.path("majorId").asText());
            e.set("questions",json.array());
            catalog.create("exams",e);
            s.put("examId",e.path("id").asText());
        }
        return store.save("submissions",id,s);
    }
    public void delete(String id)  {
        store.delete("submissions",id);
    }
}
