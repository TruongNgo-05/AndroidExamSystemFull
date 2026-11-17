package com.example.project_back.specification;
import java.util.function.Predicate;
import java.text.Normalizer;
import java.util.Locale;
import com.fasterxml.jackson.databind.node.ObjectNode;
/** Predicate for a JDBC-backed JSON catalog; not JPA Criteria. */
public final class ExamSpecification  {
    private ExamSpecification()  {
    }
    private static String normalize(String v)  {
        return Normalizer.normalize(v.toLowerCase(Locale.ROOT),Normalizer.Form.NFD).replaceAll("\\p{M}","").replace('đ','d').trim();
    }
    public static Predicate<ObjectNode> matches(String major,String keyword)  {
        return e -> (major.isBlank()||e.path("majorId").asText().isBlank()||e.path("majorId").asText().equals(major))&&normalize(e.path("title").asText()).contains(normalize(keyword));
    }
}
