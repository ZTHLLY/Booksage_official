import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button,Select,Pagination } from 'element-ui';
import VueRouter from 'vue-router';
import router from './router';
import TypeNav from '@/components/TypeNav';//引入并注册为全局组件
// import {reqCategoryList} from '@/api';
import store from './store';
import './mock/mockServe';
import "swiper/css/swiper.css";



import "./assets/js/jquery.js";
import "./assets/js/bootstrap.min.js";
import "./assets/js/bootstrap-dropdownhover.min.js";
import "./assets/js/jquery.easing.min.js";
import "./assets/js/incrementing.js";
import "./assets/js/wow.min.js";
import "./assets/owl-carousel/owl.carousel.js";
import "./assets/js/custom.js";
import "./assets/js/jquery.jcarousel.min.js";
import "./assets/js/jcarousel.connected-carousels.js";
import "./assets/js/jquery.elevatezoom.js";


// reqCategoryList();
Vue.component(TypeNav.name,TypeNav);//注册为全局组件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Select)
Vue.use(Pagination)
Vue.config.productionTip = false

new Vue({
  //注册路由，注册完之后组件身上都拥有$route,$router属性
  router,
  store,//注册完之后组件实例身上多了一个叫&store的属性
  el: '#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
