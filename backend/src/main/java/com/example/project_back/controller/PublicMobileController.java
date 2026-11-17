package com.example.project_back.controller;
import com.example.project_back.repository.CatalogRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
@RestController @RequestMapping("/api/public/mobile-info")
public class PublicMobileController {
 private final CatalogRepository store;public PublicMobileController(CatalogRepository s){store=s;}
 @GetMapping public Object info(){return Map.of("schools",store.list("schools"),"majors",store.list("majors"),"topics",store.list("topics"));}
}
