package com.si1v3r.userclient.model.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

/**
 * 书本
 * @TableName books
 */
@TableName(value ="books")
@Data
public class Books implements Serializable {
    /**
     * 书名
     */
    private String name;

    /**
     * 价格
     */
    private Integer price;

    /**
     * 书籍编号
     */
    private String ISBN;

    /**
     * 图片
     */
    private String pic1;

    /**
     * 图片2
     */
    private String pic2;

    /**
     * 图片3
     */
    private String pic3;

    /**
     * 图片4
     */
    private String pic4;

    /**
     * 图片5
     */
    private String pic5;

    /**
     * 图片6
     */
    private String pic6;

    /**
     * 作者
     */
    private String author;

    /**
     * 出版社
     */
    private String publishingHouse;

    /**
     * 简介
     */
    private String introduction;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}