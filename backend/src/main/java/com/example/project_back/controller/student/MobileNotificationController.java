package com.example.project_back.controller.student;
import com.example.project_back.repository.CatalogRepository;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/mobile/notifications")
public class MobileNotificationController {
 private final CatalogRepository store;public MobileNotificationController(CatalogRepository s){store=s;}
 @GetMapping Object notifications(){return store.list("notifications");}
}
