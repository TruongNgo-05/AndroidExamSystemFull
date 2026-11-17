package com.example.project_back.service;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.dto.response.user.Account;
public interface AttemptService  {
    ObjectNode start(Account u,JsonNode b);
    ObjectNode submit(Account u,String id,JsonNode request);
    ObjectNode result(Account u,String id);
    List<JsonNode> history(Account u);
    void clear(Account u);
    void abandon(Account u,String id);
}
