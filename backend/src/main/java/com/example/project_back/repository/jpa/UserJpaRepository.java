package com.example.project_back.repository.jpa;
import com.example.project_back.entity.*;
import java.util.*;
import java.time.Instant;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Pageable;
public interface UserJpaRepository extends JpaRepository<User,String>  {
    boolean existsBySchoolIdAndDeletedFalse(String schoolId);
    boolean existsByEmailIgnoreCaseAndIdNot(String email,String id);
    boolean existsByStudentCodeAndIdNot(String code,String id);
    Optional<User> findByIdAndDeletedFalse(String id);
    List<User> findByDeletedFalseOrderByCreatedAtDesc();
    @Query("select u from User u where (u.email=:login or u.studentCode=:login) and u.deleted=false") List<User> byLogin(@Param("login") String login);
    @Lock(LockModeType.PESSIMISTIC_WRITE) @Query("select u from User u where u.id=:id and u.deleted=false") Optional<User> lock(@Param("id") String id);
}
