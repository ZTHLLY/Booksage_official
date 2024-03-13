export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  //这个是进去的主页面
  { path: '/welcome', name: 'Home', icon: 'Bank', component: './Welcome' },
  //这是朱神的人员页面
  {
    path: '/admin',
    name: 'Management',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/user-manage',
        name: 'user management',
        icon: 'smile',
        component: './Admin/UserManagement',
      },
      { component: './404' },
    ],
  },
  {
    // 这里是BookSage订单管理页面
    path: '/OrdersList',
    name: 'Order Management',
    component: './OrdersList',
    icon: 'CarryOut',
  },
  {
    // 这里是已有书本的管理页面
    path: '/BookInfoList',
    name: 'Books management',
    component: './BookInfoList',
    icon: 'Database',
    access: 'canAdmin',
  },
  //这个查询表格用不上
  // { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
