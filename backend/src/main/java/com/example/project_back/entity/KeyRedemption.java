package com.example.project_back.entity;
import jakarta.persistence.*;
import java.time.Instant;
@Entity @Table(name="key_redemptions") public class KeyRedemption  {
    @Id @Column(name="user_id",length=64) private String userId;
    @ManyToOne(fetch=FetchType.LAZY) @JoinColumn(name="user_id",insertable=false,updatable=false) private User user;
    @Column(name="key_id",nullable=false,length=128) private String keyId;
    @Column(name="redeemed_at",nullable=false,columnDefinition="timestamp(6)") private Instant redeemedAt=Instant.now();
    protected KeyRedemption() {
    }
    public KeyRedemption(String userId,String keyId) {
        this.userId=userId;
        this.keyId=keyId;
    }
}
