package com.si1v3r.userclient.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.common.ErrorCode;
import com.si1v3r.userclient.common.ResultUtils;
import com.si1v3r.userclient.exception.BusinessException;
import com.si1v3r.userclient.model.domain.request.ConditionOrderSearchRequest;
import com.si1v3r.userclient.model.domain.request.SubmitOrderRequest;
import com.si1v3r.userclient.model.domain.Bookorder;
import com.si1v3r.userclient.mapper.BookorderMapper;
import com.si1v3r.userclient.service.BookorderService;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
* @author silverbullets
* @description 针对表【bookorder】的数据库操作Service实现
* @createDate 2023-12-13 16:47:54
*/
@Service
public class BookorderServiceImpl extends ServiceImpl<BookorderMapper, Bookorder>
    implements BookorderService{
    @Resource
    private BookorderMapper bookorderMapper;


    /**
     * 商城提交订单到后台
     * @param submitOrderRequest 总共五个属性
     * @return 提交成功后的订单id
     */
    @Override
    public BaseResponse submitOrder(SubmitOrderRequest submitOrderRequest) {
        //获取前端传来的订单信息
//        int id=submitOrderRequest.getId();
        int price=submitOrderRequest.getPrice();
        String detail=submitOrderRequest.getDetail();
        String deliverStatus=submitOrderRequest.getDeliverStatus();
        String deliver=submitOrderRequest.getDeliver();
        String receiver=submitOrderRequest.getReceiver();

        if(price==0){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"price不能为空");
        }

        if(StringUtils.isAnyBlank(detail,receiver)){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"发送的参数有缺漏");
        }

        //新建订单对象
        Bookorder order=new Bookorder();
//        order.setId(id);
        order.setPrice(price);
        order.setDetail(detail);
        order.setDeliverStatus(deliverStatus);
        order.setDeliver(deliver);
        order.setReceiver(receiver);

        boolean result=this.save(order);
        if(!result){
            throw new BusinessException(ErrorCode.SYSTEM_ERROR,"订单创建失败");
        }
        return ResultUtils.success(order.getId());
    }


    /**
     * 管理系统获取所有订单
     * @return 返回订单列表
     */
    @Override
    public List<Bookorder> showOrder(ConditionOrderSearchRequest conditionOrderSearchRequest) {
        QueryWrapper<Bookorder> queryWrapper=new QueryWrapper<>();
        //判断是否为空
        String temp=conditionOrderSearchRequest.getId();
        String temp2=conditionOrderSearchRequest.getPrice();

        if(StringUtils.isAllBlank(temp,temp2)){
            conditionOrderSearchRequest.setId(null);
            conditionOrderSearchRequest.setPrice(null);
        }

        if(conditionOrderSearchRequest.getId()!=null){
            int id=Integer.parseInt(conditionOrderSearchRequest.getId());
            queryWrapper.eq("id",id);
        }
        if(conditionOrderSearchRequest.getPrice()!=null){
            int price=Integer.parseInt(conditionOrderSearchRequest.getPrice());
            queryWrapper.eq("price",price);
        }

        String detail=conditionOrderSearchRequest.getDetail();
        if(StringUtils.isNotBlank(detail)){
            queryWrapper.like("detail",detail);
        }


        String deliverStatus= conditionOrderSearchRequest.getDeliverStatus();
        if(StringUtils.isNotBlank(deliverStatus)){
            queryWrapper.like("deliverStatus",deliverStatus);
        }

        String deliver=conditionOrderSearchRequest.getDeliver();
        if(StringUtils.isNotBlank(deliver)){
            queryWrapper.like("deliver",deliver);
        }

        String receiver=conditionOrderSearchRequest.getReceiver();
        if(StringUtils.isNotBlank(receiver)){
            queryWrapper.like("receiver",receiver);
        }


        List<Bookorder> bookorderList=bookorderMapper.selectList(queryWrapper);



        return bookorderList;
    }

    @Override
    public BaseResponse updateOrder(SubmitOrderRequest submitOrderRequest) {
        int id=submitOrderRequest.getId();
        String deliverStatus=submitOrderRequest.getDeliverStatus();

        UpdateWrapper<Bookorder> updateWrapper=new UpdateWrapper<>();
        updateWrapper.eq("id",id);
        updateWrapper.set("deliverStatus",deliverStatus);

        int updateResult = bookorderMapper.update(null, updateWrapper);
        if(updateResult>0){
            return ResultUtils.success("success to update");
        }else{
            throw new BusinessException(ErrorCode.SYSTEM_ERROR,"update failed");
        }

    }
}




