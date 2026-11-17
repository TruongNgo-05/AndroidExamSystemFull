package com.example.project_back.controller;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.service.*;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
@RestController @RequestMapping("/api") public class CatalogController  {
    private final CatalogService catalog;
    private final BootstrapService bootstrap;
    public CatalogController(CatalogService catalog, BootstrapService bootstrap)  {
        this.catalog = catalog;
        this.bootstrap = bootstrap;
    }
    @GetMapping("/health") public Object health()  {
        return Map.of("status","UP");
    }
    @GetMapping("/public/catalog") public Object publicCatalog()  {
        return bootstrap.publicCatalog();
    }
    @GetMapping("/public/exams") public Object search(@RequestParam(defaultValue="")String majorId,@RequestParam(defaultValue="")String keyword)  {
        return catalog.exams(majorId,keyword);
    }
    @GetMapping("/bootstrap") public Object bootstrap(@AuthenticationPrincipal Account u)  {
        return bootstrap.bootstrap(u);
    }
}
