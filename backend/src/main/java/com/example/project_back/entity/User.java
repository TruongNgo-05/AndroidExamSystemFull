package com.example.project_back.entity;
import jakarta.persistence.*;
import java.time.Instant;
@Entity @Table(name="app_users") public class User  {
    @Id @Column(length=64) private String id;
    @Column(nullable=false,length=200) private String name;
    @Column(nullable=false,unique=true,length=254) private String email;
    @Column(name="student_code",unique=true,length=64) private String studentCode;
    @Column(name="class_name",nullable=false,length=100) private String className="";
    @Column(name="school_id",length=128) private String schoolId;
    @Column(name="password_hash",nullable=false,length=100) private String passwordHash;
    @Column(nullable=false,length=16) private String role;
    @Column(nullable=false,length=16) private String status="active";
    @Column(nullable=false) private boolean deleted=false;
    @Column(name="created_at",nullable=false,columnDefinition="timestamp(6)") private Instant createdAt=Instant.now();
    protected User()  {
    }
    public User(String id,String name,String email,String role,String code,String clazz,String status,String hash)  {
        this.id=id;
        this.name=name;
        this.email=email;
        this.role=role;
        this.studentCode=code==null||code.isEmpty()?null:code;
        this.className=clazz;
        this.status=status;
        this.passwordHash=hash;
    }
    public String schoolId() { return schoolId==null?"":schoolId; }
    public void schoolId(String value) { schoolId=value==null||value.isBlank()?null:value; }
    public String id() {
        return id;
    }
    public String name() {
        return name;
    }
    public String email() {
        return email;
    }
    public String role() {
        return role;
    }
    public String studentCode() {
        return studentCode==null?"":studentCode;
    }
    public String className() {
        return className;
    }
    public String status() {
        return status;
    }
    public String passwordHash() {
        return passwordHash;
    }
    public void update(String name,String email,String code,String clazz,String role,String status) {
        this.name=name;
        this.email=email;
        this.studentCode=code.isEmpty()?null:code;
        this.className=clazz;
        this.role=role;
        this.status=status;
    }
    public void changePassword(String hash) {
        this.passwordHash=hash;
    }
    public void deactivate() {
        this.deleted=true;
        this.status="blocked";
    }
}
