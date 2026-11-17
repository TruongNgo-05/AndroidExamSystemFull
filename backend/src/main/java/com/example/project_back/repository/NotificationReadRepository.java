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
@Repository @Transactional public class NotificationReadRepository  {
    private final NotificationReadJpaRepository data;
    private final UserJpaRepository users;
    @PersistenceContext private EntityManager em;
    public NotificationReadRepository(NotificationReadJpaRepository data,UserJpaRepository users) {
        this.data=data;
        this.users=users;
    }
    public List<String> list(String id) {
        return data.list(id);
    }
    public void read(String user,String notification) {
        users.lock(user).orElseThrow(ApplicationException::missing);
        NotificationReadId id=new NotificationReadId(user,notification);
        if(!data.existsById(id))em.persist(new NotificationRead(id));
    }
}
