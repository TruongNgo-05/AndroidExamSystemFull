package com.example.project_back.controller.admin;
import com.example.project_back.common.BaseResponse;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.service.*;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
@RestController @RequestMapping("/api") public class AdminController  {
    private final CatalogService catalog;
    private final AuthenticationService auth;
    private final AttemptService attempts;
    private final KeyService keys;
    private final SubmissionService submissions;
    public AdminController(CatalogService catalog, AuthenticationService auth, AttemptService attempts, KeyService keys, SubmissionService submissions)  {
        this.catalog = catalog;
        this.auth = auth;
        this.attempts = attempts;
        this.keys = keys;
        this.submissions = submissions;
    }
    @GetMapping("/admin/users") public Object users()  {
        return auth.list();
    }
    @PostMapping("/admin/users") public Object createUser(@RequestBody JsonNode b)  {
        return auth.create(b,true);
    }
    @PatchMapping("/admin/users/{id}") public Object updateUser(@AuthenticationPrincipal Account u,@PathVariable String id,@RequestBody JsonNode b)  {
        return auth.update(id,b,u);
    }
    @DeleteMapping("/admin/users/{id}") public Object deleteUser(@AuthenticationPrincipal Account u,@PathVariable String id)  {
        auth.delete(id,u);
        return BaseResponse.ok();
    }
    @GetMapping("/admin/results") public Object results(@AuthenticationPrincipal Account u)  {
        return attempts.history(u);
    }
    @PostMapping("/admin/submissions/{id}/review") public Object review(@AuthenticationPrincipal Account u,@PathVariable String id,@RequestBody JsonNode b)  {
        return submissions.review(u,id,b);
    }
    @PostMapping("/admin/keys") public Object createKey(@RequestBody ObjectNode b)  {
        return keys.save(null,b);
    }
    @PatchMapping("/admin/keys/{id}") public Object updateKey(@PathVariable String id,@RequestBody ObjectNode b)  {
        return keys.save(id,b);
    }
    @DeleteMapping("/admin/keys/{id}") public Object deleteKey(@PathVariable String id)  {
        keys.delete(id);
        return BaseResponse.ok();
    }
    @DeleteMapping("/admin/submissions/{id}") public Object deleteSubmission(@PathVariable String id)  {
        submissions.delete(id);
        return BaseResponse.ok();
    }
    @GetMapping("/admin/catalog/{kind}") public Object list(@PathVariable String kind)  {
        return catalog.list(kind);
    }
    @PostMapping("/admin/catalog/{kind}") public Object create(@PathVariable String kind,@RequestBody ObjectNode b)  {
        return catalog.create(kind,b);
    }
    @PatchMapping("/admin/catalog/{kind}/{id}") public Object update(@PathVariable String kind,@PathVariable String id,@RequestBody ObjectNode b)  {
        return catalog.update(kind,id,b);
    }
    @DeleteMapping("/admin/catalog/{kind}/{id}") public Object delete(@PathVariable String kind,@PathVariable String id)  {
        catalog.delete(kind,id);
        return BaseResponse.ok();
    }
    @PostMapping("/admin/exams/{id}/questions") public Object addQuestion(@PathVariable String id,@RequestBody ObjectNode b)  {
        return catalog.editQuestion(id,0,b,"add");
    }
    @PatchMapping("/admin/exams/{id}/questions/{index}") public Object updateQuestion(@PathVariable String id,@PathVariable int index,@RequestBody ObjectNode b)  {
        return catalog.editQuestion(id,index,b,"update");
    }
    @DeleteMapping("/admin/exams/{id}/questions/{index}") public Object deleteQuestion(@PathVariable String id,@PathVariable int index)  {
        return catalog.editQuestion(id,index,null,"delete");
    }
}
