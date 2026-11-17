package com.example.project_back.service;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.dto.response.user.Account;
public interface SubmissionService  {
    List<ObjectNode> list(Account u);
    ObjectNode create(Account u,ObjectNode b);
    ObjectNode review(Account u,String id,JsonNode b);
    void delete(String id);
}
