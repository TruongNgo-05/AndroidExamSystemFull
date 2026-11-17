package com.example.project_back.controller.student;
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
@RestController @RequestMapping("/api") public class StudentController  {
    private final AttemptService attempts;
    private final KeyService keys;
    private final SubmissionService submissions;
    private final BootstrapService bootstrap;
    public StudentController(AttemptService attempts, KeyService keys, SubmissionService submissions, BootstrapService bootstrap)  {
        this.attempts = attempts;
        this.keys = keys;
        this.submissions = submissions;
        this.bootstrap = bootstrap;
    }
    @GetMapping("/history") public Object history(@AuthenticationPrincipal Account u)  {
        return attempts.history(u);
    }
    @DeleteMapping("/history") public Object clear(@AuthenticationPrincipal Account u)  {
        attempts.clear(u);
        return BaseResponse.ok();
    }
    @PutMapping("/notification-reads") public Object read(@AuthenticationPrincipal Account u,@RequestBody List<String> ids)  {
        return bootstrap.read(u,ids);
    }
    @PostMapping("/keys/redeem") public Object redeem(@AuthenticationPrincipal Account u,@RequestBody JsonNode b)  {
        return keys.redeem(u,Json.text(b,"code"));
    }
    @PostMapping("/submissions") public Object submit(@AuthenticationPrincipal Account u,@RequestBody ObjectNode b)  {
        return submissions.create(u,b);
    }
    @GetMapping("/submissions") public Object ownSubmissions(@AuthenticationPrincipal Account u)  {
        return submissions.list(u);
    }
}
