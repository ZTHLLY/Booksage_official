package com.si1v3r.userclient.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import com.si1v3r.userclient.common.BaseResponse;
import com.si1v3r.userclient.common.ErrorCode;
import com.si1v3r.userclient.common.ResultUtils;
import com.si1v3r.userclient.exception.BusinessException;
import com.si1v3r.userclient.model.domain.User;
import com.si1v3r.userclient.service.UserService;
import com.si1v3r.userclient.mapper.UserMapper;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import static com.si1v3r.userclient.constant.userConstant.USER_LOGIN_STATE;
import static com.si1v3r.userclient.constant.userConstant.SALT;

/**
 * 用户服务实现类
 *
 * @author si1v3r
 * @description 针对表【user】的数据库操作Service实现
 * @createDate 2023-09-17 21:31:20
 */
@Slf4j
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
  implements UserService {
  @Resource
  private UserMapper userMapper;


  @Override
  public BaseResponse UserRegister(String userAccount, String userPassword, String checkPassword) {
    //1. 校验
    if (StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)) {
      throw new BusinessException(ErrorCode.PARAMS_ERROR,"请求体参数缺少");
//      return -1;
    }
    if (userAccount.length() < 4) {
      throw new BusinessException(ErrorCode.PARAMS_ERROR,"用户账号长度小于4");
//      return -1;
    }
    if (userPassword.length() < 8 || checkPassword.length() < 8) {
      throw new BusinessException(ErrorCode.PARAMS_ERROR,"密码长度小于8");
//      return -1;
    }


    //账号不能包含特殊字符
//      String regEx =  ".*[\\s`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？\\\\]+.*";
//      Pattern p = Pattern.compile(regEx);
//      Matcher m = p.matcher("a a)");
//      boolean matches = m.matches();
//      System.out.println(matches);


    //密码和校验密码相同
    if (!userPassword.equals(checkPassword)) {
      throw new BusinessException(ErrorCode.PARAMS_ERROR,"两次密码输入不同");
//      return -1;
    }

    //账号不能重复
    QueryWrapper<User> queryWrapper = new QueryWrapper<>();
    queryWrapper.eq("userAccount", userAccount);
    long count = this.count(queryWrapper);
    if (count > 0) {
      throw new BusinessException(ErrorCode.PARAMS_ERROR,"账号已存在");
//      return -1;
    }

    //加密
    String encodePassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
    //插入数据
    User user = new User();
    user.setUserAccount(userAccount);
    user.setUserPassword(encodePassword);
    //设置默认用户名和头像
    user.setUsername(userAccount);
    user.setAvatarUrl("https://bpic.588ku.com/original_origin_min_pic/19/10/04/a321f23dd346c61646a546ad9cc9194d.jpg");
    boolean result = this.save(user);
    if (!result) {
      throw new BusinessException(ErrorCode.SYSTEM_ERROR,"用户创建失败");
//      return -1;
    }
    return ResultUtils.success(user.getId());
//    return user.getId();
  }

  @Override
  public BaseResponse userLogin(String userAccount, String userPassword, HttpServletRequest request) {
    //1. 校验
    if (StringUtils.isAnyBlank(userAccount, userPassword)) {
      return null;
    }
    if (userAccount.length() < 4) {
      return null;
    }
    if (userPassword.length() < 8) {
      return null;
    }
    //加密
    String encodePassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
    //查询用户是否存在
    QueryWrapper<User> queryWrapper = new QueryWrapper<>();
    queryWrapper.eq("userAccount", userAccount);
    queryWrapper.eq("userPassword", encodePassword);
    User user = userMapper.selectOne(queryWrapper);
    //用户不存在
    if (user == null) {
      log.info("login failed, the account cannot match password");
      throw new BusinessException(ErrorCode.PARAMS_ERROR,"account cannot match password, please check the account or password again");
    }
    //用户脱敏
    User cleanUser=getCleanUser(user);
    //记录用户登录态
    request.getSession().setAttribute(USER_LOGIN_STATE, cleanUser);

//    return cleanUser;
    return ResultUtils.success(cleanUser);
  }

  /**
   * 用户脱敏
   * @param originUser 原始用户信息
   * @return 脱敏后的用户
   */
  @Override
  public User getCleanUser(User originUser) {
    if(originUser==null){
      return null;
    }
    User cleanUser = new User();
    cleanUser.setId(originUser.getId());
    cleanUser.setUsername(originUser.getUsername());
    cleanUser.setUserAccount(originUser.getUserAccount());
    cleanUser.setAvatarUrl(originUser.getAvatarUrl());
    cleanUser.setGender(originUser.getGender());
    cleanUser.setPhone(originUser.getPhone());
    cleanUser.setEmail(originUser.getEmail());
    cleanUser.setUserRole(originUser.getUserRole());
    cleanUser.setUserCode(originUser.getUserCode());
    cleanUser.setCreateTime(originUser.getCreateTime());
    cleanUser.setUpdateTime(originUser.getUpdateTime());
    return cleanUser;
  }
  /**
   * 用户注销，移除登录态
   * @param request 网络请求
   */
  @Override
  public int userLogout(HttpServletRequest request) {
    request.getSession().removeAttribute(USER_LOGIN_STATE);
    return 1;
  }





}




