package com.example.project_back.entity;
import jakarta.persistence.*;
import java.time.Instant;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
@Entity @Table(name="exam_attempts",indexes=@Index(name="idx_attempt_owner",columnList="user_id,status,created_at")) public class ExamAttempt  {
    @Id @Column(columnDefinition="char(36)",length=36) private String id;
    @Column(name="user_id",nullable=false,length=64) private String userId;
    @ManyToOne(fetch=FetchType.LAZY) @JoinColumn(name="user_id",insertable=false,updatable=false) private User user;
    @Column(name="exam_id",nullable=false,length=128) private String examId;
    @JdbcTypeCode(SqlTypes.JSON) @Column(nullable=false,columnDefinition="json") private ObjectNode snapshot;
    @JdbcTypeCode(SqlTypes.JSON) @Column(columnDefinition="json") private ObjectNode result;
    @Column(nullable=false) private boolean retry;
    @Column(nullable=false,length=16) private String status="ACTIVE";
    @Column(nullable=false) private boolean hidden=false;
    @Column(name="created_at",nullable=false,columnDefinition="timestamp(6)") private Instant createdAt=Instant.now();
    @Column(name="submitted_at",columnDefinition="timestamp(6)") private Instant submittedAt;
    protected ExamAttempt() {
    }
    public ExamAttempt(String id,String userId,String examId,ObjectNode snapshot,boolean retry) {
        this.id=id;
        this.userId=userId;
        this.examId=examId;
        this.snapshot=snapshot.deepCopy();
        this.retry=retry;
    }
    public String id(){return id;}
    public Instant createdAt(){return createdAt;}
    public void mobileSnapshot(ObjectNode value){this.snapshot=value.deepCopy();}
    public String owner() {
        return userId;
    }
    public String status() {
        return status;
    }
    public ObjectNode snapshot() {
        return snapshot.deepCopy();
    }
    public ObjectNode result() {
        return result==null?null:result.deepCopy();
    }
    public boolean retry() {
        return retry;
    }
    public void submit(ObjectNode result) {
        this.result=result.deepCopy();
        this.status="SUBMITTED";
        this.submittedAt=Instant.now();
    }
    public void abandon() {
        this.status="ABANDONED";
    }
}
