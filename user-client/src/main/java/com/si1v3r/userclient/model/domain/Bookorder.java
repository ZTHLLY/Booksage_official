package com.si1v3r.userclient.model.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

/**
 * 
 * @TableName bookorder
 */
@TableName(value ="bookorder")
@Data
public class Bookorder implements Serializable {
    /**
     * 订单id
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 订单价格
     */
    private Integer price;

    /**
     * 物流信息
     */
    private String deliverStatus;

    /**
     * 发货方
     */
    private String deliver;

    /**
     * 收货方
     */
    private String receiver;

    /**
     * 订单详情
     */
    private String detail;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}