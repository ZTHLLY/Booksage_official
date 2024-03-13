package com.si1v3r.userclient.exception;


import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.common.ErrorCode;
import com.si1v3r.userclient.common.ResultUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public BaseResponse businessExceptionHandler(BusinessException e){
        log.error("BusinessException"+e.getMessage(),e);
        return ResultUtils.error(e.getCode(),e.getMessage(),e.getDescription());
    }

    @ExceptionHandler(RuntimeException.class)
    public  BaseResponse runtimeExceptionHandler(RuntimeException r){
        log.error("RuntimeException",r);
        return ResultUtils.error(ErrorCode.SYSTEM_ERROR,r.getMessage(),"");
    }
}
