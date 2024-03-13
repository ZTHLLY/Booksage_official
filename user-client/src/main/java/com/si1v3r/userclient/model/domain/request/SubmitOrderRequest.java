package com.si1v3r.userclient.model.domain.request;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class SubmitOrderRequest implements Serializable {

    @Serial
    private static final long serialVersionUID = 6778621989534507263L;

    private int id;
    private int price;
    private String detail;
    private String deliverStatus;
    private String deliver;
    private String receiver;

}
