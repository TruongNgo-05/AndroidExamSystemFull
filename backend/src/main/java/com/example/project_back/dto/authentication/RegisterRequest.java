package com.example.project_back.dto.authentication;
import jakarta.validation.constraints.*;
public record RegisterRequest(
 @Size(max=128,message="Mã trường quá dài.") String schoolId,
 @NotBlank(message="Nhập mã sinh viên.") @Size(max=64,message="Mã sinh viên tối đa 64 ký tự.") String studentCode,
 @NotBlank(message="Nhập họ và tên.") @Size(max=200,message="Họ tên tối đa 200 ký tự.") String name,
 @Size(max=100,message="Tên lớp tối đa 100 ký tự.") String className,
 @NotBlank(message="Nhập email.") @Email(message="Email không hợp lệ.") @Size(max=254,message="Email quá dài.") String email,
 @NotBlank(message="Nhập mật khẩu.") @Size(min=6,max=72,message="Mật khẩu từ 6 đến 72 ký tự (tối đa 72 byte UTF-8).") String password) {
 public RegisterRequest {studentCode=studentCode==null?null:studentCode.trim(); name=name==null?null:name.trim(); email=email==null?null:email.trim();}
}
