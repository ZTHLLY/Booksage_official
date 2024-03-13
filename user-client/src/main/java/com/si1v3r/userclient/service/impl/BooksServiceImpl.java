package com.si1v3r.userclient.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.common.ErrorCode;
import com.si1v3r.userclient.common.ResultUtils;
import com.si1v3r.userclient.exception.BusinessException;
import com.si1v3r.userclient.model.domain.Books;
import com.si1v3r.userclient.model.domain.request.bookAddRequest;
import com.si1v3r.userclient.service.BooksService;
import com.si1v3r.userclient.mapper.BooksMapper;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

/**
 * @author silverbullets
 * @description 针对表【books(书本)】的数据库操作Service实现
 * @createDate 2023-12-04 16:06:08
 */
@Service
public class BooksServiceImpl extends ServiceImpl<BooksMapper, Books>
        implements BooksService{
    @Resource
    private BooksMapper booksMapper;

    /**
     * 具体实现书本加入数据库
     * @param bookAddRequest 总共12个属性
     * @return 返回成功后的书本ISBN
     */
    @Override
    public BaseResponse bookAddNew(bookAddRequest bookAddRequest) {
        //取出请求体的值
        String isbn=bookAddRequest.getIsbn();
        String name=bookAddRequest.getName();
        String author=bookAddRequest.getAuthor();
        String publishingHouse=bookAddRequest.getPublishingHouse();
        int price=bookAddRequest.getPrice();
        String introduction=bookAddRequest.getIntroduction();

        String pic1=bookAddRequest.getPic1();
        String pic2=bookAddRequest.getPic2();
        String pic3=bookAddRequest.getPic3();
        String pic4=bookAddRequest.getPic4();
        String pic5=bookAddRequest.getPic5();
        String pic6=bookAddRequest.getPic6();
        //ISBN号码为空
        boolean temp= StringUtils.isBlank(isbn);
        if(temp){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"ISBN号码缺失");
        }
        //ISBN号码已经存在
        QueryWrapper<Books> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("ISBN",isbn);
        long count=this.count(queryWrapper);
        if(count>0){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"该ISBN已存在");
        }


        //创建新的书本对象
        Books book=new Books();
        book.setISBN(isbn);
        book.setName(name);
        book.setAuthor(author);
        book.setPublishingHouse(publishingHouse);
        book.setPrice(price);
        book.setIntroduction(introduction);

        book.setPic1(pic1);
        book.setPic2(pic2);
        book.setPic3(pic3);
        book.setPic4(pic4);
        book.setPic5(pic5);
        book.setPic6(pic6);

        boolean result=this.save(book);
        if (!result) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR,"书本创建失败");
//      return -1;
        }
        return ResultUtils.success(book.getISBN());
    }
}




