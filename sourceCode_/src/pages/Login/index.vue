<template>
	<div class="login-register">
		<div class="contain">
			<div class="big-box" :class="{active:isLogin}">
				<div class="big-contain" key="bigContainLogin" v-if="isLogin">
					<div class="btitle">Login</div>
					<div class="bform">
						<input class="input-border" type="email" placeholder="userAccount" v-model="loginEmail">
						<span class="errTips" v-if="emailError"></span>
						<input class="input-border" type="password" v-model="loginPassword" placeholder="Password">
						<span class="errTips" v-if="emailError"></span>
					</div>
					<button class="bbutton" @click="login">Login</button>
				</div>
				<div class="big-contain" key="bigContainRegister" v-else>
					<div class="btitle">Create account</div>
					<div class="bform">
						<input class="input-border" type="text" placeholder="userAccount" v-model="registerAccount">
						<span class="errTips" v-if="existed"></span>
						<input class="input-border" type="password" placeholder="password" v-model="registerPassword">
						<input class="input-border" type="password" placeholder="password again" v-model="registerCheckPassword">
					</div>
					<button class="bbutton" @click="register">Register</button>
				</div>
			</div>
			<div class="small-box" :class="{active:isLogin}">
				<div class="small-contain" key="smallContainRegister" v-if="isLogin">
					<div class="stitle">Hi!</div>
					<p class="scontent">Start to register.Let's read together!</p>
					<button class="sbutton" @click="changeType">Register</button>
				</div>
				<div class="small-contain" key="smallContainLogin" v-else>
					<div class="stitle">Welcome back!</div>
					<p class="scontent">Please keep in touch with us. Login to your account!</p>
					<button class="sbutton" @click="changeType">Login</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';

	Vue.prototype.$axios = axios;
	export default{
		name:'login-register',
		data(){
			return {
				isLogin:false,
				emailError: false,
				passwordError: false,
				existed: false,
				loginEmail: '',
				loginPassword: '',
				userInfo: '',
				registerAccount: '',
				registerPassword: '',
				registerCheckPassword: ''
			}
		},
		methods:{
			changeType() {
				this.isLogin = !this.isLogin
				this.loginEmail='',
				this.loginPassword=''
			},
			clearAll(){
				this.loginEmail='',
				this.loginPassword='',
				this.registerAccount='',
				this.registerPassword='',
				this.registerCheckPassword=''
			},
			login() {
				const self = this;
				if (self.loginEmail != "" && self.loginPassword != "") {
					self.$axios({
						method:'post',
						url: '/api/user/login',
						data: {
							userAccount: self.loginEmail,
							userPassword: self.loginPassword
						}
					})
					.then( res => {
						self.userInfo=res.data
						if(self.userInfo.data){
							alert("login success");
							console.log(self.loginEmail)
							this.$emit('getUserInfo',this.userInfo.data);
							// 清空 localStorage 中的所有数据
							localStorage.clear();
							localStorage.setItem("UserInfo",self.loginEmail);
						}else{
							alert(self.userInfo.description);
							self.clearAll();
						}
					})
					.catch( err => {
						console.log(err);
					})
				} else{
					alert("It can not be blank!");
				}
			},
			register(){
				const self = this;
				if(self.registerAccount != "" && self.registerPassword != "" && self.registerCheckPassword != ""){
					self.$axios({
						method:'post',
						url: '/api/user/register',
						data: {
							userAccount: self.registerAccount,
							userPassword: self.registerPassword,
							checkPassword: self.registerCheckPassword
						}
					})
					.then( res => {
						if(res.data.data>0){
							alert("register success!");
							this.changeType();
						}else{
							alert(res.data.description);
							this.clearAll();
						}
					})
					.catch( err => {
						console.log(err);
					})
				} else {
					alert("填写不能为空！");
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.login-register{
		width: 1200px;
		height: 100vh;
		box-sizing: border-box;
	}
	.contain{
		width: 100%;
		height: 60%;
		position: relative;
        top: 20%;
        left: 42.5%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		border-radius: 20px;

	}
	.big-box{
		width: 65%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translateX(0%);
		transition: all 1s;
	}
	.big-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btitle{
		font-size: 2em;
		font-weight: bold;
		color: rgb(209, 40, 40);
	}

    .input-border{
        border: 10px solid black;
    }
	.bform{
		width: 100%;
		height: 40%;
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.bform .errTips{
		display: block;
		width: 50%;
		text-align: left;
		color: red;
		font-size: 0.7em;
		margin-left: 1em;
	}
	.bform input{
		width: 50%;
		height: 30px;
		border: none;
		outline: none;
		border-radius: 10px;
		padding-left: 2em;
		background-color: #f0f0f0;
	}
	.bbutton{
		width: 20%;
		height: 40px;
		border-radius: 24px;
		border: none;
		outline: none;
		background-color: rgb(209, 40, 40);
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	.small-box{
		width: 35%;
		height: 100%;
		background: linear-gradient(135deg,rgb(176, 57, 87),rgb(183, 64, 56));
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0%);
		transition: all 1s;
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}
	.small-contain{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.stitle{
		font-size: 2em;
		font-weight: bold;
		color: #fff;
	}
	.scontent{
		font-size: 1.2em;
		color: #fff;
		text-align: center;
		padding: 2em 4em;
		line-height: 1.7em;
	}
	.sbutton{
		width: 60%;
		height: 40px;
		border-radius: 24px;
		border: 1px solid #fff;
		outline: none;
		background-color: transparent;
		color: #fff;
		font-size: 0.9em;
		cursor: pointer;
	}
	
	.big-box.active{
		left: 0;
		transition: all 0.5s;
	}
	.small-box.active{
		left: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
		transform: translateX(-100%);
		transition: all 1s;
	}
</style>