package com.example.project_back.service;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
public interface CatalogService  {
    List<ObjectNode> exams(String major,String keyword);
    void validate(String kind,ObjectNode b);
    ObjectNode create(String kind,ObjectNode b);
    ObjectNode update(String kind,String id,ObjectNode patch);
    void delete(String kind,String id);
    ObjectNode editQuestion(String examId,int index,ObjectNode q,String operation);
    List<ObjectNode> list(String kind);
}
