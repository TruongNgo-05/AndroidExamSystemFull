package com.example.project_back.entity;
import jakarta.persistence.*;
import java.time.Instant;
@Entity @Table(name="password_reset_challenges",indexes={@Index(name="ix_reset_email_created",columnList="email_hash,created_at"),@Index(name="ix_reset_ip_created",columnList="ip_hash,created_at")})
public class PasswordResetChallenge {
 @Id @Column(length=36) private String id;
 @Column(name="user_id",length=64) private String userId;
 @Column(name="email_hash",nullable=false,length=64) private String emailHash;
 @Column(name="ip_hash",nullable=false,length=64) private String ipHash;
 @Column(name="otp_hash",nullable=false,length=64) private String otpHash;
 @Column(name="reset_hash",length=64) private String resetHash;
 @Column(name="created_at",nullable=false) private Instant createdAt;
 @Column(name="expires_at",nullable=false) private Instant expiresAt;
 @Column(nullable=false) private int attempts;
 @Column(nullable=false) private boolean consumed;
 protected PasswordResetChallenge(){}
 public PasswordResetChallenge(String id,String userId,String emailHash,String ipHash,String otpHash,Instant now){this.id=id;this.userId=userId;this.emailHash=emailHash;this.ipHash=ipHash;this.otpHash=otpHash;createdAt=now;expiresAt=now.plusSeconds(600);}
 public String id(){return id;} public String userId(){return userId;} public String otpHash(){return otpHash;} public String resetHash(){return resetHash;}
 public boolean available(){return !consumed&&Instant.now().isBefore(expiresAt);}
 public boolean canVerify(){return available()&&resetHash==null&&attempts<5;}
 public void failed(){attempts++;if(attempts>=5)consumed=true;}
 public void verified(String hash){resetHash=hash;}
 public void consume(){consumed=true;}
}
