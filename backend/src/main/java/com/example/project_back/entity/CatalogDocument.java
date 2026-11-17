package com.example.project_back.entity;
import jakarta.persistence.*;
import java.time.Instant;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
@Entity @Table(name="catalog_documents") public class CatalogDocument  {
    @EmbeddedId private CatalogId id;
    @JdbcTypeCode(SqlTypes.JSON) @Column(nullable=false,columnDefinition="json") private ObjectNode body;
    @Version @Column(nullable=false) private Long revision=1L;
    @Column(name="created_at",nullable=false,columnDefinition="timestamp(6)") private Instant createdAt=Instant.now();
    protected CatalogDocument() {
    }
    public CatalogDocument(CatalogId id,ObjectNode body) {
        this.id=id;
        this.body=body.deepCopy();
    }
    public ObjectNode body() {
        return body.deepCopy();
    }
    public long revision() {
        return revision;
    }
    public void update(ObjectNode value) {
        this.body=value.deepCopy();
    }
}
