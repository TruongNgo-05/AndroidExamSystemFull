package com.example.project_back;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;
import org.springframework.transaction.annotation.Transactional;
import com.fasterxml.jackson.databind.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(properties=  {
    "app.admin-email=admin@test.local","app.admin-password=AdminTest123!","app.jwt-secret=YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODk=","app.seed=false"
}
) @AutoConfigureMockMvc @Transactional @EnabledIfEnvironmentVariable(named="JLER_TEST_MYSQL",matches="true") class ApiIntegrationTest  {
    @DynamicPropertySource static void properties(DynamicPropertyRegistry r)  {
        String url=System.getenv("TEST_DB_URL");
        if(url==null||!url.matches("jdbc:mysql://[^/]+/jlerTestingHubt_test(?:[?].*)?"))throw new IllegalStateException("Use a separate jlerTestingHubt_test database");
        r.add("spring.datasource.url",()->url);
        r.add("spring.datasource.username",()->System.getenv().getOrDefault("TEST_DB_USER","root"));
        r.add("spring.datasource.password",()->System.getenv().getOrDefault("TEST_DB_PASSWORD",""));
    }
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper mapper;
    JsonNode postJson(String path,String token,String body)throws Exception  {
        return mapper.readTree(mvc.perform(post(path).header("X-Requested-With","JLer").header("Authorization","Bearer "+token).contentType("application/json").content(body)).andExpect(status().isOk()).andReturn().getResponse().getContentAsString());
    }
    @Test void securityAndAuthoritativeIdempotentSubmission()throws Exception  {
        String admin=postJson("/api/auth/login","","{\"email\":\"admin@test.local\",\"password\":\"AdminTest123!\",\"role\":\"ADMIN\"}").path("accessToken").asText();
        JsonNode student=postJson("/api/auth/register","","{\"name\":\"An\",\"email\":\"an@test.local\",\"studentCode\":\"SV001\",\"className\":\"A1\",\"password\":\"Student123!\",\"role\":\"ADMIN\"}");
        String token=student.path("accessToken").asText();
        assertEquals("STUDENT",student.path("user").path("role").asText());
        mvc.perform(get("/api/admin/users").header("Authorization","Bearer "+token)).andExpect(status().isForbidden());
        postJson("/api/admin/catalog/exams",admin,"{\"id\":\"test_exam\",\"title\":\"Test\",\"majorId\":\"\",\"questions\":[{\"q\":\"1+1?\",\"o\":[\"1\",\"2\",\"3\",\"4\"],\"a\":1},{\"q\":\"2+2?\",\"o\":[\"1\",\"2\",\"3\",\"4\"],\"a\":3}]}");
        String id=postJson("/api/attempts",token,"{\"examId\":\"test_exam\"}").path("id").asText();
        String body="{\"correct\":999,\"answers\":[{\"index\":0,\"order\":[1,0,3,2],\"picked\":0},{\"index\":1,\"order\":[0,1,2,3],\"picked\":null}]}";
        JsonNode result=postJson("/api/attempts/"+id+"/submit",token,body);
        assertEquals(1,result.path("correct").asInt());
        assertEquals(1,result.path("unanswered").asInt());
        assertEquals(50,result.path("pct").asInt());
        assertEquals(result,postJson("/api/attempts/"+id+"/submit",token,body));
        String other=postJson("/api/auth/register","","{\"name\":\"B\",\"email\":\"b@test.local\",\"studentCode\":\"SV002\",\"password\":\"Student123!\"}").path("accessToken").asText();
        mvc.perform(get("/api/attempts/"+id).header("Authorization","Bearer "+other)).andExpect(status().isNotFound());
        JsonNode retry=postJson("/api/attempts",token,"{\"examId\":\"test_exam\",\"retryFrom\":\""+id+"\"}");
        assertEquals(1,retry.path("questions").size());
        postJson("/api/auth/logout",token,"{}");
        mvc.perform(get("/api/auth/me").header("Authorization","Bearer "+token)).andExpect(status().isUnauthorized());
    }

    @Autowired com.example.project_back.repository.CatalogRepository catalog;
    @jakarta.persistence.PersistenceContext jakarta.persistence.EntityManager entityManager;

    @Test void jpaJsonRoundTripAndStaleRevision() {
        var source=mapper.createObjectNode().put("id","jpa_round_trip").put("title","Tiếng Việt — kiểm tra JPA");
        var question=mapper.createObjectNode().put("q","Hình nào?").put("image","image/mnm/hinh-01.png").put("a",2);
        question.set("o",mapper.createArrayNode().add("A").add("B").add("C").add("D"));
        source.set("questions",mapper.createArrayNode().add(question));
        var created=catalog.create("exams",source);
        entityManager.clear();
        var loaded=catalog.get("exams","jpa_round_trip");
        assertEquals(source.path("questions"),loaded.path("questions"));
        var stale=loaded.deepCopy();
        loaded.put("title","Đã cập nhật");
        var saved=catalog.save("exams","jpa_round_trip",loaded);
        assertTrue(saved.path("_revision").asLong()>created.path("_revision").asLong());
        entityManager.clear();
        assertEquals("Đã cập nhật",catalog.get("exams","jpa_round_trip").path("title").asText());
        assertThrows(com.example.project_back.exception.ApplicationException.class,
            ()->catalog.save("exams","jpa_round_trip",stale));
    }
}
