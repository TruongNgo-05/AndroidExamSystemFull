package com.example.project_back.exception;
import org.springframework.http.HttpStatus;
public class ApplicationException extends RuntimeException  {
    public final HttpStatus status;
    public ApplicationException(HttpStatus status,String message)  {
        super(message);
        this.status=status;
    }
    public static ApplicationException bad(String message)  {
        return new ApplicationException(HttpStatus.BAD_REQUEST,message);
    }
    public static ApplicationException missing()  {
        return new ApplicationException(HttpStatus.NOT_FOUND,"Không tìm thấy dữ liệu.");
    }
    public static ApplicationException conflict(String message)  {
        return new ApplicationException(HttpStatus.CONFLICT,message);
    }
}
