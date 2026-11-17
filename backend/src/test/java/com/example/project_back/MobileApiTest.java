package com.example.project_back;
import com.example.project_back.repository.*;
import com.example.project_back.entity.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.*;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.transaction.PlatformTransactionManager;
import java.util.*;
import java.time.Instant;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(properties={"spring.datasource.url=jdbc:h2:mem:jler_mobile;MODE=MySQL;DB_CLOSE_DELAY=-1","spring.datasource.driver-class-name=org.h2.Driver","spring.datasource.username=sa","spring.datasource.password=","spring.jpa.hibernate.ddl-auto=create-drop","app.admin-email=admin@mobile.test","app.admin-password=AdminTest123!","app.seed=false","app.jwt-secret=YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODk="})
@AutoConfigureMockMvc
class MobileApiTest {
 @Autowired MockMvc mvc;@Autowired ObjectMapper mapper;@Autowired CatalogRepository store;@Autowired AttemptRepository attempts;@Autowired PlatformTransactionManager tm;
 JsonNode json(MvcResult r)throws Exception{return mapper.readTree(r.getResponse().getContentAsString(java.nio.charset.StandardCharsets.UTF_8));}
 String register()throws Exception{String id=UUID.randomUUID().toString();return json(mvc.perform(post("/api/auth/register").header("X-Requested-With","JLer").contentType("application/json").content("{\"name\":\"Trường\",\"studentCode\":\""+id+"\",\"email\":\""+id+"@test.vn\",\"password\":\"Student123!\"}")).andExpect(status().isOk()).andReturn()).path("accessToken").asText();}
 @BeforeEach void fixture(){if(!store.exists("exams","mobile_test")){
  ObjectNode e=mapper.createObjectNode().put("id","mobile_test").put("title","Môn di động").put("majorId","cntt");ArrayNode qs=mapper.createArrayNode();for(int i=0;i<3;i++){ObjectNode q=mapper.createObjectNode().put("q","Câu "+i).put("a",i).put("image","image/example.png");q.set("o",mapper.createArrayNode().add("A").add("B").add("C").add("D"));qs.add(q);}e.set("questions",qs);store.create("exams",e);
 }}
 JsonNode start(String token)throws Exception{return json(mvc.perform(post("/api/mobile/attempts").header("Authorization","Bearer "+token).contentType("application/json").content("{\"subjectId\":\"mobile_test\",\"count\":2,\"minutes\":10,\"shuffle\":false}")).andExpect(status().isOk()).andReturn());}
 @Test void registerUsesSameAccountsAndSecurity()throws Exception{String t=register();mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+t)).andExpect(status().isOk()).andExpect(jsonPath("$.role").value("STUDENT"));mvc.perform(get("/api/mobile/subjects")).andExpect(status().isOk());mvc.perform(get("/api/admin/users").header("Authorization","Bearer "+t)).andExpect(status().isForbidden());}
 @Test void catalogAndPagedStudyPreserveSource()throws Exception{String t=register();mvc.perform(get("/api/mobile/subjects").header("Authorization","Bearer "+t)).andExpect(status().isOk()).andExpect(jsonPath("$[0].questionCount").value(3));mvc.perform(get("/api/mobile/subjects/mobile_test/study?page=1&size=1").header("Authorization","Bearer "+t)).andExpect(status().isOk()).andExpect(jsonPath("$.items[0].id").value("mobile_test__1")).andExpect(jsonPath("$.items[0].answerIndex").value(1)).andExpect(jsonPath("$.items[0].image").value("image/example.png"));}
 @Test void mobileSubmissionVisibleOnOldWebAndIdempotent()throws Exception{
  String t=register();JsonNode a=start(t);String id=a.path("id").asText();assertEquals(2,a.path("questions").size());assertFalse(a.path("questions").get(0).has("answerIndex"));
  String payload="{\"answers\":{\"0\":0,\"1\":1}}";
  mvc.perform(put("/api/mobile/attempts/"+id+"/answers").header("Authorization","Bearer "+t).contentType("application/json").content(payload)).andExpect(status().isOk()).andExpect(jsonPath("$.answers.1").value(1));
  mvc.perform(get("/api/mobile/attempts/"+id).header("Authorization","Bearer "+t)).andExpect(status().isOk()).andExpect(jsonPath("$.answers.0").value(0));
  mvc.perform(post("/api/mobile/attempts/"+id+"/submit").header("Authorization","Bearer "+t).contentType("application/json").content(payload)).andExpect(status().isOk()).andExpect(jsonPath("$.score").value(10.0));
  mvc.perform(get("/api/history").header("Authorization","Bearer "+t)).andExpect(status().isOk()).andExpect(jsonPath("$[0].id").value(id)).andExpect(jsonPath("$[0].correct").value(2));
  mvc.perform(post("/api/mobile/attempts/"+id+"/submit").header("Authorization","Bearer "+t).contentType("application/json").content("{\"answers\":{}}")).andExpect(status().isOk()).andExpect(jsonPath("$.score").value(10.0));
 }
 @Test void webResultsVisibleInNativeHistory()throws Exception{
  String t=register();String id=json(mvc.perform(post("/api/attempts").header("Authorization","Bearer "+t).contentType("application/json").content("{\"examId\":\"mobile_test\"}")).andExpect(status().isOk()).andReturn()).path("id").asText();
  String payload="{\"answers\":[{\"index\":0,\"order\":[0,1,2,3],\"picked\":0},{\"index\":1,\"order\":[0,1,2,3],\"picked\":1},{\"index\":2,\"order\":[0,1,2,3],\"picked\":null}]}";
  mvc.perform(post("/api/attempts/"+id+"/submit").header("Authorization","Bearer "+t).contentType("application/json").content(payload)).andExpect(status().isOk());
  mvc.perform(get("/api/mobile/attempts/"+id).header("Authorization","Bearer "+t)).andExpect(status().isOk()).andExpect(jsonPath("$.correctCount").value(2)).andExpect(jsonPath("$.questions[0].answerIndex").value(0));
  mvc.perform(get("/api/mobile/attempts").header("Authorization","Bearer "+t)).andExpect(jsonPath("$.total").value(1));
 }
 @Test void deadlineEnforcedEvenThroughLegacySubmit()throws Exception{
  String t=register(),id=start(t).path("id").asText();mvc.perform(put("/api/mobile/attempts/"+id+"/answers").header("Authorization","Bearer "+t).contentType("application/json").content("{\"answers\":{\"0\":0}}")).andExpect(status().isOk());
  new TransactionTemplate(tm).execute(status->{ExamAttempt row=attempts.get(id,true);ObjectNode snap=row.snapshot();((ObjectNode)snap.path("_mobile")).put("deadline",Instant.now().minusSeconds(1).toString());row.mobileSnapshot(snap);return null;});
  mvc.perform(post("/api/attempts/"+id+"/submit").header("Authorization","Bearer "+t).contentType("application/json").content("{\"answers\":[{\"index\":0,\"order\":[0,1,2,3],\"picked\":0},{\"index\":1,\"order\":[0,1,2,3],\"picked\":1}]}")).andExpect(status().isOk()).andExpect(jsonPath("$.correct").value(1));
  mvc.perform(get("/api/mobile/attempts/"+id).header("Authorization","Bearer "+t)).andExpect(jsonPath("$.timedOut").value(true)).andExpect(jsonPath("$.score").value(5.0));
 }
 @Test void ownerIsolationAndBadAnswers()throws Exception{String t=register(),other=register(),id=start(t).path("id").asText();mvc.perform(get("/api/mobile/attempts/"+id).header("Authorization","Bearer "+other)).andExpect(status().isNotFound());for(String answers:List.of("{\"0\":4}","{\"-1\":0}","{\"01\":1}","{\"0\":null}"))mvc.perform(put("/api/mobile/attempts/"+id+"/answers").header("Authorization","Bearer "+t).contentType("application/json").content("{\"answers\":"+answers+"}")).andExpect(status().isBadRequest());}
 @Test void profileUpdatesExistingAccount()throws Exception{String t=register();mvc.perform(put("/api/mobile/profile").header("Authorization","Bearer "+t).contentType("application/json").content("{\"name\":\"Tên mới\",\"className\":\"IT01\"}")).andExpect(status().isOk());mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+t)).andExpect(jsonPath("$.className").value("IT01"));}
 @Test void metadataAndAiOptional()throws Exception{mvc.perform(get("/api/public/mobile-info")).andExpect(status().isOk());String t=register();mvc.perform(post("/api/mobile/ai/explain").header("Authorization","Bearer "+t).contentType("application/json").content("{\"questionId\":\"mobile_test__0\"}")).andExpect(status().isServiceUnavailable());}
 @Test void guestCanBrowseAndStudyWithoutSession()throws Exception{
  mvc.perform(get("/api/mobile/subjects")).andExpect(status().isOk()).andExpect(jsonPath("$[0].questionCount").value(3));
  mvc.perform(get("/api/mobile/subjects/mobile_test/study?page=0&size=1")).andExpect(status().isOk()).andExpect(jsonPath("$.items[0].content").value("Câu 0"));
  mvc.perform(get("/api/mobile/notifications")).andExpect(status().isOk());
  mvc.perform(get("/api/mobile/subjects").header("Authorization","Bearer expired.invalid.token")).andExpect(status().isOk());
 }
 @Test void guestCannotStartSaveSubmitOrReadPrivateData()throws Exception{
  mvc.perform(post("/api/mobile/attempts").contentType("application/json").content("{\"subjectId\":\"mobile_test\",\"count\":2,\"minutes\":10}")).andExpect(status().isUnauthorized());
  mvc.perform(get("/api/mobile/attempts")).andExpect(status().isUnauthorized());
  mvc.perform(get("/api/mobile/attempts/private-id")).andExpect(status().isUnauthorized());
  mvc.perform(put("/api/mobile/attempts/private-id/answers").contentType("application/json").content("{\"answers\":{}}")).andExpect(status().isUnauthorized());
  mvc.perform(post("/api/mobile/attempts/private-id/submit").contentType("application/json").content("{\"answers\":{}}")).andExpect(status().isUnauthorized());
  mvc.perform(get("/api/auth/me")).andExpect(status().isUnauthorized());
  mvc.perform(get("/api/admin/users")).andExpect(status().isUnauthorized());
  mvc.perform(post("/api/mobile/subjects").contentType("application/json").content("{}")).andExpect(status().isUnauthorized());
 }
 @Test void invalidStartRejected()throws Exception{String t=register();mvc.perform(post("/api/mobile/attempts").header("Authorization","Bearer "+t).contentType("application/json").content("{\"subjectId\":\"mobile_test\",\"count\":4,\"minutes\":10}")).andExpect(status().isBadRequest());}
}
