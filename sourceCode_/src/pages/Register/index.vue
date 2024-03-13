<template>
	

	
	<div class="personal-info">
		
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
									<a href="" style="margin-right: 20px; color: white;">Home</a>
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
						<h6><img src="assets/images/logo.png" alt="logo" /></h6>
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
			</div>
		</section>
		
		
		
	  <div class="contain">
		<!-- 个人信息那一行 -->
		<div class="row">
			<div class="info-column">
		  <div class="avatar">
			<img :src="user.avatar" alt="User's Avatar">
		  </div>
		  <!-- User Information -->
			<div class="user-details">
			    <h1 class="username">{{ user.username }} </h1>
			    <p class="email">Email: {{ user.email }} </p>
			    <p class="gender">Gender: {{ user.gender }} </p>
				<button class="button_cus" @click="editInfo">EDIT PERSONAL INFORMATION</button>
			</div>

		</div>
		<div class="addresses-column">
		  <h2 style="padding: 20px; text-transform: uppercase;">Shipping Addresses</h2>
		  <div class="addresses-scroll-container">
			<ul class="addresses-list">
			  <li v-for="(address, index) in user.addresses" :key="index">
				{{ address }}
				<!-- 删除地址的按钮 -->
				<button class="button_cus" @click="removeAddress(index)">Remove</button>
			  </li>
			</ul>
		  </div>
		  <!-- 添加地址的按钮 -->
		  <button class="button_cus" @click="addAddress">Add New Address</button>
		</div>




		</div>
		<!-- 订单信息那一行 -->
		<div class="row">
		  <div class="orders-column full-width">
			<h2>Your Orders</h2>
			<table class="orders-table">
			  <thead>
				<tr>
				  <th>Order #</th>
				  <th>Total</th>
				  <th>Begin Address</th>
				  <th>Arrive Address</th>
				  <th>Status</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="(order, index) in user.orders" :key="index">
				  <td>{{ order.id }}</td>
				  <td>{{ order.totalPrice }}</td>
				  <td>{{ order.beginAdd }}</td>
				  <td>{{ order.arriveAdd }}</td>
				  <td>{{ order.status }}</td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</div>

		
	  </div>
  

	  <div v-if="showInfoModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeInfoModal">&times;</span>
        <h3 style="padding-bottom: 20px;">Edit Personal Information</h3>
        <input v-model="editUser.username" type="text" placeholder="Username" />
        <input v-model="editUser.email" type="text" placeholder="Email" />
        <input v-model="editUser.gender" type="text" placeholder="Gender" />
        <p><button  class="button_cus"  @click="confirmEditInfo">Save Changes</button></p>
      </div>
    </div>

	  <!-- Add New Address Modal -->
	  <div v-if="showModal" class="modal">
		<div class="modal-content">
		  <span class="close" @click="closeModal">&times;</span>
		  <h3>Add New Address</h3>
		  <input v-model="newAddress" type="text" placeholder="Enter new address" />
		  <p><button class="button_cus" @click="confirmAddAddress">Add Address</button></p>
		</div>
	  </div>
	  
	  
	  
	  <Footer/>

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
	  
	import Footer from "../../components/Footer/index.vue"
	
  export default {
	name: 'PersonalInfoComponent',
	components: {
		Footer
	},
	data() {
	  return {
		showInfoModal: false,
		user: {
		  username: 'Customer',
		  email: 'customer@example.com',
		  gender: 'Male',
		  avatar: 'https://pic.imgdb.cn/item/656ecdebc458853aef10efeb.jpg',
		  addresses: [
			'123 Apple St, Cityville, 12345',
			'456 Orange Ave, Townsburg, 67890'
		  ],
		//   这个是模拟的物流订单信息 物流订单有三个状态 
		  orders: [
        { id: '1001', totalPrice: '150.00', status: 'In Transition',beginAdd:"北京大学",arriveAdd:"华南师范大学" },
        { id: '1002', totalPrice: '200.00', status: 'Shipped',beginAdd:"中南大学铁道学院",arriveAdd:"华南师范大学南海校区" },
        { id: '1003', totalPrice: '50.00', status: 'Processing',beginAdd:"清华大学",arriveAdd:"华南师范大学" }
      ]
		  
		},
		showModal: false,
		newAddress: ''
	  }
	},
	methods: {
	editInfo() {
      this.editUser = {...this.user}; // Copy user data to editUser
      this.showInfoModal = true;
    },
    closeInfoModal() {
      this.showInfoModal = false;
    },
    confirmEditInfo() {
      this.user = {...this.editUser}; // Update user data with edits
      this.closeInfoModal();
    },
	  addAddress() {
		this.showModal = true;
	  },
	  closeModal() {
		this.showModal = false;
		this.newAddress = '';
	  },
	  confirmAddAddress() {
		if (this.newAddress) {
		  this.user.addresses.push(this.newAddress);
		  this.closeModal();
		} else {
		  alert('Please enter an address.');
		}
	  },
	  removeAddress(index) {
		this.user.addresses.splice(index, 1);
	  }
	}
  }
  </script>
  <style scoped>
  .contain {
  display: flex;
  background-color: #8CBEB2;
  justify-content: space-between;
  /* Other styles remain unchanged */
}
.info-column, .addresses-column {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
  .addresses-box {
  margin-top: 2em;
  width: 80%;
}
.addresses-list {
  list-style: none;
  padding: 0;
}
.addresses-list li {
  width: 60%;
  margin: auto;
  background-color: #f0f0f0;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 删除地址的按钮 */
.addresses-list button {
  /* background-color: rgb(209, 40, 40); */
  color: #fff;
  border: none;
  font-weight: bold;
  border-radius: 0px;
  padding: 0px 0px;
  cursor: pointer;
  margin-top: 0px;
}
.addresses-column button {
  background-color: rgb(255, 255, 255);
  color: #aeaeae;
  border: 0.5px solid rgb(174, 174, 174); /* 边框颜色 */
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
  margin-top: 5px;
}

.addresses-scroll-container {
  max-height: 350px; /* 设置最大高度，超过这个高度会出现滚动条 */
  overflow-y: auto; /* 添加垂直滚动条 */

  padding-top: 20px;
}

.personal-info {
  max-width: 100vw; /* 设置最大宽度为视口宽度的80% */
  margin: 0 auto; /* 居中显示 */
  padding: 0px; /* 如果需要可以调整这个内边距 */
  height: auto; /* 高度自动，以适应内容 */
  box-sizing: border-box;
  border-radius: 20px;
}
  .contain {
	max-width: 80vw;
	margin: auto;
	background-color:#fff ;
/* 	border-radius: 20px; */
	align-items: center;
/* 	box-shadow: 0 0 3px #f0f0f0, 0 0 6px #f0f0f0; */
	padding: 0em;
	text-align: center;
  }
  .info-box {
	display: flex;
	flex-direction: column;
	align-items: center;
  }
  .avatar img {
	border-radius: 50%;
	width: 150px;
	height: 150px;
	object-fit: cover;
	border: 3px solid #ddd;
	margin-bottom: 1em;
  }
  .user-details {
	text-align: center;
  }
  .user-details button{
	background-color: rgb(255, 255, 255);
	color: #aeaeae;
	border: 0.5px solid rgb(174, 174, 174); /* 边框颜色 */
	font-weight: bold;
	border-radius: 5px;
	padding: 10px 10px;
	cursor: pointer;
	margin-top: 5px;
  }
  .username {
	font-size: 2em;
	font-weight: bold;
	color: rgb(209, 40, 40);
	margin: 0.5em 0;
  }
  .email, .gender {
	font-size: 1.2em;
	color: #333;
	margin: 0.5em 0;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
	min-width: 40vw;
  }
  
  .modal-content input{
	margin-bottom: 10px;
	outline: none; 
  }
  
  .modal-content button {
	background-color: rgb(255, 255, 255);
	color: #aeaeae;
	border: 0.5px solid rgb(174, 174, 174); /* 边框颜色 */
	font-weight: bold;
	border-radius: 5px;
	padding: 10px 10px;
	cursor: pointer;
	margin-top: 5px;
  }
  .close {
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  input[type="text"] {
    width: 80%;
    padding: 10px;
    /* margin: 10px 10px; */
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .button_cus {
    /* background-color: #e6e6e6; */ /* 默认背景色为白色 */
    color: #e6e6e6; /* 默认文字颜色 */
    border: 2px solid rgb(209, 40, 40); /* 边框颜色 */
    font-weight: bold;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s, color 0.3s; /* 平滑过渡效果 */
  }
  /* 鼠标悬停时的样式 */
  .button_cus:hover {
    background-color:rgb(209, 40, 40); /* 鼠标悬停时背景仍然是白色 */
    color: #fff; /* 鼠标悬停时文字颜色 */
  }

  /* 点击时的样式 */
  .button_cus:active {
    background-color: rgb(209, 40, 40); /* 点击时背景色变为红色 */
    color: #fff; /* 点击时文字颜色变为白色 */
  }

  /* 这里开始时物流订单 */
  .orders-column {
  margin-top: 2em;
  width: 80%;
}
.contain {
  display: block;
  width: 100%;
  /* 其他样式保持不变 */
}
.info-column, .addresses-column {
  width: 100%; /* 扩展宽度以适应新布局 */
  /* 其他样式保持不变 */
}
/* 使得订单信息的文字风格与其他部分一致 */
.order-item span {
  color: #333;
  font-size: 1.2em;
}
/* 你可以根据需要添加或修改更多样式 */
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 允许内容在必要时折行 */
  margin-bottom: 5px;
}
.info-column, .addresses-column {
  width: 48%; /* 适当减少宽度以适应两栏布局 */
  padding: 20px;
  /* 其他样式保持不变 */
}
.orders-column {
	width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.full-width {
  width: 100%;
}
.orders-table {
  margin: auto;
  width: 70%; /* 使表格宽度充满容器 */
  border-collapse: collapse; /* 用于获取单一边框样式 */
  margin-top: 10px;
  text-align: left;
  border-radius: 10px;
  overflow: hidden; 
}
.orders-table th,
.orders-table td {
  padding: 10px; /* 单元格内边距 */
  border: 1px solid #ddd; /* 单元格边框 */
}
.orders-table thead {
  background-color: rgb(177, 30, 34); /* 表头背景颜色 */
  color: white;
  text-transform: uppercase;
}
.orders-table tbody {
  background-color: #f7f7f7; /* 设置背景颜色 */
}

/* 你可以根据需要添加或修改更多样式 */

  </style>
  