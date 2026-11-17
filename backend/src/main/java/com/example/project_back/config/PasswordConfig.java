package com.example.project_back.config;
import org.springframework.context.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Configuration public class PasswordConfig  {
    @Bean PasswordEncoder passwordEncoder()  {
        return new BCryptPasswordEncoder(12);
    }
}
