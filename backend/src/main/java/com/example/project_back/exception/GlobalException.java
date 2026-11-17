package com.example.project_back.exception;
import java.util.Map;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
@RestControllerAdvice public class GlobalException  {
    @ExceptionHandler(org.springframework.web.multipart.MaxUploadSizeExceededException.class)
    ResponseEntity<?> uploadTooLarge(Exception e){return ResponseEntity.status(413).body(Map.of("message","Ảnh tối đa 30 MB."));}
    @ExceptionHandler(java.io.IOException.class)
    ResponseEntity<?> imageStorage(Exception e){return ResponseEntity.status(500).body(Map.of("message","Không lưu được ảnh. Kiểm tra thư mục lưu ảnh trên máy chủ."));}
    @ExceptionHandler(ObjectOptimisticLockingFailureException.class) ResponseEntity<?> stale(ObjectOptimisticLockingFailureException e)  {
        return ResponseEntity.status(409).body(Map.of("message","Dữ liệu đã thay đổi. Hãy tải lại trang."));
    }
    @ExceptionHandler(ApplicationException.class) ResponseEntity<?> api(ApplicationException e)  {
        return ResponseEntity.status(e.status).body(Map.of("message",e.getMessage()));
    }
    @ExceptionHandler(DataIntegrityViolationException.class) ResponseEntity<?> duplicate(DataIntegrityViolationException e)  {
        return ResponseEntity.status(409).body(Map.of("message","Dữ liệu trùng hoặc còn được sử dụng."));
    }
    @ExceptionHandler(MethodArgumentNotValidException.class) ResponseEntity<?> validation(MethodArgumentNotValidException e){
        var fields=new java.util.LinkedHashMap<String,String>();
        e.getBindingResult().getFieldErrors().forEach(f->fields.putIfAbsent(f.getField(),f.getDefaultMessage()));
        return ResponseEntity.badRequest().body(Map.of("message","Vui lòng kiểm tra các trường thông tin.","errors",fields));
    }
    @ExceptionHandler(  {
        HttpMessageNotReadableException.class,IllegalArgumentException.class
    }
    ) ResponseEntity<?> invalid(Exception e)  {
        return ResponseEntity.badRequest().body(Map.of("message","Dữ liệu đầu vào không hợp lệ."));
    }
}
