package com.si1v3r.userclient.common;

import lombok.Getter;

/**
 * 错误码
 * @author si1v3r
 */
@Getter
public enum ErrorCode {

    SUCCESS(0,"OK",""),
    PARAMS_ERROR(40000,"请求参数错误",""),
    NULL_ERROR(40001,"请求数据为空",""),
    NOT_LOGIN(40100,"未登录",""),
    NO_AUTH(40101,"没有相关权限",""),
    SYSTEM_ERROR(50000,"系统内部异常","");

    //状态码
    private final int code;
//状态码信息
    private final String msg;

    //状态码描述(详情)
    private final String description;//描述

    ErrorCode(int code, String msg, String description) {
        this.code = code;
        this.msg = msg;
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public String getDescription() {
        return description;
    }
}
