package com.si1v3r.userclient.common;


/**
 * 返回工具类
 * @author si1v3r
 */
public class ResultUtils {
    /**
     * 成功
     * @param data
     * @return 返回一个对象，包含状态码，数据，描述
     * @param <T>
     */
    public static <T> BaseResponse<T> success(T data){
        return new BaseResponse<T>(0,data,"OK");
    }

    /**
     * 失败
     * @param errorCode
     * @return 失败对象
     */
    public static BaseResponse error(ErrorCode errorCode){
        return new BaseResponse<> (errorCode);
    }

    /**
     * 失败
     * @param code, message, description
     * @return 失败对象
     */
    public static BaseResponse error(int code,String message, String description){
        return new BaseResponse<> (code,null,message,description);
    }

    /**
     * 失败
     * @param errorCode
     * @return 失败对象
     */
    public static BaseResponse error(ErrorCode errorCode,String message, String description){
        return new BaseResponse<> (errorCode.getCode(),null,message,description);
    }

    public static BaseResponse error(ErrorCode errorCode, String description){
        return new BaseResponse<> (errorCode.getCode(),null,errorCode.getMsg(),description);
    }

}
