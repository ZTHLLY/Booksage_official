package com.si1v3r.userclient.model.domain.request;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

@Data
public class bookAddRequest implements Serializable {


    @Serial
    private static final long serialVersionUID = -6531688722643239992L;

    private String isbn;
    private String name;
    private String author;
    private String publishingHouse;
    private int price;
    private String introduction;

    private String pic1;
    private String pic2;
    private String pic3;
    private String pic4;
    private String pic5;
    private String pic6;

}
