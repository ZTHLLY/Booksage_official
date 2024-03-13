// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: string;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: number;

    phone: string;
    email: string;
    createTime: Date;
    userRole: number;
  };

  // 假设的订单数据类型
  type Order = {
    id: number;
    price: number;
    deliverStatus: string; // 物流状态字段

    deliver: string;
    receiver: string;
    detail: string;
  };
  // 通用返回类
  type BaseResult = {
    code?: number;
    data?: T;
    message?: string;
    description?: string;
  };

  //条件查询订单
  type orderCondition = {
    current?: number;
    pageSize?: number;

    id?: string;
    price?: string;
    deliverStatus?: string;
    deliver?: string;
    receiver?: string;
    detail?: string;
  };

  type LoginResult = {
    code: string;
    data?: string;
    description?: string;
    message?: string;
  };

  type condition = {
    username?: string;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}