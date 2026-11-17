package com.example.project_back.config;
import java.util.*;
import java.io.IOException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.context.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.*;
import org.springframework.web.filter.OncePerRequestFilter;
import com.example.project_back.dto.response.user.*;
import com.example.project_back.service.*;
@Configuration public class SecurityConfig  {
    @Bean SecurityFilterChain security(HttpSecurity http,AuthenticationService auth,@Value("${app.cors-origins}") String origins)throws Exception  {
        CorsConfiguration cors=new CorsConfiguration();
        cors.setAllowedOrigins(Arrays.stream(origins.split(",")).map(String::trim).toList());
        cors.setAllowedMethods(List.of("GET","POST","PUT","PATCH","DELETE","OPTIONS"));
        cors.setAllowedHeaders(List.of("Authorization","Content-Type","X-Requested-With"));
        cors.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",cors);
        return http.cors(c->c.configurationSource(source)).csrf(c->c.disable()).sessionManagement(s->s.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) .authorizeHttpRequests(a->a.requestMatchers("/media/**","/api/health","/api/public/**","/api/auth/login","/api/auth/register","/api/auth/refresh","/api/auth/logout","/api/auth/forgot-password","/api/auth/verify-otp","/api/auth/reset-password").permitAll().requestMatchers(org.springframework.http.HttpMethod.GET,"/api/mobile/subjects","/api/mobile/subjects/*/study","/api/mobile/notifications").permitAll().requestMatchers("/api/admin/**").hasRole("ADMIN").requestMatchers("/api/mobile/**","/api/attempts/**","/api/submissions/**","/api/keys/redeem").hasRole("STUDENT").requestMatchers(req->"GET".equals(req.getMethod())&&!req.getRequestURI().startsWith(req.getContextPath()+"/api/")).permitAll().anyRequest().authenticated()) .exceptionHandling(e->e.authenticationEntryPoint((req,res,ex)->error(res,401,"Bạn cần đăng nhập.")).accessDeniedHandler((req,res,ex)->error(res,403,"Bạn không có quyền truy cập."))) .addFilterBefore(new OncePerRequestFilter()  {
            @Override protected void doFilterInternal(HttpServletRequest req,HttpServletResponse res,FilterChain chain)throws ServletException,IOException  {
                // Require a non-simple header for all cookie-auth endpoints (CSRF defense with strict CORS).
                if(req.getRequestURI().startsWith("/api/auth/") && "POST".equals(req.getMethod()) && !"JLer".equals(req.getHeader("X-Requested-With"))){error(res,403,"Thiếu header xác nhận yêu cầu.");return;}
                String header=req.getHeader("Authorization");if(header!=null&&header.startsWith("Bearer "))  {
                    Account user=auth.resolve(header.substring(7));if(user!=null)SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user,null,List.of(new SimpleGrantedAuthority("ROLE_"+user.role()))));
                }
                chain.doFilter(req,res);
            }
        }
        ,UsernamePasswordAuthenticationFilter.class).build();
    }
    static void error(HttpServletResponse res,int status,String message)throws IOException  {
        res.setStatus(status);
        res.setContentType("application/json;charset=UTF-8");
        res.getWriter().write("{\"message\":\""+message+"\"}");
    }
}
