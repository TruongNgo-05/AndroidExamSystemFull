package com.example.project_back.common;
public record BaseResponse(boolean success)  {
    public static BaseResponse ok()  {
        return new BaseResponse(true);
    }
}
