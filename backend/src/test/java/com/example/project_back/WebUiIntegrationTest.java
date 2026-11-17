package com.example.project_back;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@SpringBootTest(properties={"spring.datasource.url=jdbc:h2:mem:web_ui;MODE=MySQL;DB_CLOSE_DELAY=-1","spring.datasource.driver-class-name=org.h2.Driver","spring.datasource.username=sa","spring.datasource.password=","spring.jpa.hibernate.ddl-auto=create-drop","app.seed=false","app.admin-password=WebUiAdminTest123!","app.jwt-secret=YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODk="})
@AutoConfigureMockMvc
class WebUiIntegrationTest {
 @Autowired MockMvc mvc;
 @Test void guestCanOpenAndReloadBrowserRoutes()throws Exception{for(String path:new String[]{"/","/login","/admin","/hubt/cntt/java/setup"})mvc.perform(get(path)).andExpect(status().isOk()).andExpect(forwardedUrl("/index.html"));}
 @Test void builtFrontendIsActuallyBundled()throws Exception{mvc.perform(get("/index.html")).andExpect(status().isOk()).andExpect(content().string(org.hamcrest.Matchers.containsString("/assets/")));}
 @Test void publicWebDoesNotExposeProtectedApi()throws Exception{mvc.perform(get("/api/admin/users")).andExpect(status().isUnauthorized());mvc.perform(get("/api/mobile/attempts")).andExpect(status().isUnauthorized());}
 @Test void missingApiNeverReturnsSpa()throws Exception{mvc.perform(get("/api/public/not-an-endpoint")).andExpect(status().isNotFound());}
}
