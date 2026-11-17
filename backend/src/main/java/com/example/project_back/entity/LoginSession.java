package com.example.project_back.entity;
import jakarta.persistence.*;
import java.time.Instant;
@Entity @Table(name="login_sessions",indexes=@Index(name="idx_login_user",columnList="user_id"))
public class LoginSession {
    @Id @Column(length=36) public String id;
    @Column(name="user_id",nullable=false,length=64) public String userId;
    @Column(name="expires_at",nullable=false) public Instant expiresAt;
    @Column(nullable=false) public boolean revoked;
    @Column(name="revoked_reason",length=24) public String revokedReason;
    protected LoginSession(){}
    public LoginSession(String id,String userId,Instant expiresAt){this.id=id;this.userId=userId;this.expiresAt=expiresAt;}
}
