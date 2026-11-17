package com.example.project_back.controller;
import com.example.project_back.service.SchoolCatalogService;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/public/schools")
public class SchoolCatalogController {
 private final SchoolCatalogService service;public SchoolCatalogController(SchoolCatalogService s){service=s;}
 @GetMapping Object schools(@RequestParam(defaultValue="") String keyword){return service.schools(keyword);}
 @GetMapping("/{schoolId}/majors") Object majors(@PathVariable String schoolId){return service.majors(schoolId);}
 @GetMapping("/{schoolId}/subjects") Object subjects(@PathVariable String schoolId,@RequestParam(defaultValue="") String majorId,@RequestParam(defaultValue="") String keyword){return service.subjects(schoolId,majorId,keyword);}
}
