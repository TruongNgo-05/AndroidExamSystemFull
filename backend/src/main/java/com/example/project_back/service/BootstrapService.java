package com.example.project_back.service;
import java.util.List;
import com.example.project_back.dto.response.user.Account;
public interface BootstrapService  {
    Object publicCatalog();
    Object bootstrap(Account u);
    Object read(Account u,List<String> ids);
}
