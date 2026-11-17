package com.example.project_back.service;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.dto.response.user.Account;
public interface AuthenticationService  {
    Account get(String id);
    List<Account> list();
    Account resolve(String token);
    Map<String,Object> login(JsonNode body);
    Map<String,Object> register(JsonNode body);
    Account create(JsonNode b,boolean admin);
    Account update(String id,JsonNode b,Account actor);
    void delete(String id,Account actor);
    void logout(String token);
}
