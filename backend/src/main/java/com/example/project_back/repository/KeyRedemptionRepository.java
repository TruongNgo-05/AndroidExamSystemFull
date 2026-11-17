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
@Repository @Transactional public class KeyRedemptionRepository  {
    private final KeyRedemptionJpaRepository data;
    @PersistenceContext private EntityManager em;
    public KeyRedemptionRepository(KeyRedemptionJpaRepository data) {
        this.data=data;
    }
    public boolean exists(String id) {
        return data.existsById(id);
    }
    public void create(String userId,String keyId) {
        em.persist(new KeyRedemption(userId,keyId));
    }
}
