package com.si1v3r.userclient.model.domain.request;


import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class ConditionOrderSearchRequest implements Serializable {


    @Serial
    private static final long serialVersionUID = 3114415623332569888L;

    private Integer current;
    private Integer pageSize;


    private String id;
    private String price;
    private String deliverStatus;

    private String deliver;
    private String receiver;
    private String detail;
}
