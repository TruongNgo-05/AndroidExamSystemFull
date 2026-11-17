package com.example.project_back.service;
import com.example.project_back.repository.CatalogRepository;
import com.example.project_back.exception.ApplicationException;
import com.example.project_back.service.Impl.CatalogServiceImpl;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;
@Service @Transactional(readOnly=true)
public class SchoolCatalogService {
 private final CatalogRepository catalog;
 public SchoolCatalogService(CatalogRepository catalog){this.catalog=catalog;}
 private static String schoolOf(JsonNode exam){String id=exam.path("schoolId").asText("").trim();return id.isEmpty()||id.equals("null")?"hubt":id;}
 private void requireSchool(String id){if(!catalog.exists("schools",id))throw ApplicationException.missing();}
 public List<ObjectNode> schools(String keyword){
  List<ObjectNode> exams=catalog.list("exams");String term=CatalogServiceImpl.normalize(keyword);
  return catalog.list("schools").stream().filter(s->CatalogServiceImpl.normalize(s.path("name").asText()+" "+s.path("shortName").asText()).contains(term)).sorted(Comparator.comparing(s->s.path("name").asText())).map(s->{
   ObjectNode out=s.deepCopy();out.remove("_revision");String id=s.path("id").asText();
   out.put("subjectCount",exams.stream().filter(e->schoolOf(e).equals(id)).count());
   out.put("questionCount",exams.stream().filter(e->schoolOf(e).equals(id)).mapToLong(e->e.path("questions").size()).sum());return out;
  }).toList();
 }
 public List<ObjectNode> majors(String schoolId){
  requireSchool(schoolId);Set<String> ids=new HashSet<>();
  catalog.list("exams").stream().filter(e->schoolOf(e).equals(schoolId)).forEach(e->ids.add(e.path("majorId").asText("")));
  return catalog.list("majors").stream().filter(m->ids.contains(m.path("id").asText())).sorted(Comparator.comparing(m->m.path("title").asText())).map(m->{ObjectNode out=m.deepCopy();out.remove("_revision");return out;}).toList();
 }
 public List<ObjectNode> subjects(String schoolId,String majorId,String keyword){
  requireSchool(schoolId);String term=CatalogServiceImpl.normalize(keyword);
  return catalog.list("exams").stream().filter(e->schoolOf(e).equals(schoolId)).filter(e->majorId.isBlank()||majorId.equals(e.path("majorId").asText())).filter(e->CatalogServiceImpl.normalize(e.path("title").asText()).contains(term)).sorted(Comparator.comparing(e->e.path("title").asText())).map(e->{
   ObjectNode out=e.objectNode();for(String k:List.of("id","title","majorId","description","topicId"))out.put(k,e.path(k).asText(""));out.put("schoolId",schoolOf(e));out.put("questionCount",e.path("questions").size());return out;
  }).toList();
 }
}
