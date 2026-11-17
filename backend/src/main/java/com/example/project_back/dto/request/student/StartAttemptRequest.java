package com.example.project_back.dto.request.student;
import jakarta.validation.constraints.*;
public record StartAttemptRequest(@NotBlank @Size(max=128) String examId,String retryFrom,String schoolId,String mode)  {
}
