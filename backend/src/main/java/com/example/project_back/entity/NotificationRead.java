package com.example.project_back.entity;
import jakarta.persistence.*;
@Entity @Table(name="notification_reads") public class NotificationRead  {
    @EmbeddedId private NotificationReadId id;
    @ManyToOne(fetch=FetchType.LAZY) @JoinColumn(name="user_id",insertable=false,updatable=false) private User user;
    protected NotificationRead() {
    }
    public NotificationRead(NotificationReadId id) {
        this.id=id;
    }
}
