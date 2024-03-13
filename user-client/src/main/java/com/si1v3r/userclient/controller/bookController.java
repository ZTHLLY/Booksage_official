package com.si1v3r.userclient.controller;

import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.model.domain.request.bookAddRequest;
import com.si1v3r.userclient.service.BooksService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("book")

public class bookController {
    @Resource
    private BooksService booksService;

    /**
     * 创建新书籍接口
     * @param bookAddRequest 共12个属性
     * @return ISBN
     */
    @PostMapping("/add")
    public BaseResponse addNewBook(@RequestBody bookAddRequest bookAddRequest){

        return booksService.bookAddNew(bookAddRequest);
    }


}
