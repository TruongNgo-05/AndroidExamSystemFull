package com.example.project_back.entity;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;
@Embeddable public class NotificationReadId implements Serializable  {
    @Column(name="user_id",length=64,nullable=false) private String userId;
    @Column(name="notification_id",length=128,nullable=false) private String notificationId;
    protected NotificationReadId()  {
    }
    public NotificationReadId(String userId,String notificationId) {
        this.userId=userId;
        this.notificationId=notificationId;
    }
    @Override public boolean equals(Object o) {
        return o instanceof NotificationReadId other && Objects.equals(userId,other.userId) && Objects.equals(notificationId,other.notificationId);
    }
    @Override public int hashCode() {
        return Objects.hash(userId,notificationId);
    }
}
