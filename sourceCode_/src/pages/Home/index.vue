<!--  -->
<template>
    <div>
        <header>
            <!--  top-header  -->
            <div class="top-header">
                <div class="container">
        
                    <div class="col-md-6">
                        <div class="top-header-left">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="top-header-right">
                            <ul>
                                <li>
                                    <div class="dropdown">
                                        <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
                                            <i class="icon-settings icons" aria-hidden="true"></i> Setting
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li>
                                            <li><a href="#">Change Address</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--  /top-header  -->
            </div>
            <section class="top-md-menu">
                <div class="container">
                    <div class="col-sm-3">
                        <div class="logo">
                            <!-- 可以更换成自己的Logo -->
                            <h6><img src="https://pic.imgdb.cn/item/65717325c458853aeff3d236.png" style="height: 150px; width: 150px;" alt="logo" /></h6>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <!-- Search box Start -->
                        <form>
                            <div class="well carousel-search hidden-phone">
                                <div class="btn-group">
                                    <a class="btn dropdown-toggle btn-select" data-toggle="dropdown" href="#">All Categories <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Book I</a></li>
                                        <li><a href="#">Book II</a></li>
                                        <li><a href="#">Book III</a></li>
                                    </ul>
                                </div>
                                <div class="search">
                                    <input type="text" placeholder="Where prodect" />
                                </div>
                                <div class="btn-group">
                                    <button type="button" id="btnSearch" class="btn btn-primary"><i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </form>
                        <!-- Search box End -->
                    </div>
                    <div class="col-sm-3">
                        <!-- cart-menu -->
                        <div class="cart-menu">
                            <ul>
                                <li><router-link :to="{name:'ShoppingCart'}" data-toggle="dropdown" data-hover="dropdown"><i class="icon-basket-loaded icons" aria-hidden="true"></i></router-link><span class="subno">0</span><strong>Your Cart</strong></li>
                            </ul>
                        </div>
                        <!-- cart-menu End -->
                    </div>
                    <div class="main-menu">
                        <!--  nav  -->
                        <nav class="navbar navbar-inverse navbar-default">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-hover="dropdown" data-animations=" fadeInLeft fadeInUp fadeInRight">
                                <ul class="nav navbar-nav">
                                    <li class="all-departments dropdown">
                                        <a href="index.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span> Shop By Department</span> <i class="fa fa-bars" aria-hidden="true"></i> </a>
                                        <ul class="dropdown-menu dropdownhover-bottom all-open" role="menu">
											<li>
											    <router-link :to="{ name: 'BookList', query: { category: 'Fiction' } }">
													<img src="assets/images/menu-icon1.png" alt="menu-icon1" style="height: 20px; width: 20px;" /> Fiction
											    </router-link>
											</li>
											<li>
											    <router-link :to="{ name: 'BookList', query: { category: 'Science & Technology' } }">
													<img src="assets/images/menu-icon2.png" alt="menu-icon2" style="height: 20px; width: 20px;"/> Science & Technology
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'History & Biography' } }">
													<img src="assets/images/menu-icon3.png" alt="menu-icon3" style="height: 20px; width: 20px;" /> History & Biography
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'Children & Young Adult Reading' } }">
													<img src="assets/images/menu-icon4.png" alt="menu-icon4" style="height: 20px; width: 20px;" /> Children & Young Adult Reading
												</router-link>
											</li>
											<li>
											    <router-link :to="{ name: 'BookList', query: { category: 'Travel & Adventure' } }">
													<img src="assets/images/menu-icon5.png" alt="menu-icon5" style="height: 20px; width: 20px;" /> Travel & Adventure
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'Art & Photography' } }">
													<img src="assets/images/menu-icon6.png" alt="menu-icon6" style="height: 20px; width: 20px;" /> Art & Photography
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'Health & Beauty' } }">
													<img src="assets/images/menu-icon7.png" alt="menu-icon7" style="height: 20px; width: 20px;" /> Health & Beauty
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'Business & Economics' } }">
													<img src="assets/images/menu-icon8.png" alt="menu-icon8" style="height: 20px; width: 20px;" /> Business & Economics
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'Philosophy & Religion' } }">
													<img src="assets/images/menu-icon9.png" alt="menu-icon9" style="height: 20px; width: 20px;" /> Philosophy & Religion
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: 'Regional Literature Preferences' } }">
													<img src="assets/images/menu-icon10.png" alt="menu-icon10" style="height: 20px; width: 20px;" /> Regional Literature Preferences
												</router-link>
											</li>
											<li>
												<router-link :to="{ name: 'BookList', query: { category: ' ' } }">
													<img src="assets/images/menu-icon11.png" alt="menu-icon11" style="height: 20px; width: 20px;" /> All
												</router-link>
											</li>
										</ul>
                                    </li>
                                    <li><a href="#/Home" style="color: rgb(177, 30, 34);">Home</a></li>
                                    <li><router-link :to="{name:'BookList'}">BookList</router-link></li>
                                </ul>
                                <!-- /.navbar-collapse -->
                            </div>
                        </nav>
                        <!-- /nav end -->
                    </div>
                </div>
            </section>
            <!-- header-outer -->
            <section class="header-outer">
                <!-- header-slider -->
                    <div class="header-slider">					
                            <div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel" >
                                <!-- .home-slider -->
                                <div class="carousel-inner">
                                    <div class="item active" style="background: url('https://pic.imgdb.cn/item/656dc750c458853aef0bb214.jpg');  background-repeat: no-repeat; background-position: right;">
                                        <div class="container">		
                                            <div class="caption">
                                            <div class="caption-outer">
                                                <div class="col-xs-12 col-sm-12 col-md-4">												
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-6">
                                                    <h3>Liu Cixin</h3>
                                                    <h2 class="animated wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">The Three-Body Problem</h2>
                                                    <h4>Only from 44.7 </h4>
                                                    <p class="animated wow fadeInRight">A great scientific fiction!</p>
                                                    <a data-scroll class="btn get-start animated fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" href="#">BUY NOW</a>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-2">												
                                                    <div class="save-price animated wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <span class="save-text">From</span>
                                                        <span class="saveprice-no">44.7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                                    <div class="item" style="background-image: url(https://pic.imgdb.cn/item/656dc977c458853aef15155b.jpg);  background-repeat: no-repeat; background-position: right;">
                                        <div class="container">		
                                            <div class="caption">
                                            <div class="caption-outer">
                                                <div class="col-xs-12 col-sm-12 col-md-4">												
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-6">
                                                    <h3>Ichiro Kishi, Shiken Koga</h3>
                                                    <h2 class="animated wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">The courage to be hated</h2>
                                                    <h4>Only from 27.5 </h4>
                                                    <p class="animated wow fadeInRight">A great psychology book!</p>
                                                    <a data-scroll class="btn get-start animated fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" href="#">BUY NOW</a>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-2">												
                                                    <div class="save-price animated wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <span class="save-text">From</span>
                                                        <span class="saveprice-no">27.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item" style="background-image: url(https://pic.imgdb.cn/item/656dc922c458853aef138b81.jpg);  background-repeat: no-repeat; background-position: right;">
                                        <div class="container">		
                                            <div class="caption">
                                            <div class="caption-outer">
                                                <div class="col-xs-12 col-sm-12 col-md-4">												
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-6">
                                                    <h3>James F.Kurose</h3>
                                                    <h2 class="animated wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">Computer networking: a top-down approach</h2>
                                                    <h4>Only from 96.7 </h4>
                                                    <p class="animated wow fadeInRight">A excellent book that can learn computer network!</p>
                                                    <a data-scroll class="btn get-start animated fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" href="#">BUY NOW</a>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-2">												
                                                    <div class="save-price animated wow slideInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <span class="save-text">From</span>
                                                        <span class="saveprice-no">96.7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- indicators -->
                                <ol class="carousel-indicators">
                                    <li data-target="#home-slider" data-slide-to="0" class="active"></li>
                                    <li data-target="#home-slider" data-slide-to="1"></li>
                                    <li data-target="#home-slider" data-slide-to="2"></li>
                                </ol>
                                <!-- /indicators -->
                                <!-- /.home-slider -->
                            </div>					
                    </div>
                    <!-- /header-slider end -->			
            </section>
            <!-- /header-outer -->
        </header>
  

        <!-- all-product -->
        <section class="all-product">
            <div class="container">
                <div class="row">
                    <!-- title -->
                    <div class="title">
                        <h2>
                            choiceness
                        </h2>
                        <ul class="nav nav-tabs etabs">
                            <li class="active"><a data-toggle="tab" href="#phones">Hot Sell</a></li>
                            <li><a data-toggle="tab" href="#laptop">New Arrival</a></li>
                            <li><a data-toggle="tab" href="#desktop">Manager Recommned</a></li>
                            <li><a data-toggle="tab" href="#tV">Classic Book</a></li>
                        </ul>
                    </div>
                    <!-- /title -->
                    <!-- electonics -->
                    <div class="electonics">
                        <div class="brd2 col-xs-12 col-sm-3 col-md-3">
                            <div id="home-slider2" class="carousel slide carousel-fade" data-ride="carousel">
                                <!-- .home-slider -->
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <a class="ads" href="#">
                                            <img src="./assets/images/1-1.jpg" alt="add-banner" />
                                        </a>
                                    </div>
                                    <div class="item">
                                        <a class="ads" href="#">
                                            <img src="./assets/images/2-1.jpg" alt="add-banner" />
                                        </a>
                                    </div>
                                </div>
                                <!-- indicators -->
                                <ol class="carousel-indicators">
                                    <li data-target="#home-slider2" data-slide-to="0" class="active"></li>
                                    <li data-target="#home-slider2" data-slide-to="1"></li>
                                </ol>
                                <!-- /indicators -->
                                <!-- /.home-slider -->
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-9 col-md-9">
                            <div class="row">
                                <!-- tab-content -->
                                <div class="tab-content">
                                    <!-- tab-pane -->
                                    <div id="phones" class="tab-pane fade in active">
                                        <div class="owl-demo-outer">
                                            <!-- #owl-demo -->
                                            <div id="owl-demo3" class="deals-wk2">
                                                <div class="item">
                                                    <div v-for="product in products_hot" :key="product.id" class="bdr col-xs-12 col-sm-12 col-md-6">
                                                    <!-- e-product -->
														<div class="e-product">
															<div class="pro-img">
																<sup class="sale-tag" v-if="product.saleTag">{{ product.saleTag }}</sup>
																<img :src="product.imgUrl" style="padding: 20px;" :alt="product.title">
																<div class="hover-icon">
																	<a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
																</div>
															</div>
															<div class="pro-text-outer">
																<span>{{ product.author }}</span>
																<a href="#">
																	<h4>{{ product.title }}</h4>
																</a>
																<p class="wk-price">{{ product.price }}</p>
																<a href="#" class="add-btn">Add to cart</a>
															</div>
														</div>
                                                    <!-- /e-product -->
													</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /tab-pane -->
                                    <!-- tab-pane -->
                                    <div id="laptop" class="tab-pane fade in">
                                        <div id="owl-demo13" class="deals-wk2">
                                            <div class="item">
                                                <div v-for="product in products_new" :key="product.id" class="bdr col-xs-12 col-sm-12 col-md-6">
                                                <!-- e-product -->
                                                	<div class="e-product">
                                                		<div class="pro-img">
                                                			<sup class="sale-tag" v-if="product.saleTag">{{ product.saleTag }}</sup>
                                                			<img :src="product.imgUrl" style="padding: 20px;" :alt="product.title">
                                                			<div class="hover-icon">
                                                				<a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                                                			</div>
                                                		</div>
                                                		<div class="pro-text-outer">
                                                			<span>{{ product.author }}</span>
                                                			<a href="#">
                                                				<h4>{{ product.title }}</h4>
                                                			</a>
                                                			<p class="wk-price">{{ product.price }}</p>
                                                			<a href="#" class="add-btn">Add to cart</a>
                                                		</div>
                                                	</div>
                                                <!-- /e-product -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /tab-pane -->
                                    <!-- tab-pane -->
                                    <div id="desktop" class="tab-pane fade in">
                                        <div id="owl-demo14" class="deals-wk2">
                                      <div v-for="product in products_recommend" :key="product.id" class="bdr col-xs-12 col-sm-12 col-md-6">
                                      <!-- e-product -->
                                      	<div class="e-product">
                                      		<div class="pro-img">
                                      			<sup class="sale-tag" v-if="product.saleTag">{{ product.saleTag }}</sup>
                                      			<img :src="product.imgUrl" style="padding: 20px;" :alt="product.title">
                                      			<div class="hover-icon">
                                      				<a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                                      			</div>
                                      		</div>
                                      		<div class="pro-text-outer">
                                      			<span>{{ product.author }}</span>
                                      			<a href="#">
                                      				<h4>{{ product.title }}</h4>
                                      			</a>
                                      			<p class="wk-price">{{ product.price }}</p>
                                      			<a href="#" class="add-btn">Add to cart</a>
                                      		</div>
                                      	</div>
                                      <!-- /e-product -->
                                      </div>                                        </div>
                                    </div>
                                    <!-- /tab-pane -->
                                    <!-- tab-pane -->
                                    <div id="tV" class="tab-pane fade in">
                                        <div id="owl-demo15" class="deals-wk2">
											<div v-for="product in products_classics" :key="product.id" class="bdr col-xs-12 col-sm-12 col-md-6">
											<!-- e-product -->
												<div class="e-product">
													<div class="pro-img">
														<sup class="sale-tag" v-if="product.saleTag">{{ product.saleTag }}</sup>
														<img :src="product.imgUrl" style="padding: 20px;" :alt="product.title">
														<div class="hover-icon">
															<a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
														</div>
													</div>
													<div class="pro-text-outer">
														<span>{{ product.author }}</span>
														<a href="#">
															<h4>{{ product.title }}</h4>
														</a>
														<p class="wk-price">{{ product.price }}</p>
														<a href="#" class="add-btn">Add to cart</a>
													</div>
												</div>
											<!-- /e-product -->
											</div>                                        
										</div>
                                    </div>
                                    <!-- /tab-pane -->
                            
                                </div>
                                <!-- /tab-content -->

                            </div>
                        </div>
                    </div>
                    <!-- /electonics -->
                    <!-- half-banner -->
                    <div class="half-banner">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <img src="./assets/images/3-4.jpg" alt="" />
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <img src="./assets/images/3-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <!-- /half-banner -->
                    <!-- title -->
                    

                </div>
            </div>
        </section>
        <!-- /all-product -->
		
		
        <div v-if="Object.keys(userInfo).length === 0 ? true : false">
            <div class="modal fade modal-popup" id="modal1" data-open-delay="1500" tabindex="-1" role="dialog" data-backdrop="static"> 
                <div class="modal-dialog modal-lg" role="document">
                    <button v-show="false" type="button" class="close" data-dismiss="modal" aria-label="Close" style="top: -125px;"><i
                            class="fa fa-times" id="closeButton"></i></button>
                    <div class="modal-body">
                        <Login v-on:getUserInfo="handleUserInfo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-dropdownhover.min.css";
import "./assets/font/css/font-awesome.min.css";
import "./assets/simple-line-icon/css/simple-line-icons.css";
import "./assets/stroke-gap-icons/stroke-gap-icons.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/baguetteBox.css";
import "./assets/owl-carousel/owl.carousel.css";
import "./assets/owl-carousel/owl.theme.css";
import Login from "../Login/index.vue";

export default {
    name: 'Home',
    components: {
		Login
    },
	data() {
		return{
			products_hot:[
			{
				id: 1,
				saleTag: 'sale!',
				imgUrl: 'https://pic.imgdb.cn/item/656dcdc4c458853aef294f6d.jpg',
				author: 'Jhumpa Lahiri',
				title: 'Roman Stories',
				price: '$24.3',
			},
			{
				id: 2,
				imgUrl: 'https://pic.imgdb.cn/item/656dccecc458853aef24fb7a.jpg',
				author: 'Ann Napolitano',
				title: 'Hello Beautiful',
				price: '$15.56',
			},
			{
				id: 3,
				saleTag: 'sale!',
				imgUrl: 'https://pic.imgdb.cn/item/656dce63c458853aef2c2f14.jpg',
				author: 'Rainer Maria Rilke',
				title: 'Letters to a Young Poet: The Norton Centenary Edition',
				price: '$12.95',
            },
			{
				id: 4,
				newTag: 'NEW',
				imgUrl: 'https://pic.imgdb.cn/item/656dcf4fc458853aef307e15.jpg',
				author: 'Walter Isaacson',
				title: 'Elon Musk',
				price: '$17.5',
            },
		  ],
		  products_new:[
		  	{
				id: 1,
				saleTag: 'sale!',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dcdc4c458853aef294f6d.jpg',
				author: 'Jhumpa Lahiri',
				title: 'Roman Stories',
				price: '$24.3',
	  		},
	  		{
				id: 2,
		  		imgUrl: 'https://pic.imgdb.cn/item/656dccecc458853aef24fb7a.jpg',
		  		author: 'Ann Napolitano',
				title: 'Hello Beautiful',
	  			price: '$15.56',
		  	},
		  	{
		  		id: 3,
		  		saleTag: 'sale!',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dce63c458853aef2c2f14.jpg',
		  		author: 'Rainer Maria Rilke',
		  		title: 'Letters to a Young Poet: The Norton Centenary Edition',
		  		price: '$12.95',
			},
		  	{
		  		id: 4,
		  		newTag: 'NEW',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dcf4fc458853aef307e15.jpg',
		  		author: 'Walter Isaacson',
		  		title: 'Elon Musk',
		  		price: '$17.5',
		    },
		  ],
		  products_recommend:[
			{
		  		id: 1,
		  		saleTag: 'sale!',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dcdc4c458853aef294f6d.jpg',
		  		author: 'Jhumpa Lahiri',
		  		title: 'Roman Stories',
		  		price: '24.3',
		  	},
			{
		  		id: 2,
		  		imgUrl: 'https://pic.imgdb.cn/item/656dccecc458853aef24fb7a.jpg',
		  		author: 'Ann Napolitano',
		  		title: 'Hello Beautiful',
		  		price: '15.56',
		  	},
		  	{
		  		id: 3,
		  		saleTag: 'sale!',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dce63c458853aef2c2f14.jpg',
		  		author: 'Rainer Maria Rilke',
		  		title: 'Letters to a Young Poet: The Norton Centenary Edition',
				price: '12.95',
		    },
		  	{
		  		id: 4,
		  		newTag: 'NEW',
				imgUrl: 'https://pic.imgdb.cn/item/656dcf4fc458853aef307e15.jpg',
		  		author: 'Walter Isaacson',
		  		title: 'Elon Musk',
		  		price: '17.5',
		    },
		  ],
		  products_classics:[
			{
		  		id: 1,
		  		saleTag: 'sale!',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dcdc4c458853aef294f6d.jpg',
		  		author: 'Jhumpa Lahiri',
		  		title: 'Roman Stories',
		  		price: '24.3',
		  	},
			{
				id: 2,
		  		imgUrl: 'https://pic.imgdb.cn/item/656dccecc458853aef24fb7a.jpg',
		  		author: 'Ann Napolitano',
		  		title: 'Hello Beautiful',
		  		price: '15.56',
		  	},
		  	{
				id: 3,
		  		saleTag: 'sale!',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dce63c458853aef2c2f14.jpg',
		  		author: 'Rainer Maria Rilke',
		  		title: 'Letters to a Young Poet: The Norton Centenary Edition',
				price: '12.95',
		    },
		  	{
		  		id: 4,
		  		newTag: 'NEW',
		  		imgUrl: 'https://pic.imgdb.cn/item/656dcf4fc458853aef307e15.jpg',
		  		author: 'Walter Isaacson',
		  		title: 'Elon Musk',
		  		price: '17.5',
		    },
		  ],
          userInfo: {},
		}
		
	},
    methods: {
        handleUserInfo(data) {
            console.log("In father=>", data);
            this.userInfo = data;
            // 获取按钮元素
            var closeButton = document.getElementById('closeButton');
            if(closeButton){
                console.log("click the button")
            }
            // 触发按钮点击事件
            closeButton.click();
        }
    },
    mounted() {
        console.log("every time fresh the page=>", this.userInfo);
    }
    
}
</script>



<style scoped></style>