package com.example.project_back.repository.jpa;
import com.example.project_back.entity.LoginSession;
import java.util.Optional;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
public interface LoginSessionJpaRepository extends JpaRepository<LoginSession,String> {
    @Lock(LockModeType.PESSIMISTIC_WRITE) @Query("select s from LoginSession s where s.id=:id")
    Optional<LoginSession> lock(@Param("id") String id);
    @Modifying @Query("update LoginSession s set s.revoked=true where s.userId=:id")
    void revokeUser(@Param("id") String id);
    @Modifying(flushAutomatically=true) @Query("update LoginSession s set s.revoked=true, s.revokedReason='REPLACED' where s.userId=:id and s.revoked=false")
    void replaceActiveSessions(@Param("id") String id);
}
