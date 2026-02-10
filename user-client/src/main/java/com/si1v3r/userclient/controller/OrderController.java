package com.si1v3r.userclient.controller;


import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.model.domain.Bookorder;
import com.si1v3r.userclient.model.domain.request.ConditionOrderSearchRequest;
import com.si1v3r.userclient.model.domain.request.SubmitOrderRequest;
import com.si1v3r.userclient.service.BookorderService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController

@CrossOrigin(origins ={"http://34.40.203.212:8000","http://localhost:8000","http://si1v3r.xyz","https://booksage.si1v3r.xyz"} , allowCredentials = "true")

@RequestMapping("/bookorder")
public class OrderController {
    @Resource
    private BookorderService bookorderService;


    @PostMapping("/submit")
    public BaseResponse submitOrder(@RequestBody SubmitOrderRequest submitOrderRequest){
        return bookorderService.submitOrder(submitOrderRequest);
    }

    @GetMapping("/search")
    public List<Bookorder> searchOrder(ConditionOrderSearchRequest conditionOrderSearchRequest){
        return bookorderService.showOrder(conditionOrderSearchRequest);
    }

    @PostMapping("/update")
    public BaseResponse updateOrder(@RequestBody SubmitOrderRequest submitOrderRequest){
        return bookorderService.updateOrder(submitOrderRequest);
    }
}
