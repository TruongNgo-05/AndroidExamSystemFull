package com.example.project_back.service;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.entity.ExamAttempt;
import com.example.project_back.exception.ApplicationException;
import com.example.project_back.repository.*;
import com.example.project_back.repository.jpa.AttemptJpaRepository;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.PageRequest;
import java.time.Instant;
import java.util.*;
@Service @Transactional
public class MobileService {
 private final CatalogRepository catalog;private final AttemptRepository attempts;private final AttemptJpaRepository data;private final AttemptService grading;private final ObjectMapper mapper;
 public MobileService(CatalogRepository c,AttemptRepository a,AttemptJpaRepository d,AttemptService g,ObjectMapper m){catalog=c;attempts=a;data=d;grading=g;mapper=m;}
 public List<ObjectNode> subjects(){return catalog.list("exams").stream().map(e->{
  ObjectNode n=mapper.createObjectNode();for(String k:List.of("id","title","majorId","schoolId","description","topicId"))n.put(k,e.path(k).asText(k.equals("schoolId")?"hubt":""));n.put("questionCount",e.path("questions").size());return n;
 }).toList();}
 public Object study(String id,int page,int size){
  ObjectNode exam=catalog.get("exams",id);JsonNode all=exam.path("questions");ArrayNode items=mapper.createArrayNode();int from=(int)Math.min((long)page*size,all.size());
  for(int i=from;i<Math.min(from+size,all.size());i++)items.add(question(all.get(i),id+"__"+i,true));return Map.of("items",items,"total",all.size(),"page",page,"size",size);
 }
 private ObjectNode question(JsonNode original,String id,boolean reveal){
  ObjectNode q=mapper.createObjectNode().put("id",id).put("content",original.path("q").asText());q.set("options",original.path("o").deepCopy());
  if(original.hasNonNull("image"))q.put("image",original.path("image").asText());if(original.hasNonNull("imageAlt"))q.put("imageAlt",original.path("imageAlt").asText());if(reveal)q.put("answerIndex",original.path("a").asInt());return q;
 }
 public ObjectNode start(Account user,String subjectId,int count,int minutes,boolean shuffle){
  ObjectNode snap=catalog.get("exams",subjectId).deepCopy();JsonNode source=snap.path("questions");
  if(count>source.size())throw ApplicationException.bad("Số câu vượt quá ngân hàng đề hiện tại.");
  List<JsonNode> pool=new ArrayList<>();source.forEach(q->pool.add(q.deepCopy()));if(shuffle)Collections.shuffle(pool);
  ArrayNode selected=mapper.createArrayNode();for(int i=0;i<count;i++){ObjectNode q=(ObjectNode)pool.get(i);q.put("_sourceIndex",i);selected.add(q);}snap.set("questions",selected);snap.put("_mode","exam");
  ObjectNode mobile=mapper.createObjectNode().put("deadline",Instant.now().plusSeconds(minutes*60L).toString());mobile.set("answers",mapper.createObjectNode());snap.set("_mobile",mobile);
  String id=UUID.randomUUID().toString();attempts.create(id,user.id(),subjectId,snap,false);return view(attempts.get(id,false),false);
 }
 private ExamAttempt own(Account user,String id){var a=attempts.get(id,true);if(!a.owner().equals(user.id()))throw ApplicationException.missing();return a;}
 private void completeExpired(Account user,ExamAttempt a){if(a.status().equals("ACTIVE")&&MobileAttemptSupport.expired(a.snapshot()))grading.submit(user,a.id(),mapper.createObjectNode());}
 public ObjectNode get(Account user,String id){var a=own(user,id);completeExpired(user,a);if(a.result()==null&&!MobileAttemptSupport.enabled(a.snapshot()))throw ApplicationException.conflict("Bài đang làm trên web. Hãy tiếp tục hoặc nộp bài trên web trước.");return view(a,true);}
 public ObjectNode save(Account user,String id,ObjectNode answers,boolean submit){
  var a=own(user,id);if(a.result()!=null)return view(a,true);
  if(!a.status().equals("ACTIVE"))throw ApplicationException.conflict("Lượt thi đã kết thúc.");
  ObjectNode snapshot=a.snapshot();if(!MobileAttemptSupport.enabled(snapshot))throw ApplicationException.conflict("Đây là lượt thi từ web.");
  if(MobileAttemptSupport.expired(snapshot)){completeExpired(user,a);return view(a,true);}
  int total=snapshot.path("questions").size();if(answers.size()>total)throw ApplicationException.bad("Danh sách đáp án không hợp lệ.");
  answers.fields().forEachRemaining(entry->{
   try{int index=Integer.parseInt(entry.getKey());JsonNode value=entry.getValue();if(!String.valueOf(index).equals(entry.getKey())||index<0||index>=total||!value.isIntegralNumber()||value.asInt()<0||value.asInt()>3)throw new IllegalArgumentException();}
   catch(IllegalArgumentException e){throw ApplicationException.bad("Đáp án không hợp lệ.");}
  });
  ((ObjectNode)snapshot.path("_mobile")).set("answers",answers.deepCopy());a.mobileSnapshot(snapshot);
  if(submit)grading.submit(user,id,MobileAttemptSupport.request(snapshot,mapper));return view(a,true);
 }
 private ObjectNode summary(ExamAttempt a){
  ObjectNode snapshot=a.snapshot(),result=a.result();boolean done=result!=null;
  ObjectNode out=mapper.createObjectNode().put("id",a.id()).put("subjectId",snapshot.path("id").asText()).put("subjectTitle",snapshot.path("title").asText()).put("startedAt",a.createdAt().toString()).put("serverTime",Instant.now().toString()).put("status",done?"COMPLETED":"IN_PROGRESS").put("total",snapshot.path("questions").size()).put("timedOut",snapshot.path("_mobile").path("timedOut").asBoolean(false));
  if(done){out.put("correctCount",result.path("correct").asInt());out.put("score",Math.round(result.path("correct").asDouble()*1000/result.path("total").asInt())/100.0);out.put("submittedAt",Instant.ofEpochMilli(result.path("date").asLong()).toString());}
  else out.putNull("submittedAt");
  out.put("deadline",snapshot.path("_mobile").path("deadline").asText(a.createdAt().toString()));return out;
 }
 private ObjectNode view(ExamAttempt a,boolean unused){
  ObjectNode out=summary(a);ObjectNode snap=a.snapshot(),result=a.result();ArrayNode qs=mapper.createArrayNode();ObjectNode selected=mapper.createObjectNode();
  if(result!=null){
   int i=0;for(JsonNode q:result.path("session")){String id=String.valueOf(i++);qs.add(question(q,id,true));if(q.hasNonNull("picked"))selected.put(id,q.path("picked").asInt());}
  }else{
   int i=0;for(JsonNode q:snap.path("questions"))qs.add(question(q,String.valueOf(i++),false));
   if(snap.path("_mobile").path("answers").isObject())selected.setAll((ObjectNode)snap.path("_mobile").path("answers"));
  }
  out.set("questions",qs);out.set("answers",selected);return out;
 }
 public Object history(Account user,int page){
  var rows=data.findByUserIdAndHiddenFalseAndStatusInOrderByCreatedAtDesc(user.id(),List.of("SUBMITTED","ACTIVE"),PageRequest.of(page,30));
  List<ObjectNode> out=new ArrayList<>();for(var a:rows){completeExpired(user,a);out.add(summary(a));}return Map.of("items",out,"total",rows.getTotalElements(),"page",page,"hasNext",rows.hasNext());
 }
}
