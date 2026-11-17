package com.example.project_back.dto.response.user;
public record Account(String id,String name,String email,String role,String studentCode,String className,String status,String schoolId) {
 public Account(String id,String name,String email,String role,String studentCode,String className,String status){this(id,name,email,role,studentCode,className,status,"");}
}
