package com.example.project_back.repository.jpa;
import com.example.project_back.entity.*;
import java.util.*;
import java.time.Instant;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Pageable;
public interface KeyRedemptionJpaRepository extends JpaRepository<KeyRedemption,String>  {
}
