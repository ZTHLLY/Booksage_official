<template>
	
<body>
	<!--  Preloader  -->
	<div id="preloader">
		<div id="loading"> </div>
	</div>
	<header class="header2">
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
									<li><a href="#">Item I</a></li>
									<li><a href="#">Item II</a></li>
									<li><a href="#">Item III</a></li>
									<li class="divider"></li>
									<li><a href="#">Other</a></li>
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
				
				<div class="main-menu">
					<!--  nav  -->
					<nav class="navbar navbar-inverse navbar-default">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
						</div>
						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-hover="dropdown" data-animations=" fadeInLeft fadeInUp fadeInRight">
							<ul class="nav navbar-nav">
								<li class="all-departments dropdown"> <a href="index.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span> Shop By Department</span> <i class="fa fa-bars" aria-hidden="true"></i> </a>
									<ul class="dropdown-menu dropdownhover-bottom" role="menu">
										<li>
										    <router-link :to="{ name: 'BookList', query: { category: 'Fiction' } }">
												<img src="assets/images/menu-icon1.png" alt="menu-icon1" style="height: 20px; width: 20px;" /> Fiction
										    </router-link>
										</li>
										<li>
										    <router-link :to="{ name: 'BookList', query: { category: 'Science & Technology' } }">
												<img src="assets/images/menu-icon2.png" alt="menu-icon2" style="height: 20px; width: 20px;" /> Science & Technology
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
								<li><a href="#/Home">Home</a></li>
								<li><a href="#/BookList">BookList</a></li>
							</ul>
							<!-- /.navbar-collapse -->
						</div>
					</nav>
					<!-- /nav end -->
				</div>
			</div>
		</section>
	</header>
	 <section class="shopping-cart">
            <!-- .shopping-cart -->
            <div class="container">
				<div class="row">
				<div class="col-md-12">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="#/Home">Home</a></li>
						<li class="breadcrumb-item active">Shopping-Cart</li>
					</ol>
				</div>
				<div class="col-md-12">
                  <h2>You cart items</h2>
                  <table>
                     <tr>
						 <th></th>
                        <th>Product Image</th>
                        <th>Product name</th>
                        <th>publishing house</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                     </tr>
                     <tr v-for="(product, index) in productShow" :key="index">
						<td><input type="checkbox" v-model="product.selected"></td> <!-- Added this column -->
                        <td><img :src="product.image" :alt="product.name" style="height: 150px; width: 150px;"></td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.publishers }}</td>
                        <td><strong>{{ product.price }}</strong></td>
                        <td><input type="number" v-model="product.quantity" min="1" max="500"></td>
                        <td><strong>${{ calculateTotalPrice(product) }}</strong></td>
                        <td><span @click="removeProduct(index)"><i class="fa fa-times" aria-hidden="true"></i></span></td>
                    </tr>
                  </table>
                  <div class="col-sm-6 col-md-6">
                     <a href="#" class="button red">CONTINUE SHOPPING</a>
                  </div>
                  <div class="col-sm-6 col-md-6 text-right">
                     <a href="#" class="button">CLEAR SHOPPING CART</a>
                  </div>
                  <div class="col-sm-7 col-md-7">
                     <div class="shipping-outer">
                        <h2>Calculate shipping</h2>
                        <div class="row">
                           <div class="col-md-12 counttry">
                              <div class="lable">Type your address</div>
                              <input v-model="UserAddress" placeholder="Type your address" type="text">
                           </div>
                           <div class="col-sm-6 col-md-6">
                              <div class="lable">Name:</div>
                              <div class="size State">
                                 <div class="select-option">
                                    <input v-model="UserName" placeholder="Addressee's Name" type="text" />
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-6 col-md-6">
                              <div class="lable">Contact Information:</div>
                              <input v-model="UserNumber" placeholder="Addressee's Number" type="number">
                           </div>
                        </div>
                        <a href="#" class="button2">Update Shipping</a>
                     </div>
                  </div>
                  
                  <div class="col-sm-5 col-md-5">
                     <div class="shipping-outer">
                        <h2>Cart totals</h2>
                        <ul>
							<li>Cart Subtotal: <strong>${{ calculateCartSubtotal() }}</strong></li>
							<li>Shipping and Handling: <strong>$10.00</strong></li>
							<li>Cart Totals: <strong>${{ calculateCartTotal() }}</strong></li>
                           <li class="text-center">
                              <a href="#/ShoppingCart" class="redbutton" @click="showCheckoutPopup()">Proceed to checkout</a>
                              <a href="#">Checkout with mutilple adresses</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
				</div>
				
				
			<div class="modal fade modal-popup" id="modal1" tabindex="-1" role="dialog">
				<div class="modal-dialog modal-lg" role="document">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="top: -145px;"><i class="fa fa-times"></i></button>
						<div class="modal-body">
							<Payment
								:name="UserName"
								:address="UserAddress"
								:phoneNumber="UserNumber"
								:amount = "calculateCartTotal()"
							/>
						</div>
				</div>
			</div>
            </div>
            <!-- /.shopping-cart -->
         </section>

	
	<!-- sticky-socia -->
	
	<!-- /sticky-socia -->
	<p id="back-top"> <a href="#top"><i class="fa fa-chevron-up" aria-hidden="true"></i></a> </p>

</body>

	
	
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
	import $ from "../../assets/js/jquery.js"
	import Payment from "./payment.vue"

	
	import Vue from 'vue';
	import axios from 'axios';
	Vue.prototype.$axios = axios;
	
	export default {
		name:"ShoppingCart",
		components:{
			Payment,
		},
		data() {
		    return {
				UserAddress: "",
				UserName: "",
				UserNumber: "",
				
			  aimPrice:null,
			  aimDetail:null,
			  userInfo:null,
			  receivedValue:null,
			  
			  productShow:[
				
			  ],
			  
			  
			  products: [
		        {
				  id:1,
				  image: "https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg",
		          name: "Zizhi Tongjian",
		          publishers: "Huazhong University of Science and Technology Press",
		          price: "$143.00",
		          quantity: 1
		        },
		        {
				  id:2,
		          name: "Guwen Guanzhi",
		          publishers: "Shanghai Ancient Books Publishing House",
		          price: "$34.99",
		          quantity: 1,
		          image: "https://pic.imgdb.cn/item/656dc67bc458853aef07f8f8.jpg"
		        },
				{
				  id:3,
				  name: "The Three-Body Problem",
				  publishers: "Chongqing Press",
				  price: "$44.70",
				  quantity: 1,
				  image: "https://pic.imgdb.cn/item/656dc750c458853aef0bb214.jpg"
				},
				{
				  id:4,
				  name: "Shi Ji",
				  publishers: "Beijing United Publishing Company",
				  price: "$86.90",
				  quantity: 1,
				  image: "https://pic.imgdb.cn/item/656dc7c6c458853aef0dae99.jpg"
				},
				{
				  id:5,
				  name: "The Biography of Su Dongpo",
				  publishers: "Hunan Literature and Art Publishing House",
				  price: "$26.00",
				  quantity: 1,
				  image: "https://pic.imgdb.cn/item/656dc83dc458853aef0fb237.jpg"
				},
				{
				  id:6,
				  name: "The Beauty of Control",
				  publishers: "Tsinghua University Pressy",
				  price: "$59.20",
				  quantity: 1,
				  image: "https://pic.imgdb.cn/item/656dc8cec458853aef12071e.jpg"
				},
				{
				  id:7,
				  name: "Computer networking: a top-down approach",
				  publishers: "China Machine Press",
				  price: "$96.70",
				  quantity: 1,
				  image: "https://pic.imgdb.cn/item/656dc922c458853aef138b81.jpg"
				}
		        // Add more products as needed
		      ],
			  showPopup: false,
		    };
	},
	
	methods: {
    calculateTotalPrice(product) {
		return parseFloat(product.price.slice(1)) * product.quantity;
    },
    removeProduct(index) {
      this.productShow.splice(index, 1);
    },
	calculateCartSubtotal() {
		const selectedProducts = this.productShow.filter(product => product.selected);
		return selectedProducts.reduce((subtotal, product) => subtotal + this.calculateTotalPrice(product), 0).toFixed(2);
	},
	calculateCartTotal() {
	    const shippingCost = 10.00;
	    const cartSubtotal = parseFloat(this.calculateCartSubtotal());
	    return (cartSubtotal + shippingCost).toFixed(2);
	},
	
	validateForm() {

	      if (this.UserAddress.trim().length === 0) {
	        alert("Please fill in the UserAddress field");
	        return false;
	      }
	
	      if (this.UserName.trim().length === 0) {
	        alert("Please fill in the UserName field");
	        return false;
	      }
	
	      if (this.UserNumber.trim().length === 0) {
	        alert("Please fill in the UserNumber information field");
	        return false;
	      }
		  
		  return true
	    },
	
    showCheckoutPopup() {
		if(this.validateForm()){
			const self = this;
			const selectedProducts = self.productShow.filter(product => product.selected);
			self.aimPrice = parseInt(selectedProducts.reduce((subtotal, product) => subtotal + this.calculateTotalPrice(product), 0).toFixed(2));
			// 获取被选中产品的名称数组
			const selectedProductNames = selectedProducts.map(product => product.name);
			
			// 将产品名称数组连接成字符串
			self.aimDetail = selectedProductNames.join(', ');
			
			
			self.userInfo = localStorage.getItem("UserInfo");
			console.log("user:")
			console.log(self.aimPrice)
			console.log(self.aimDetail)
			console.log(self.userInfo)
			$('#modal1').modal('show');
			
			setTimeout(() => {
			  self.$axios({
			  	method:'post',
			  	url: '/api/bookorder/submit',
			  	data: {
			  	  price: self.aimPrice,
			  	  detail: self.aimDetail,
			  	  deliverStatus: "Waiting",
			  	  deliver: "G0dl1ke",
			  	  receiver: self.userInfo
			  	}
			  }).then( res => {
			  		console.log("data from backside=>",res.data.data);
			  		if(res.data.data){
			  			$('#modal1').modal('hide');
			  			  this.$alert('Thank you for choosing BooKSage', 'Payment Success', {
			  				confirmButtonText: 'Confirm',
			  			}).then(() => {
			  				this.$router.push({ name: 'home' });
			  			});
			  
			  		}
			  }).catch( err => {
			  	alert("payment error")
			  })
			}, 3000);
			

			
		}
		
			
			
    },
    hideCheckoutPopup() {
      this.showPopup = false;
    }
  },
  mounted() {
      // 监听事件
	console.log("钩子触发")
	console.log(sessionStorage.getItem("index"));
	const storedData = JSON.parse(sessionStorage.getItem("index"));
	if(storedData){
		const productToAdd = this.products.find(product => product.id === storedData);
		if (productToAdd) {
			this.productShow.push(productToAdd)
		}
	
	}
	},
};
	
	
</script>

<style scoped></style>