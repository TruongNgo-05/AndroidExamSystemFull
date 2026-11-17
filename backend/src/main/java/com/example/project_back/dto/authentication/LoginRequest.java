package com.example.project_back.dto.authentication;
import jakarta.validation.constraints.*;
public record LoginRequest(String role,String studentCode,String email,@NotBlank @Size(max=72) String password)  {
}
