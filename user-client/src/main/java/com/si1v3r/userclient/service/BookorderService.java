package com.si1v3r.userclient.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.model.domain.Bookorder;
import com.si1v3r.userclient.model.domain.request.ConditionOrderSearchRequest;
import com.si1v3r.userclient.model.domain.request.SubmitOrderRequest;

import java.awt.print.Book;
import java.util.List;
import java.util.Map;

/**
* @author silverbullets
* @description 针对表【bookorder】的数据库操作Service
* @createDate 2023-12-13 16:47:54
*/
public interface BookorderService extends IService<Bookorder> {
    /**
     * 商城提交订单到后台
     * @param submitOrderRequest 总共五个属性
     * @return 返回订单的id，订单id自动生成
     */
    BaseResponse submitOrder(SubmitOrderRequest submitOrderRequest);

    /**
     * 获取订单列表的api
     * @return 所有订单列表
     */
    List<Bookorder> showOrder(ConditionOrderSearchRequest conditionOrderSearchRequest);

    /**
     * 更新订单物流状态的api
     * @param submitOrderRequest 需要更新后的物流状态
     * @return 返回成功或失败即可
     */
    BaseResponse updateOrder(SubmitOrderRequest submitOrderRequest);
}
