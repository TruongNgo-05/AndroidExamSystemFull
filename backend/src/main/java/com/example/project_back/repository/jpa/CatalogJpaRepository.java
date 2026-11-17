package com.example.project_back.repository.jpa;
import com.example.project_back.entity.*;
import java.util.*;
import java.time.Instant;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Pageable;
public interface CatalogJpaRepository extends JpaRepository<CatalogDocument,CatalogId>  {
    @Query("select d from CatalogDocument d where d.id.kind=:kind order by d.createdAt,d.id.id") List<CatalogDocument> list(@Param("kind") String kind);
    @Lock(LockModeType.PESSIMISTIC_WRITE) @Query("select d from CatalogDocument d where d.id=:id") Optional<CatalogDocument> lock(@Param("id") CatalogId id);
}
