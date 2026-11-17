package com.example.project_back.repository.jpa;
import com.example.project_back.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
public interface RefreshTokenJpaRepository extends JpaRepository<RefreshToken,String>{}
