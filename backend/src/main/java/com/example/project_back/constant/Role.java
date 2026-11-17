package com.example.project_back.constant;
public enum Role  {
    ADMIN, STUDENT;
    public static boolean supports(String role)  {
        for(Role r:values())if(r.name().equals(role))return true;
        return false;
    }
}
