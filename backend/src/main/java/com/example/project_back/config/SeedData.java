package com.example.project_back.config;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.service.AuthenticationService;
import com.example.project_back.repository.*;
import com.example.project_back.service.*;
@Configuration public class SeedData  {
    @Bean ApplicationRunner seed(CatalogRepository store,CatalogService catalog,AuthenticationService auth,ObjectMapper mapper,@Value("${app.admin-email}")String email,@Value("${app.admin-password}")String password,@Value("${app.seed}")boolean enabled,@Value("${app.seed-overwrite:false}")boolean overwrite)  {
        return args->  {
            if(!store.exists("settings","key_mutex"))store.create("settings",mapper.createObjectNode().put("id","key_mutex"));
            if(!store.exists("settings","password_reset_mutex"))store.create("settings",mapper.createObjectNode().put("id","password_reset_mutex"));
            if(auth.list().isEmpty())  {
                if(password.isBlank())throw new IllegalStateException("Set ADMIN_PASSWORD to create the initial administrator.");
                ObjectNode user=mapper.createObjectNode().put("name","Quản trị viên JLer").put("email",email).put("password",password).put("role","ADMIN");
                auth.create(user,true);
            }
            if(!store.exists("pages","gioi-thieu"))store.create("pages",mapper.createObjectNode()
                .put("id","gioi-thieu").put("title","Ôn thi trắc nghiệm")
                .put("description","JLer giúp bạn ôn tập theo trường và ngành, thử sức với đề trắc nghiệm và cùng Jeli xây thói quen ôn mỗi ngày."));
            if(enabled)  {
                try(var in=new ClassPathResource("quiz-seed.json").getInputStream())  {
                    JsonNode seed=mapper.readTree(in);
                    for(String kind:new String[]  {
                        "schools","majors","exams","notifications"
                    }
                    )for(JsonNode item:seed.path(kind))  {
                        String id=item.path("id").asText();
                        // Trusted bundled source is imported byte-for-byte, including legacy blank choices.
                        // New/edited questions submitted through admin APIs still use strict validation.
                        if(!store.exists(kind,id))store.create(kind,(ObjectNode)item);
                        else if(overwrite){
                            ObjectNode replacement=((ObjectNode)item).deepCopy();
                            replacement.put("_revision",store.get(kind,id).path("_revision").asLong());
                            store.save(kind,id,replacement);
                        }
                    }
                }
            }
        }
        ;
    }
}
