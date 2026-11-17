package com.example.project_back.entity;
import jakarta.persistence.*;
@Entity @Table(name="refresh_tokens",indexes=@Index(name="idx_refresh_session",columnList="session_id"))
public class RefreshToken {
    @Id @Column(length=64,columnDefinition="char(64)") public String hash;
    @Column(name="session_id",nullable=false,length=36) public String sessionId;
    @Column(nullable=false) public boolean used;
    protected RefreshToken(){}
    public RefreshToken(String hash,String sessionId){this.hash=hash;this.sessionId=sessionId;}
}
