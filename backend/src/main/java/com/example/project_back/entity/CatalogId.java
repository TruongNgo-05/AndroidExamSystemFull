package com.example.project_back.entity;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;
@Embeddable public class CatalogId implements Serializable  {
    @Column(name="kind",length=24,nullable=false) private String kind;
    @Column(name="id",length=128,nullable=false) private String id;
    protected CatalogId()  {
    }
    public CatalogId(String kind,String id) {
        this.kind=kind;
        this.id=id;
    }
    @Override public boolean equals(Object o) {
        return o instanceof CatalogId other && Objects.equals(kind,other.kind) && Objects.equals(id,other.id);
    }
    @Override public int hashCode() {
        return Objects.hash(kind,id);
    }
}
