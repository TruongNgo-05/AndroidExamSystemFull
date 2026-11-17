package com.example.project_back.controller;

import com.example.project_back.service.ImageStorageService;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@RestController
public class ImageController {
 private final ImageStorageService storage;
 public ImageController(ImageStorageService storage){this.storage=storage;}
 @PostMapping(value="/api/admin/uploads/images",consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
 public Map<String,String> upload(@RequestParam("file") MultipartFile file)throws IOException{
   return Map.of("url","/api/public/images/"+storage.save(file));
 }
 @GetMapping("/api/public/images/{name}")
 public ResponseEntity<FileSystemResource> image(@PathVariable String name){
   var path=storage.find(name);
   var type=name.endsWith(".jpg")?MediaType.IMAGE_JPEG:name.endsWith(".png")?MediaType.IMAGE_PNG:MediaType.IMAGE_GIF;
   return ResponseEntity.ok().contentType(type).cacheControl(CacheControl.maxAge(365,TimeUnit.DAYS).cachePublic())
     .header("X-Content-Type-Options","nosniff").body(new FileSystemResource(path));
 }
}
