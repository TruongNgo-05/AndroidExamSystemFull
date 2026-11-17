package com.example.project_back.repository;
import java.util.*;
import java.time.Instant;
import jakarta.persistence.*;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.project_back.repository.jpa.*;
import com.example.project_back.entity.*;
import com.example.project_back.exception.ApplicationException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
@Repository @Transactional public class AttemptRepository  {
    private final AttemptJpaRepository data;
    @PersistenceContext private EntityManager em;
    public AttemptRepository(AttemptJpaRepository data) {
        this.data=data;
    }
    public ExamAttempt get(String id,boolean lock) {
        return (lock?data.lock(id):data.findById(id)).orElseThrow(ApplicationException::missing);
    }
    public void create(String id,String userId,String examId,ObjectNode snapshot,boolean retry) {
        em.persist(new ExamAttempt(id,userId,examId,snapshot,retry));
    }
    public void submit(String id,ObjectNode result) {
        get(id,true).submit(result);
    }
    public List<JsonNode> history(String id,boolean admin) {
        return data.history(id,admin,org.springframework.data.domain.PageRequest.of(0,500)).stream().map(a->(JsonNode)a.result()).toList();
    }
    public void clear(String id) {
        data.clear(id);
    }
    public void abandon(String id) {
        get(id,true).abandon();
    }
}
