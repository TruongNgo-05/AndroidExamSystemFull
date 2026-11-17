package com.example.project_back.controller;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.util.*;
/** React browser routes share the backend origin with cookie-protected API calls. */
@Controller
public class WebSpaController {
 @GetMapping({"/","/{first:[^.]+}","/{first:[^.]+}/{second:[^.]+}","/{first:[^.]+}/{second:[^.]+}/{third:[^.]+}","/{first:[^.]+}/{second:[^.]+}/{third:[^.]+}/{fourth:[^.]+}"})
 public String index(@PathVariable Map<String,String> path,HttpServletResponse response){
  if(Set.of("api","media","assets","image").contains(path.getOrDefault("first","")))throw new ResponseStatusException(HttpStatus.NOT_FOUND);
  response.setHeader("Cache-Control","no-store");return "forward:/index.html";
 }
}
