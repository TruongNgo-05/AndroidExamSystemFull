package com.example.project_back.controller.student;
import com.example.project_back.service.AuthenticationService;
import com.example.project_back.dto.response.user.Account;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
@RestController @RequestMapping("/api/mobile")
public class MobileProfileController {
 private final AuthenticationService auth;public MobileProfileController(AuthenticationService a){auth=a;}
 @PutMapping("/profile") Object profile(@AuthenticationPrincipal Account u,@RequestBody ObjectNode body){return auth.update(u.id(),body,u);}
}
