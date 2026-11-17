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
@Repository @Transactional public class CatalogRepository  {
    private final CatalogJpaRepository data;
    @PersistenceContext private EntityManager em;
    public CatalogRepository(CatalogJpaRepository data) {
        this.data=data;
    }
    private ObjectNode response(CatalogDocument doc) {
        return doc.body().put("_revision",doc.revision());
    }
    private CatalogDocument find(String kind,String id,boolean lock) {
        CatalogId key=new CatalogId(kind,id);
        CatalogDocument doc=(lock?data.lock(key):data.findById(key)).orElseThrow(ApplicationException::missing);
        // A prior list() may have cached the key before another transaction redeemed it.
        if(lock)em.refresh(doc,LockModeType.PESSIMISTIC_WRITE);
        return doc;
    }
    public List<ObjectNode> list(String kind) {
        return data.list(kind).stream().map(this::response).toList();
    }
    public ObjectNode get(String kind,String id) {
        return get(kind,id,false);
    }
    public ObjectNode get(String kind,String id,boolean lock) {
        return response(find(kind,id,lock));
    }
    public boolean exists(String kind,String id) {
        return data.existsById(new CatalogId(kind,id));
    }
    public ObjectNode create(String kind,ObjectNode body) {
        String id=body.path("id").asText();
        if(exists(kind,id))throw ApplicationException.conflict("ID đã tồn tại.");
        ObjectNode copy=body.deepCopy();
        copy.remove("_revision");
        CatalogDocument doc=new CatalogDocument(new CatalogId(kind,id),copy);
        em.persist(doc);
        em.flush();
        return response(doc);
    }
    public ObjectNode save(String kind,String id,ObjectNode body) {
        CatalogDocument doc=find(kind,id,true);
        if(doc.revision()!=body.path("_revision").asLong())throw ApplicationException.conflict("Dữ liệu đã thay đổi. Hãy tải lại trang trước khi lưu.");
        ObjectNode copy=body.deepCopy();
        copy.remove("_revision");
        doc.update(copy);
        em.flush();
        return response(doc);
    }
    public void delete(String kind,String id) {
        data.delete(find(kind,id,true));
    }
}
