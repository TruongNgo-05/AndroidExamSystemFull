package com.example.project_back.controller.student;
import com.example.project_back.service.AiService;
import com.example.project_back.dto.response.user.Account;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/mobile/ai")
public class MobileAiController {
 private final AiService ai;public MobileAiController(AiService a){ai=a;}
 public record Explain(@NotBlank @Size(max=256) String questionId){}
 @PostMapping("/explain") Object explain(@AuthenticationPrincipal Account u,@Valid @RequestBody Explain b){return ai.explain(u.id(),b.questionId);}
}
