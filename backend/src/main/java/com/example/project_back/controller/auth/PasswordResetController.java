package com.example.project_back.controller.auth;
import com.example.project_back.service.PasswordResetService;
import com.example.project_back.common.BaseResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import jakarta.servlet.http.*;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/auth") public class PasswordResetController {
 private final PasswordResetService service;public PasswordResetController(PasswordResetService service){this.service=service;}
 public record EmailRequest(@NotBlank @Email @Size(max=254)String email){public EmailRequest{email=email==null?null:email.trim();}}
 public record VerifyRequest(@NotBlank @Size(max=36)String requestId,@NotBlank @Pattern(regexp="[0-9]{6}",message="OTP gồm 6 chữ số.")String otp){}
 public record ResetRequest(@NotBlank @Size(max=36)String requestId,@NotBlank @Size(max=100)String resetToken,@NotBlank @Size(min=6,max=72)String password){}
 @PostMapping("/forgot-password") public Object request(@Valid @RequestBody EmailRequest body,HttpServletRequest req,HttpServletResponse res){res.setHeader("Cache-Control","no-store");return service.request(body.email(),req.getRemoteAddr());}
 @PostMapping("/verify-otp") public Object verify(@Valid @RequestBody VerifyRequest body,HttpServletResponse res){res.setHeader("Cache-Control","no-store");return service.verify(body.requestId(),body.otp());}
 @PostMapping("/reset-password") public Object reset(@Valid @RequestBody ResetRequest body,HttpServletResponse res){res.setHeader("Cache-Control","no-store");service.reset(body.requestId(),body.resetToken(),body.password());return BaseResponse.ok();}
}
