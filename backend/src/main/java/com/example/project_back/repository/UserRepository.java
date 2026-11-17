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
@Repository @Transactional public class UserRepository  {
    private final UserJpaRepository data;
    @PersistenceContext private EntityManager em;
    public UserRepository(UserJpaRepository data) {
        this.data=data;
    }
    public Optional<User> find(String id){return data.findByIdAndDeletedFalse(id);}
    public User get(String id) {
        return data.findByIdAndDeletedFalse(id).orElseThrow(ApplicationException::missing);
    }
    public List<User> all() {
        return data.findByDeletedFalseOrderByCreatedAtDesc();
    }
    public List<User> byLogin(String login) {
        return data.byLogin(login);
    }
    public void checkUnique(String email,String code,String id){
        if(data.existsByEmailIgnoreCaseAndIdNot(email,id))throw ApplicationException.conflict("Email đã được đăng ký. Hãy dùng email khác hoặc đăng nhập.");
        if(!code.isBlank()&&data.existsByStudentCodeAndIdNot(code,id))throw ApplicationException.conflict("Mã sinh viên đã được đăng ký.");
    }
    public void create(User user) {
        em.persist(user);
        em.flush();
    }
    public void update(String id,String name,String email,String code,String clazz,String role,String status) {
        get(id).update(name,email,code,clazz,role,status);
    }
    public void password(String id,String hash) {
        get(id).changePassword(hash);
    }
    public void delete(String id) {
        get(id).deactivate();
    }
    public void lock(String id) {
        data.lock(id).orElseThrow(ApplicationException::missing);
    }
}
