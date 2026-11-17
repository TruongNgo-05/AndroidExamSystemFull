package com.example.project_back.controller.auth;
import com.example.project_back.common.BaseResponse;
import jakarta.validation.Valid;
import jakarta.servlet.http.*;
import java.time.*;
import java.util.*;
import com.example.project_back.mapper.RequestMapper;
import com.example.project_back.dto.authentication.*;
import com.example.project_back.service.*;
import com.example.project_back.repository.TokenRepository;
import com.example.project_back.dto.response.user.Account;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.http.*;
@RestController @RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationService auth;private final RequestMapper mapper;private final TokenRepository tokens;private final boolean secure;
    public AuthenticationController(AuthenticationService auth,RequestMapper mapper,TokenRepository tokens,@Value("${app.cookie-secure:false}") boolean secure){this.auth=auth;this.mapper=mapper;this.tokens=tokens;this.secure=secure;}
    private void cookie(HttpServletResponse res,String token,long seconds){
        res.addHeader(HttpHeaders.SET_COOKIE,ResponseCookie.from("jler_refresh",token).httpOnly(true).secure(secure)
            .sameSite("Strict").path("/api/auth").maxAge(seconds).build().toString());
        res.setHeader(HttpHeaders.CACHE_CONTROL,"no-store");
    }
    private Object send(Map<String,Object> pair,HttpServletResponse res){
        String refresh=(String)pair.remove("refreshToken");
        Instant expiry=Instant.parse((String)pair.remove("refreshExpiresAt"));
        cookie(res,refresh,Math.max(0,Duration.between(Instant.now(),expiry).getSeconds()));return pair;
    }
    @PostMapping("/login") public Object login(@Valid @RequestBody LoginRequest b,HttpServletResponse res){return send(auth.login(mapper.toJson(b)),res);}
    @PostMapping("/register") public Object register(@Valid @RequestBody RegisterRequest b,HttpServletResponse res){return send(auth.register(mapper.toJson(b)),res);}
    @PostMapping("/refresh") public Object refresh(@CookieValue(name="jler_refresh",required=false)String refresh,HttpServletResponse res){
        try{return send(tokens.refresh(refresh),res);}catch(com.example.project_back.exception.ApplicationException e){cookie(res,"",0);throw e;}
    }
    @PostMapping("/logout") public Object logout(@CookieValue(name="jler_refresh",required=false)String refresh,
            @RequestHeader(value="Authorization",defaultValue="")String h,HttpServletResponse res){
        tokens.logout(refresh,h.startsWith("Bearer ")?h.substring(7):null);cookie(res,"",0);return BaseResponse.ok();
    }
    @GetMapping("/me") public Account me(@AuthenticationPrincipal Account u){return u;}
    @PatchMapping("/me") public Account profile(@AuthenticationPrincipal Account u,@RequestBody JsonNode b){return auth.update(u.id(),b,u);}
}
