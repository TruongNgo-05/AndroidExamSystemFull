package com.example.project_back.controller.student;
import com.example.project_back.common.BaseResponse;
import jakarta.validation.Valid;
import com.example.project_back.mapper.RequestMapper;
import com.example.project_back.dto.request.student.StartAttemptRequest;
import com.example.project_back.service.*;
import com.example.project_back.dto.response.user.Account;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
@RestController @RequestMapping("/api/attempts") public class AttemptController  {
    private final AttemptService service;
    private final RequestMapper mapper;
    public AttemptController(AttemptService service,RequestMapper mapper)  {
        this.service=service;
        this.mapper=mapper;
    }
    @PostMapping public Object start(@AuthenticationPrincipal Account u,@Valid @RequestBody StartAttemptRequest b)  {
        return service.start(u,mapper.toJson(b));
    }
    @PostMapping("/{id}/submit") public Object submit(@AuthenticationPrincipal Account u,@PathVariable String id,@RequestBody JsonNode b)  {
        return service.submit(u,id,b);
    }
    @GetMapping("/{id}") public Object get(@AuthenticationPrincipal Account u,@PathVariable String id)  {
        return service.result(u,id);
    }
    @PostMapping("/{id}/abandon") public Object abandon(@AuthenticationPrincipal Account u,@PathVariable String id)  {
        service.abandon(u,id);
        return BaseResponse.ok();
    }
    @GetMapping public Object history(@AuthenticationPrincipal Account u)  {
        return service.history(u);
    }
    @DeleteMapping public Object clear(@AuthenticationPrincipal Account u)  {
        service.clear(u);
        return BaseResponse.ok();
    }
}
