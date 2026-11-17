package com.example.project_back.service.Impl;
import java.util.*;
import com.example.project_back.specification.ExamSpecification;
import com.example.project_back.service.*;
import com.example.project_back.repository.*;
import com.example.project_back.entity.*;
import java.text.Normalizer;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
@Service public class CatalogServiceImpl implements CatalogService  {
    private final CatalogRepository store;
    private final Json json;
    private final com.example.project_back.repository.jpa.UserJpaRepository users;
    public CatalogServiceImpl(CatalogRepository store,Json json,com.example.project_back.repository.jpa.UserJpaRepository users)  {
        this.store=store;
        this.users=users;
        this.json=json;
    }
    public static String normalize(String v)  {
        return Normalizer.normalize(v.toLowerCase(Locale.ROOT),Normalizer.Form.NFD).replaceAll("\\p{M}","").replace('đ','d').trim();
    }
    public List<ObjectNode> exams(String major,String keyword)  {
        return store.list("exams").stream().filter(ExamSpecification.matches(major,keyword)).toList();
    }
    public static void question(JsonNode q)  {
        if(!q.isObject())throw ApplicationException.bad("Câu hỏi phải là object.");
        Json.required(q,"q",100000);
        JsonNode o=q.path("o");
        if(!o.isArray()||o.size()!=4)throw ApplicationException.bad("Mỗi câu cần đúng 4 đáp án.");
        for(JsonNode v:o)if(!v.isTextual()||v.asText().isBlank()||v.asText().length()>100000)throw ApplicationException.bad("Đáp án không hợp lệ.");
        if(!q.path("a").isIntegralNumber()||q.path("a").asInt()<0||q.path("a").asInt()>3)throw ApplicationException.bad("Đáp án đúng phải từ 0 đến 3.");
    }
    public void validate(String kind,ObjectNode b)  {
        String id=Json.required(b,"id",128);
        if(!id.matches("[a-zA-Z0-9_-]+"))throw ApplicationException.bad("ID chỉ dùng chữ, số, _ và -.");
        if(kind.equals("exams"))  {
            Json.required(b,"title",300);
            String school=Json.text(b,"schoolId").trim();
            if(!school.isEmpty()&&!store.exists("schools",school))throw ApplicationException.bad("Trường học không tồn tại.");
            String topic=Json.text(b,"topicId").trim();
            if(!topic.isEmpty()&&!store.exists("topics",topic))throw ApplicationException.bad("Chủ đề không tồn tại.");
            String major=Json.text(b,"majorId").trim();
            if(major.equalsIgnoreCase("null"))major="";
            b.put("majorId",major);
            if(!major.isEmpty()&&!store.exists("majors",major))throw ApplicationException.bad("Ngành không tồn tại.");
            if(!b.has("questions"))b.set("questions",json.array());
            if(!b.path("questions").isArray()||b.path("questions").size()>10000)throw ApplicationException.bad("Danh sách câu hỏi không hợp lệ.");
            b.path("questions").forEach(CatalogServiceImpl::question);
        }
        else if(kind.equals("majors")||kind.equals("topics"))Json.required(b,"title",300);
        else if(kind.equals("schools")) {
            Json.required(b,"name",300);Json.required(b,"shortName",50);
            if(Set.of("admin","login","register","forgot-password","profile","gioi-thieu","exam","quiz","setup","study","result","history","hanh-trinh","tro-choi","hoc","dung","chinh-sach-bao-mat","dieu-khoan-su-dung","dieu-khoan-ho-tro-ky-thuat","chinh-sach-tro-ly-ai","chinh-sach-hoan-tien").contains(id)||store.exists("majors",id))throw ApplicationException.bad("Mã trường trùng đường dẫn hệ thống hoặc ngành.");
        }
        else if(kind.equals("pages")) {
            if(!id.equals("gioi-thieu"))throw ApplicationException.bad("Hiện chỉ hỗ trợ trang giới thiệu.");
            Json.required(b,"title",300);Json.required(b,"description",20000);
        }
        else if(kind.equals("notifications"))  {
            Json.required(b,"tieu_de",500);
        }
        else throw ApplicationException.bad("Danh mục không hợp lệ.");
    }
    @Transactional public ObjectNode create(String kind,ObjectNode b)  {
        b=b.deepCopy();
        if(!b.hasNonNull("id")||b.path("id").asText().isBlank())b.put("id",UUID.randomUUID().toString());
        if(kind.equals("notifications")&&!b.has("date"))b.put("date",java.time.Instant.now().toString());
        validate(kind,b);
        return store.create(kind,b);
    }
    @Transactional public ObjectNode update(String kind,String id,ObjectNode patch)  {
        ObjectNode current=store.get(kind,id,true);
        if(patch.has("_revision")&&patch.path("_revision").asLong()!=current.path("_revision").asLong())throw ApplicationException.conflict("Dữ liệu đã thay đổi. Hãy tải lại.");
        long rev=current.path("_revision").asLong();
        JsonNode originalQuestions=current.path("questions").deepCopy();
        current.setAll(patch);
        current.put("id",id);
        current.put("_revision",rev);
        // Metadata-only edits must preserve trusted legacy questions, including blank choices.
        if(kind.equals("exams")){
            ObjectNode metadata=current.deepCopy();metadata.set("questions",json.array());validate(kind,metadata);
            current.put("majorId",metadata.path("majorId").asText());
            if(patch.has("questions")){
                JsonNode next=current.path("questions");
                if(!next.isArray()||next.size()>10000)throw ApplicationException.bad("Danh sách câu hỏi không hợp lệ.");
                java.util.Set<JsonNode> originals=new java.util.HashSet<>();originalQuestions.forEach(originals::add);
                for(JsonNode q:next)if(!originals.contains(q))question(q);
            }
        } else validate(kind,current);
        return store.save(kind,id,current);
    }
    @Transactional public void delete(String kind,String id)  {
        if(!Set.of("exams","majors","notifications","schools","topics","pages").contains(kind))throw ApplicationException.bad("Danh mục không hợp lệ.");
        if(kind.equals("majors")&&store.list("exams").stream().anyMatch(e->e.path("majorId").asText().equals(id)))throw ApplicationException.conflict("Ngành đang có môn học, hãy chuyển các môn trước khi xóa.");
        if(kind.equals("schools")){
            if(users.existsBySchoolIdAndDeletedFalse(id))throw ApplicationException.conflict("Trường đang có tài khoản sử dụng, hãy chuyển trường cho các tài khoản trước khi xóa.");
            if(id.equals("hubt"))throw ApplicationException.conflict("HUBT là trường mặc định cho đề cũ, không thể xóa.");
            if(store.list("exams").stream().anyMatch(e->e.path("schoolId").asText("hubt").equals(id)))throw ApplicationException.conflict("Trường đang có đề thi, hãy chuyển đề trước khi xóa.");
        }
        if(kind.equals("topics")&&store.list("exams").stream().anyMatch(e->e.path("topicId").asText().equals(id)))throw ApplicationException.conflict("Chủ đề đang có đề thi, hãy chuyển đề trước khi xóa.");
        if(kind.equals("pages"))throw ApplicationException.bad("Trang giới thiệu chỉ có thể chỉnh sửa.");
        store.delete(kind,id);
    }
    @Transactional public ObjectNode editQuestion(String examId,int index,ObjectNode q,String operation)  {
        ObjectNode exam=store.get("exams",examId,true);
        if(q!=null&&q.has("_revision")&&q.path("_revision").asLong()!=exam.path("_revision").asLong())throw ApplicationException.conflict("Đề đã thay đổi. Hãy tải lại.");
        if(q!=null)q.remove("_revision");
        ArrayNode questions=(ArrayNode)exam.path("questions");
        if(!operation.equals("add")&&(index<0||index>=questions.size()))throw ApplicationException.missing();
        if(!operation.equals("delete"))question(q);
        switch(operation)  {
            case "add"->questions.add(q);
            case "delete"->questions.remove(index);
            default->questions.set(index,q);
        }
        return store.save("exams",examId,exam);
    }
    public List<ObjectNode> list(String kind)  {
        if(!Set.of("exams","majors","notifications","schools","topics","pages").contains(kind))throw ApplicationException.bad("Danh mục không hợp lệ.");
        return store.list(kind);
    }
}
