package com.example.project_back.mapper;
import com.example.project_back.entity.User;
import com.example.project_back.dto.response.user.Account;
public final class UserMapper  {
    private UserMapper() {
    }
    public static Account response(User u) {
        return new Account(u.id(),u.name(),u.email(),u.role(),u.studentCode(),u.className(),u.status(),u.schoolId());
    }
}
