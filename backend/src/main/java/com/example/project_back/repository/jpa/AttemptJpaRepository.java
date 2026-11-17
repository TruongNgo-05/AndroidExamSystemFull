package com.example.project_back.repository.jpa;
import com.example.project_back.entity.*;
import java.util.*;
import java.time.Instant;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Pageable;
public interface AttemptJpaRepository extends JpaRepository<ExamAttempt,String>  {
    org.springframework.data.domain.Page<ExamAttempt> findByUserIdAndHiddenFalseAndStatusInOrderByCreatedAtDesc(String userId,java.util.Collection<String> statuses,Pageable pageable);
    @Lock(LockModeType.PESSIMISTIC_WRITE) @Query("select a from ExamAttempt a where a.id=:id") Optional<ExamAttempt> lock(@Param("id") String id);
    @Query("select a from ExamAttempt a where a.status='SUBMITTED' and a.retry=false and (:admin=true or (a.userId=:id and a.hidden=false)) order by a.submittedAt desc") List<ExamAttempt> history(@Param("id") String id,@Param("admin") boolean admin,Pageable pageable);
    @Modifying @Query("update ExamAttempt a set a.hidden=true where a.userId=:id and a.status='SUBMITTED'") int clear(@Param("id") String id);
}
