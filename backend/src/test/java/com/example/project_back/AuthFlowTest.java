package com.example.project_back;
import com.fasterxml.jackson.databind.*;
import jakarta.servlet.http.Cookie;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(properties={
 "app.upload-dir=${java.io.tmpdir}/jler-images-test-${random.uuid}",
 "spring.datasource.url=jdbc:h2:mem:jlerauth;MODE=MySQL;DB_CLOSE_DELAY=-1",
 "spring.datasource.driver-class-name=org.h2.Driver","spring.datasource.username=sa","spring.datasource.password=",
 "spring.jpa.hibernate.ddl-auto=create-drop","app.admin-email=admin@test.local","app.admin-password=AdminTest123!",
 "app.seed=true","app.mail-enabled=true","app.jwt-secret=YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODk="})
@AutoConfigureMockMvc
class AuthFlowTest {
 @org.springframework.test.context.bean.override.mockito.MockitoBean com.example.project_back.service.ResetMailService resetMail;
 @Autowired org.springframework.jdbc.core.JdbcTemplate jdbc;
 @Autowired MockMvc mvc; @Autowired ObjectMapper mapper;
 MvcResult register(String id)throws Exception{return mvc.perform(post("/api/auth/register").header("X-Requested-With","JLer").contentType("application/json")
   .content("{\"name\":\"Test\",\"studentCode\":\""+id+"\",\"email\":\""+id+"@test.local\",\"password\":\"Student123!\",\"role\":\"ADMIN\"}"))
   .andExpect(status().isOk()).andReturn();}
 String token(MvcResult r)throws Exception{return mapper.readTree(r.getResponse().getContentAsString()).path("accessToken").asText();}
 Cookie cookie(MvcResult r){String header=r.getResponse().getHeader("Set-Cookie");assertNotNull(header);assertTrue(header.contains("HttpOnly"));return new Cookie("jler_refresh",header.split(";",2)[0].split("=",2)[1]);}
 @Test void rotateDetectReplayAndRevokeAccess()throws Exception{
   var first=register("ROTATE1");String access=token(first);Cookie old=cookie(first);
   assertEquals("STUDENT",mapper.readTree(first.getResponse().getContentAsString()).path("user").path("role").asText());
   assertFalse(first.getResponse().getContentAsString().contains("refreshToken"));
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+access)).andExpect(status().isOk());
   mvc.perform(get("/api/admin/users").header("Authorization","Bearer "+access)).andExpect(status().isForbidden());
   var second=mvc.perform(post("/api/auth/refresh").header("X-Requested-With","JLer").cookie(old)).andExpect(status().isOk()).andReturn();
   assertNotEquals(old.getValue(),cookie(second).getValue());
   mvc.perform(post("/api/auth/refresh").header("X-Requested-With","JLer").cookie(old)).andExpect(status().isUnauthorized());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(second))).andExpect(status().isUnauthorized());
 }
 @Test void logoutRevokesCookieAndAccess()throws Exception{
   var session=register("LOGOUT1");
   mvc.perform(post("/api/auth/logout").header("X-Requested-With","JLer").cookie(cookie(session))).andExpect(status().isOk());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(session))).andExpect(status().isUnauthorized());
   mvc.perform(post("/api/auth/refresh").header("X-Requested-With","JLer").cookie(cookie(session))).andExpect(status().isUnauthorized());
 }
 @Test void csrfHeaderAndForgedTokenRejected()throws Exception{
   mvc.perform(post("/api/auth/refresh")).andExpect(status().isForbidden());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer forged.jwt.value")).andExpect(status().isUnauthorized());
 }

 @Test void serverScoringRetryAndIdempotentSubmit()throws Exception{
   var login=mvc.perform(post("/api/auth/login").header("X-Requested-With","JLer").contentType("application/json")
     .content("{\"email\":\"admin@test.local\",\"password\":\"AdminTest123!\"}")).andExpect(status().isOk()).andReturn();
   String admin=token(login),student=token(register("SCORE1"));
   mvc.perform(post("/api/admin/catalog/exams").header("Authorization","Bearer "+admin).contentType("application/json")
     .content("{\"id\":\"score_test\",\"title\":\"Score test\",\"majorId\":\"\",\"questions\":[{\"q\":\"1+1\",\"o\":[\"1\",\"2\",\"3\",\"4\"],\"a\":1},{\"q\":\"2+2\",\"o\":[\"1\",\"2\",\"3\",\"4\"],\"a\":3}]}"))
     .andExpect(status().isOk());
   var start=mvc.perform(post("/api/attempts").header("Authorization","Bearer "+student).contentType("application/json")
     .content("{\"examId\":\"score_test\",\"schoolId\":\"hubt\",\"mode\":\"exam\"}")).andExpect(status().isOk()).andReturn();
   String id=mapper.readTree(start.getResponse().getContentAsString()).path("id").asText();
   String body="{\"correct\":999,\"answers\":[{\"index\":0,\"order\":[1,0,3,2],\"picked\":0},{\"index\":1,\"order\":[0,1,2,3],\"picked\":null}]}";
   var first=mvc.perform(post("/api/attempts/"+id+"/submit").header("Authorization","Bearer "+student).contentType("application/json").content(body))
     .andExpect(status().isOk()).andReturn();
   var result=mapper.readTree(first.getResponse().getContentAsString());assertEquals(50,result.path("pct").asInt());assertEquals("hubt",result.path("schoolId").asText());
   var repeat=mvc.perform(post("/api/attempts/"+id+"/submit").header("Authorization","Bearer "+student).contentType("application/json").content("{}"))
     .andExpect(status().isOk()).andReturn();
   assertEquals(result,mapper.readTree(repeat.getResponse().getContentAsString()));
   var retry=mvc.perform(post("/api/attempts").header("Authorization","Bearer "+student).contentType("application/json")
     .content("{\"examId\":\"score_test\",\"retryFrom\":\""+id+"\"}")).andExpect(status().isOk()).andReturn();
   assertEquals(1,mapper.readTree(retry.getResponse().getContentAsString()).path("questions").size());
 }

 MvcResult postJson(String path,String body)throws Exception{return mvc.perform(post(path).header("X-Requested-With","JLer").contentType("application/json").content(body)).andReturn();}
 String requestId(String email)throws Exception{var r=postJson("/api/auth/forgot-password","{\"email\":\""+email+"\"}");assertEquals(200,r.getResponse().getStatus());return mapper.readTree(r.getResponse().getContentAsString()).path("requestId").asText();}
 String capturedOtp(String email){var cap=org.mockito.ArgumentCaptor.forClass(String.class);org.mockito.Mockito.verify(resetMail).sendOtp(org.mockito.ArgumentMatchers.eq(email),cap.capture());return cap.getValue();}
 @Test void resetRequiresOtpAndRevokesSessions()throws Exception{
   var session=register("RESET1");String id=requestId("RESET1@test.local"),otp=capturedOtp("reset1@test.local");
   assertEquals(400,postJson("/api/auth/reset-password","{\"requestId\":\""+id+"\",\"resetToken\":\"fake\",\"password\":\"Changed123!\"}").getResponse().getStatus());
   var verified=postJson("/api/auth/verify-otp","{\"requestId\":\""+id+"\",\"otp\":\""+otp+"\"}");assertEquals(200,verified.getResponse().getStatus());
   String reset=mapper.readTree(verified.getResponse().getContentAsString()).path("resetToken").asText();
   assertEquals(400,postJson("/api/auth/verify-otp","{\"requestId\":\""+id+"\",\"otp\":\""+otp+"\"}").getResponse().getStatus());
   String body="{\"requestId\":\""+id+"\",\"resetToken\":\""+reset+"\",\"password\":\"Changed123!\"}";
   assertEquals(200,postJson("/api/auth/reset-password",body).getResponse().getStatus());
   assertEquals(400,postJson("/api/auth/reset-password",body).getResponse().getStatus());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(session))).andExpect(status().isUnauthorized());
   assertEquals(401,postJson("/api/auth/login","{\"email\":\"reset1@test.local\",\"password\":\"Student123!\"}").getResponse().getStatus());
   assertEquals(200,postJson("/api/auth/login","{\"email\":\"reset1@test.local\",\"password\":\"Changed123!\"}").getResponse().getStatus());
 }
 @Test void otpAttemptLimitExpiryAndResendCooldown()throws Exception{
   register("RESET2");String id=requestId("reset2@test.local"),otp=capturedOtp("reset2@test.local"),wrong=otp.equals("000000")?"111111":"000000";
   assertEquals(429,postJson("/api/auth/forgot-password","{\"email\":\"reset2@test.local\"}").getResponse().getStatus());
   for(int i=0;i<5;i++)assertEquals(400,postJson("/api/auth/verify-otp","{\"requestId\":\""+id+"\",\"otp\":\""+wrong+"\"}").getResponse().getStatus());
   assertEquals(400,postJson("/api/auth/verify-otp","{\"requestId\":\""+id+"\",\"otp\":\""+otp+"\"}").getResponse().getStatus());
   register("RESET3");String expired=requestId("reset3@test.local"),valid=capturedOtp("reset3@test.local");
   jdbc.update("update password_reset_challenges set expires_at=? where id=?",java.sql.Timestamp.from(java.time.Instant.now().minusSeconds(1)),expired);
   assertEquals(400,postJson("/api/auth/verify-otp","{\"requestId\":\""+expired+"\",\"otp\":\""+valid+"\"}").getResponse().getStatus());
 }
 @Test void registrationTrimsEmailAndReportsDuplicate()throws Exception{
   assertEquals(200,postJson("/api/auth/register","{\"studentCode\":\" TRIM1 \",\"name\":\" Học sinh \",\"email\":\" trim1@test.local \",\"password\":\"Student123!\"}").getResponse().getStatus());
   var duplicate=postJson("/api/auth/register","{\"studentCode\":\"TRIM2\",\"name\":\"Test\",\"email\":\"trim1@test.local\",\"password\":\"Student123!\"}");assertEquals(409,duplicate.getResponse().getStatus());assertTrue(duplicate.getResponse().getContentAsString(java.nio.charset.StandardCharsets.UTF_8).contains("Email"));
   var invalid=postJson("/api/auth/register","{\"studentCode\":\"A\",\"name\":\"Test\",\"email\":\"bad\",\"password\":\"Student123!\"}");assertEquals(400,invalid.getResponse().getStatus());assertTrue(mapper.readTree(invalid.getResponse().getContentAsString()).path("errors").has("email"));
 }
 @Test void adminCatalogReferencesAndPublicContent()throws Exception{
   String admin=token(postJson("/api/auth/login","{\"email\":\"admin@test.local\",\"password\":\"AdminTest123!\"}"));
   mvc.perform(post("/api/admin/catalog/schools").header("Authorization","Bearer "+admin).contentType("application/json").content("{\"id\":\"test_school\",\"name\":\"Test school\",\"shortName\":\"TS\"}")).andExpect(status().isOk());
   mvc.perform(post("/api/admin/catalog/topics").header("Authorization","Bearer "+admin).contentType("application/json").content("{\"id\":\"topic_test\",\"title\":\"Test topic\"}")).andExpect(status().isOk());
   mvc.perform(post("/api/admin/catalog/exams").header("Authorization","Bearer "+admin).contentType("application/json").content("{\"id\":\"admin_exam\",\"title\":\"Test exam\",\"schoolId\":\"test_school\",\"topicId\":\"topic_test\",\"questions\":[]}")).andExpect(status().isOk());
   mvc.perform(delete("/api/admin/catalog/schools/test_school").header("Authorization","Bearer "+admin)).andExpect(status().isConflict());
   mvc.perform(delete("/api/admin/catalog/topics/topic_test").header("Authorization","Bearer "+admin)).andExpect(status().isConflict());
   mvc.perform(patch("/api/admin/catalog/pages/gioi-thieu").header("Authorization","Bearer "+admin).contentType("application/json").content("{\"title\":\"JLer updated\",\"description\":\"New introduction\"}")).andExpect(status().isOk());
   mvc.perform(get("/api/public/catalog")).andExpect(status().isOk()).andExpect(jsonPath("$.schools").isArray()).andExpect(jsonPath("$.topics").isArray()).andExpect(jsonPath("$.pages[0].title").value("JLer updated"));
   mvc.perform(delete("/api/admin/catalog/exams/admin_exam").header("Authorization","Bearer "+admin)).andExpect(status().isOk());
   mvc.perform(delete("/api/admin/catalog/schools/test_school").header("Authorization","Bearer "+admin)).andExpect(status().isOk());
 }

 @Test void newDeviceRevokesOldAccessAndRefreshOnlyForSameAccount()throws Exception{
   var first=register("SINGLE1");var other=register("OTHER1");
   var second=postJson("/api/auth/login","{\"email\":\"single1@test.local\",\"password\":\"Student123!\"}");
   assertEquals(200,second.getResponse().getStatus());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(first))).andExpect(status().isUnauthorized());
   mvc.perform(post("/api/auth/refresh").header("X-Requested-With","JLer").cookie(cookie(first))).andExpect(status().isUnauthorized()).andExpect(jsonPath("$.message").value(org.hamcrest.Matchers.containsString("thiết bị khác")));
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(second))).andExpect(status().isOk());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(other))).andExpect(status().isOk());
   mvc.perform(post("/api/auth/logout").header("X-Requested-With","JLer").cookie(cookie(first))).andExpect(status().isOk());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(second))).andExpect(status().isOk());
   mvc.perform(post("/api/auth/refresh").header("X-Requested-With","JLer").cookie(cookie(second))).andExpect(status().isOk());
 }
 @Test void wrongPasswordDoesNotEvictTheActiveDevice()throws Exception{
   var first=register("SINGLE2");
   assertEquals(401,postJson("/api/auth/login","{\"email\":\"single2@test.local\",\"password\":\"Incorrect123!\"}").getResponse().getStatus());
   mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(first))).andExpect(status().isOk());
 }
 @Test void simultaneousLoginsLeaveOnlyOneActiveSession()throws Exception{
   register("SINGLE3");
   var pool=java.util.concurrent.Executors.newFixedThreadPool(2);
   var start=new java.util.concurrent.CountDownLatch(1);
   java.util.concurrent.Callable<MvcResult> login=()->{start.await();return postJson("/api/auth/login","{\"email\":\"single3@test.local\",\"password\":\"Student123!\"}");};
   try{
     var a=pool.submit(login);var b=pool.submit(login);start.countDown();
     var one=a.get(20,java.util.concurrent.TimeUnit.SECONDS);var two=b.get(20,java.util.concurrent.TimeUnit.SECONDS);
     assertEquals(200,one.getResponse().getStatus());assertEquals(200,two.getResponse().getStatus());
     int status1=mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(one))).andReturn().getResponse().getStatus();
     int status2=mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token(two))).andReturn().getResponse().getStatus();
     assertTrue((status1==200&&status2==401)||(status1==401&&status2==200));
   }finally{pool.shutdownNow();}
 }
 @Test void accountSchoolAndProfilePersistWithoutChangingPrivileges()throws Exception{
   var session=postJson("/api/auth/register","{\"studentCode\":\"PROFILE1\",\"name\":\"Student\",\"email\":\"profile1@test.local\",\"password\":\"Student123!\",\"schoolId\":\"hubt\"}");
   assertEquals(200,session.getResponse().getStatus());
   assertEquals("hubt",mapper.readTree(session.getResponse().getContentAsString()).path("user").path("schoolId").asText());
   String bearer="Bearer "+token(session);
   mvc.perform(patch("/api/auth/me").header("Authorization",bearer).contentType("application/json")
    .content("{\"name\":\"New name\",\"email\":\"newprofile@test.local\",\"schoolId\":\"hubt\",\"role\":\"ADMIN\"}"))
    .andExpect(status().isOk()).andExpect(jsonPath("$.name").value("New name")).andExpect(jsonPath("$.role").value("STUDENT"));
   mvc.perform(get("/api/auth/me").header("Authorization",bearer)).andExpect(jsonPath("$.email").value("newprofile@test.local"));
   mvc.perform(patch("/api/auth/me").header("Authorization",bearer).contentType("application/json").content("{\"schoolId\":\"missing_school\"}")).andExpect(status().isBadRequest());
   mvc.perform(patch("/api/auth/me").header("Authorization",bearer).contentType("application/json").content("{\"email\":\"admin@test.local\"}")).andExpect(status().isConflict());
   assertEquals(200,postJson("/api/auth/login","{\"email\":\"newprofile@test.local\",\"password\":\"Student123!\"}").getResponse().getStatus());
 }
 @Test void uploadedImagesRequireAdminAndArePubliclyReadable()throws Exception{
   String admin=token(postJson("/api/auth/login","{\"email\":\"admin@test.local\",\"password\":\"AdminTest123!\"}"));
   String student=token(register("UPLOAD1"));
   var buffer=new java.io.ByteArrayOutputStream();
   javax.imageio.ImageIO.write(new java.awt.image.BufferedImage(2,2,java.awt.image.BufferedImage.TYPE_INT_RGB),"png",buffer);
   byte[] bytes=buffer.toByteArray();
   var file=new org.springframework.mock.web.MockMultipartFile("file","../../evil.png","image/png",bytes);
   mvc.perform(multipart("/api/admin/uploads/images").file(file)).andExpect(status().isUnauthorized());
   mvc.perform(multipart("/api/admin/uploads/images").file(file).header("Authorization","Bearer "+student)).andExpect(status().isForbidden());
   var upload=mvc.perform(multipart("/api/admin/uploads/images").file(file).header("Authorization","Bearer "+admin)).andExpect(status().isOk()).andReturn();
   String url=mapper.readTree(upload.getResponse().getContentAsString()).path("url").asText();
   assertTrue(url.matches("/api/public/images/[0-9a-f-]{36}\\.png"));
   mvc.perform(get(url)).andExpect(status().isOk()).andExpect(content().contentType("image/png")).andExpect(content().bytes(bytes));
   var fake=new org.springframework.mock.web.MockMultipartFile("file","photo.png","image/png","<script>bad</script>".getBytes());
   mvc.perform(multipart("/api/admin/uploads/images").file(fake).header("Authorization","Bearer "+admin)).andExpect(status().isBadRequest());
   mvc.perform(get("/api/public/images/not-an-image.png")).andExpect(status().isNotFound());
 }

}
