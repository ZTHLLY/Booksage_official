package com.si1v3r.userclient.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.model.domain.Books;
import com.si1v3r.userclient.model.domain.request.bookAddRequest;

/**
* @author silverbullets
* @description 针对表【books(书本)】的数据库操作Service
* @createDate 2023-12-04 15:58:57
*/
public interface BooksService extends IService<Books> {
    /**
     * 新建书本对象到表中
     * @param bookAddRequest 总共12个属性
     * @return 成功的书的ISBN
     */
    BaseResponse bookAddNew(bookAddRequest bookAddRequest);

}
