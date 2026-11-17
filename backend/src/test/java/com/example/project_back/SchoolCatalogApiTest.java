package com.example.project_back;
import com.example.project_back.repository.CatalogRepository;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.*;
import java.util.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(properties={"spring.datasource.url=jdbc:h2:mem:school_catalog;MODE=MySQL;DB_CLOSE_DELAY=-1","spring.datasource.driver-class-name=org.h2.Driver","spring.datasource.username=sa","spring.datasource.password=","spring.jpa.hibernate.ddl-auto=create-drop","app.admin-email=admin@schools.test","app.admin-password=AdminTest123!","app.seed=false","app.jwt-secret=YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODk="})
@AutoConfigureMockMvc
class SchoolCatalogApiTest {
 @Autowired MockMvc mvc;@Autowired ObjectMapper mapper;@Autowired CatalogRepository catalog;
 @BeforeEach void fixture(){if(catalog.exists("schools","hubt"))return;
  for(String[] item:new String[][]{{"hubt","Đại học Kinh doanh và Công nghệ Hà Nội","HUBT"},{"other","Đại học Điện lực","EPU"},{"empty","Trường chưa có đề","EMPTY"}})catalog.create("schools",mapper.createObjectNode().put("id",item[0]).put("name",item[1]).put("shortName",item[2]));
  catalog.create("majors",mapper.createObjectNode().put("id","cntt").put("title","Công nghệ thông tin"));catalog.create("majors",mapper.createObjectNode().put("id","ketoan").put("title","Kế toán"));
  exam("hubt_java","Lập trình Java","hubt","cntt");exam("legacy_hubt","Đề cũ chưa khai báo trường",null,"cntt");exam("other_accounting","Nguyên lý kế toán","other","ketoan");
 }
 void exam(String id,String title,String school,String major){ObjectNode e=mapper.createObjectNode().put("id",id).put("title",title).put("majorId",major);if(school!=null)e.put("schoolId",school);ObjectNode q=mapper.createObjectNode().put("q","Câu hỏi").put("a",1);q.set("o",mapper.createArrayNode().add("A").add("B").add("C").add("D"));e.set("questions",mapper.createArrayNode().add(q));catalog.create("exams",e);}
 JsonNode getJson(String path)throws Exception{return mapper.readTree(mvc.perform(get(path)).andExpect(status().isOk()).andReturn().getResponse().getContentAsString(java.nio.charset.StandardCharsets.UTF_8));}
 @Test void guestGetsActualSchoolsAndCounts()throws Exception{
  JsonNode list=getJson("/api/public/schools");Map<String,JsonNode> schools=new HashMap<>();list.forEach(s->schools.put(s.path("id").asText(),s));assertEquals(2,schools.get("hubt").path("subjectCount").asInt());assertEquals(2,schools.get("hubt").path("questionCount").asInt());assertEquals(1,schools.get("other").path("subjectCount").asInt());assertEquals(0,schools.get("empty").path("subjectCount").asInt());assertFalse(schools.get("hubt").has("_revision"));
 }
 @Test void schoolSelectionDoesNotMixOtherSchools()throws Exception{
  JsonNode other=getJson("/api/public/schools/other/subjects");assertEquals(1,other.size());assertEquals("other_accounting",other.get(0).path("id").asText());assertEquals("other",other.get(0).path("schoolId").asText());assertFalse(other.get(0).has("questions"));
  JsonNode hubt=getJson("/api/public/schools/hubt/subjects");assertEquals(2,hubt.size());hubt.forEach(e->assertEquals("hubt",e.path("schoolId").asText()));
 }
 @Test void emptySchoolReturnsEmptyData()throws Exception{assertEquals(0,getJson("/api/public/schools/empty/subjects").size());assertEquals(0,getJson("/api/public/schools/empty/majors").size());}
 @Test void majorsBelongToSelectedSchool()throws Exception{JsonNode majors=getJson("/api/public/schools/other/majors");assertEquals(1,majors.size());assertEquals("ketoan",majors.get(0).path("id").asText());assertEquals("cntt",getJson("/api/public/schools/hubt/majors").get(0).path("id").asText());}
 @Test void unknownSchoolDoesNotFallBackToHubt()throws Exception{mvc.perform(get("/api/public/schools/missing/subjects")).andExpect(status().isNotFound());mvc.perform(get("/api/public/schools/missing/majors")).andExpect(status().isNotFound());}
 @Test void filtersSupportVietnameseWithoutAccents()throws Exception{mvc.perform(get("/api/public/schools").param("keyword","dien luc")).andExpect(status().isOk()).andExpect(jsonPath("$.length()").value(1));mvc.perform(get("/api/public/schools/hubt/subjects").param("keyword","lap trinh").param("majorId","cntt")).andExpect(status().isOk()).andExpect(jsonPath("$.length()").value(1));assertEquals(0,getJson("/api/public/schools/other/subjects?majorId=cntt").size());}
 @Test void newlyAddedSchoolAppearsWithoutCodeChange()throws Exception{String id="new_"+UUID.randomUUID().toString().replace("-","");catalog.create("schools",mapper.createObjectNode().put("id",id).put("name","Trường mới API").put("shortName","NEW"));JsonNode list=getJson("/api/public/schools");assertTrue(java.util.stream.StreamSupport.stream(list.spliterator(),false).anyMatch(s->id.equals(s.path("id").asText())));assertEquals(0,getJson("/api/public/schools/"+id+"/subjects").size());}
}
