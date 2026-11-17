package com.example.project_back.controller.student;
import com.example.project_back.service.MobileService;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.exception.ApplicationException;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
@RestController @RequestMapping("/api/mobile")
public class MobileController {
 private final MobileService service;public MobileController(MobileService service){this.service=service;}
 public record Start(@NotBlank @Size(max=128) String subjectId,@Min(1) @Max(500) int count,@Min(1) @Max(180) int minutes,boolean shuffle){}
 public record Answers(@NotNull ObjectNode answers){}
 @GetMapping("/subjects") Object subjects(){return service.subjects();}
 @GetMapping("/subjects/{id}/study") Object study(@PathVariable String id,@RequestParam(defaultValue="0") int page,@RequestParam(defaultValue="30") int size){if(page<0||size<1||size>100)throw ApplicationException.bad("Phân trang không hợp lệ.");return service.study(id,page,size);}
 @PostMapping("/attempts") Object start(@AuthenticationPrincipal Account u,@Valid @RequestBody Start b){return service.start(u,b.subjectId,b.count,b.minutes,b.shuffle);}
 @GetMapping("/attempts/{id}") Object get(@AuthenticationPrincipal Account u,@PathVariable String id){return service.get(u,id);}
 @PutMapping("/attempts/{id}/answers") Object save(@AuthenticationPrincipal Account u,@PathVariable String id,@Valid @RequestBody Answers b){return service.save(u,id,b.answers,false);}
 @PostMapping("/attempts/{id}/submit") Object submit(@AuthenticationPrincipal Account u,@PathVariable String id,@Valid @RequestBody Answers b){return service.save(u,id,b.answers,true);}
 @GetMapping("/attempts") Object history(@AuthenticationPrincipal Account u,@RequestParam(defaultValue="0") int page){if(page<0)throw ApplicationException.bad("Trang không hợp lệ.");return service.history(u,page);}
}
