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
<<<<<<< HEAD
@CrossOrigin(origins ={"http://34.40.172.35:8000","http://localhost:8000"} , allowCredentials = "true")
=======
@CrossOrigin(origins ={"http://43.136.20.126:8000","http://localhost:8000"} , allowCredentials = "true")
>>>>>>> de5cf6da6c1c77bc99a4372b01ec9707eaba30c0
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
