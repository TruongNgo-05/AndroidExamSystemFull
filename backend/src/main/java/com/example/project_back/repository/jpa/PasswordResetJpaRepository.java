package com.example.project_back.repository.jpa;
import com.example.project_back.entity.PasswordResetChallenge;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import jakarta.persistence.LockModeType;
import java.time.Instant;
import java.util.*;
public interface PasswordResetJpaRepository extends JpaRepository<PasswordResetChallenge,String>{
 long countByEmailHashAndCreatedAtAfter(String emailHash,Instant since);
 long countByIpHashAndCreatedAtAfter(String ipHash,Instant since);
 @Lock(LockModeType.PESSIMISTIC_WRITE) @Query("select c from PasswordResetChallenge c where c.id=:id") Optional<PasswordResetChallenge> lock(@Param("id")String id);
 @Modifying @Query("update PasswordResetChallenge c set c.consumed=true where c.emailHash=:hash") void invalidateEmail(@Param("hash")String hash);
}
