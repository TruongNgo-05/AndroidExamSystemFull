package com.example.project_back.service;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.dto.response.user.Account;
public interface KeyService  {
    ObjectNode save(String id,ObjectNode patch);
    boolean entitled(Account u);
    ObjectNode redeem(Account u,String code);
    void delete(String id);
}
