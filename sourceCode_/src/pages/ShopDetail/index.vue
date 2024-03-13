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
					<div class="col-sm-3">
						<!-- cart-menu -->
						<div class="cart-menu">
							<ul>
								<li class="dropdown">
									<router-link :to="{name:'ShoppingCart'}" data-toggle="dropdown" data-hover="dropdown">
										<i class="icon-basket-loaded icons" aria-hidden="true"></i>
									</router-link>
									<span class="subno" ref="subnoSpan" >0</span>
									<strong>Your Cart</strong>
								</li>
							</ul>
						</div>
						<!-- cart-menu End -->
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
		<!-- newsletter -->
		<section class="grid-shop">
			<!-- .grid-shop -->
			<div class="container"  v-for="(product, index) in products" :key="index">
				<div class="row" v-if="product.productID === receivedValue">
					<div class="col-md-12">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#/Home">Home</a></li>
							<li class="breadcrumb-item active">Shop Detail.</li>
						</ol>
						<div class="row">						
							<!-- left side -->
							<div class="col-sm-5 col-md-5">
								<!-- product gallery -->
								<div class="connected-carousels">
									<div class="stage">
										<div class="carousel carousel-stage" >
												<ul >
													<li style="height: 600px; width: 500px;" v-for="(image, imageIndex) in product.productImages" :key="imageIndex">
														<img class="zoom_01" :src="image.src" :data-zoom-image="image.src" :alt="image.alt" />
													</li>											
												</ul>
										</div>

									</div>
	
									<div class="navigation">
										<a href="#/ShopDetail" class="prev prev-navigation">&lsaquo;</a>
										<a href="#/ShopDetail" class="next next-navigation">&rsaquo;</a>
										<div class="carousel carousel-navigation" >
											<ul >
												<li v-for="(image, imageIndex) in product.productImages" :key="imageIndex">
													<img :src="image.src" width="110" height="110" alt="">
												</li>											
											</ul>
										</div>
									</div>
								</div>
	
								<!-- / product gallery -->
							</div>
							<!-- left side -->
							<!-- right side -->
							<div class="col-sm-7 col-md-7" >
								<!-- .pro-text -->
								<div class="pro-text product-detail">
									<!-- /.pro-img -->
									<span class="span1">{{product.catogory}}</span>
										<h4>{{ product.name }}</h4>
									<div class="star2">
										<ul>
											<li class="yellow-color"><i class="fa fa-star" aria-hidden="true"></i></li>
											<li class="yellow-color"><i class="fa fa-star" aria-hidden="true"></i></li>
											<li class="yellow-color"><i class="fa fa-star" aria-hidden="true"></i></li>
											<li class="yellow-color"><i class="fa fa-star" aria-hidden="true"></i></li>
											<li><i class="fa fa-star" aria-hidden="true"></i></li>
											<li> <a>Auther: {{product.auther}}</a></li>
											<li> <a>Publishers: {{product.Publishers}}</a></li>
										</ul>
									</div>
									<p><strong>${{product.currentPrice}}</strong><span class="line-through">${{product.originalPrice}}</span></p>
									<p class="in-stock">Availability:   <span>In Stock</span></p>
									<p>{{product.ProductIntroduction}}</p>							
									<form>
										<div class="numbers-row">
											<input type="text" name="french-hens" id="french-hens" value="1" style="border: none;">
										</div>
									</form>
									<a @click="showToast() " class="addtocart2">Add to cart</a>
									<div class="tag">
										<p style="padding-top: 20px;"> </p>
										<p>Categories: <a v-for="(category, index) in product.catogory" :key="index">{{category}}</a></p>
									</div>
								</div>
								<!-- /.pro-text -->
							</div>
						</div>
					</div>
								<!-- right side -->
				</div>
			</div>
			<!-- /.grid-shop -->
		</section>
		<!-- <notifications></notifications> -->
	
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
	import "./assets/css/jcarousel.connected-carousels.css";
	import "./assets/css/baguetteBox.css";
	import "./assets/owl-carousel/owl.carousel.css";
	import "./assets/owl-carousel/owl.theme.css";
	
		export default {
			name:"ShopDetall",
			data() {
			    return {
			      receivedValue: null,
				  products:[
					{
					  productID:'1',
					  catogory:"History & Biography",
					  name:"Zizhi Tongjian",
					  auther:"Sima Guang",
					  Publishers: "Huazhong University of Science and Technology Press",
					  currentPrice:143.00,
					  originalPrice:169.00,
					  ProductIntroduction: "The New Notes (All 14 volumes) is the result of Professor Zhang Dake's annotation of the whole book after decades. 'Zhi Tongjian' is the great statesman and historian of the Northern Song Dynasty Sima Guang major in China's first general history of chronology, 294 volumes, from the twenty-third year of King Weilie of Zhou (403 BC) to the sixth year of Xiande of Emperor Shizong of the last five dynasties (959), recording the history of 1,362 years. Professor Zhang Dake's new notes absorb the excellent content of the Yuan Journal Hu Three provincial annotations, integrating modern research perspectives, in addition to the traditional characters, characters, characters, geography, officials, historical stories and other annotations, but also combined with a variety of historical books, in order to understand the full range of historical events and people. Adding pre-article introduction, synopsis, paragraph summary, comments and so on, combining micro research with macro research, has remarkable characteristics of The Times, academics, creativity, tools and so on. Simplified horizontal layout conforms to modern reading habits, reduces the difficulty of reading, and aims to enable more people to read the original text, understand the whole picture, delve into the content, system and ideas of the book, and better understand the thousand-year-old history of Chinese culture.",
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc617c458853aef05e40d.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc616c458853aef05e214.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc617c458853aef05e2d0.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc617c458853aef05e2d0.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc649c458853aef07243f.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'2',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "This book is based on the 1956 typeset edition of the Literary Ancient Books Publishing House 'Guwen Guanwei' (according to Yingxuetang's typeset), and the translator uses relevant historical books or anthology to collate, choosing good ones and not out of the school record. At the same time, the articles in the first four volumes of the original book with strong historical content and lack of prose aesthetics are condensed into two volumes; All retained since Volume V. Many of the selected texts are short and wonderful, which are easy to memorize. This book breaks the conventional mode of such books in the past, marking pinyin throughout the original text, saving readers the trouble of difficult words and rare words to consult reference books, so that reading can be smooth. It is accompanied by a smooth and popular translation of the whole text, which is suitable for learning and understanding the excellent ancient prose. It is especially helpful to the study of classical Chinese and is a primer for children's Chinese studies.",
					  
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc67bc458853aef07f8f8.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc673c458853aef07d5bb.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc673c458853aef07d57e.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc673c458853aef07d523.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc673c458853aef07d31e.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc673c458853aef07d2cf.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"The Three-Body Problem",
					  auther:"Liu Cixin",
					  Publishers: "Chongqing Press",
					  currentPrice:44.70,
					  originalPrice:59.00,
					  ProductIntroduction: "While the Cultural Revolution was in full swing, the military's secret program to search for alien civilizations, the Red Bank Project, made a breakthrough. But at the moment of pressing the launch button, Ye Wenjie did not realize that she had completely changed the fate of mankind. The first sound of the Earth's civilization to the universe, with the sun as the center, hurtling into the deep universe at the speed of light... Four light years away, the 'Trisaran civilization' is struggling to escape its home planet as more than a hundred times of destruction and rebirth, led by three unruly SUNS, force them to flee. And just then, they received a message from Earth. After using supertechnology to lock down Earth's basic science, the Trisolaran's massive space fleet begins its journey to Earth... The end of mankind is upon us.",
					  
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc750c458853aef0bb214.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc750c458853aef0bb078.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc750c458853aef0bb0f7.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc750c458853aef0bb150.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc750c458853aef0bb1a0.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc792c458853aef0cce9c.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'4',
					  catogory:"",
					  name:"Shi Ji",
					  auther:"Sima Qian",
					  Publishers: "Beijing United Publishing Company",
					  currentPrice:86.90,
					  originalPrice:99.00,
					  ProductIntroduction: 'The Record of the Grand Historian is a biographical history book written by Sima Qian, a famous historian of the Western Han Dynasty. It is the most comprehensive biographical history in Chinese history and is listed as the first of the "Twenty-four Histories". It records a total of more than three thousand years of history from the era of the Yellow Emperor in the ancient legend to the period of Yuan Hui Yuan of Emperor Wu of Han. "Through the changes of ancient and modern times, investigating the occasion of heaven and man", the book includes twelve books, thirty families, seventy biographies, ten tables, eight books, a total of 130. Together with the later Hanshu, the Later Hanshu and The Three Kingdoms, it is called "the first Four Histories". At the same time, the Records of the Grand Historian is also regarded as an excellent literary work, which has an important position in the history of Chinese literature, and is praised by Lu Xun as "the last song of historians, the rhyme of Li SAO".',
					  
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc7c6c458853aef0dae99.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc7c6c458853aef0daee8.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc7c6c458853aef0daf63.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc7c6c458853aef0dae07.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc7c6c458853aef0dae4d.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc820c458853aef0f3881.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'5',
					  catogory:"",
					  name:"The Biography of Su Dongpo",
					  auther:"Lin Yutang",
					  Publishers: "Hunan Literature and Art Publishing House",
					  currentPrice:26.00,
					  originalPrice:49.00,
					  ProductIntroduction: "This book is a biography of Su Dongpo as an unchangeable optimist, a moralist with compassion, a prose writer, a painter of the new school, a great calligrapher, an experimenter in wine making, an engineer, an opponent of pseudoism, a practitioner of yoga, a Buddhist, a scholar-official, a secretary to the emperor, and a drinker. He is a compassionate judge, a political opinionator, a moonwalker, a poet, and a witty joker. It tells all about Su Dongpo from all aspects. This book is full of details and pictures, and is worth collecting.",
					  
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc83dc458853aef0fb237.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc83dc458853aef0fb2af.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc83ec458853aef0fb32d.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc83ec458853aef0fb3cc.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc83ec458853aef0fb45d.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc87bc458853aef10ad02.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'6',
					  catogory:"",
					  name:"The Beauty of Control ",
					  auther:"Wang Tianwei, Huang Junkui",
					  Publishers: "Tsinghua University Press",
					  currentPrice:59.20,
					  originalPrice:69.00,
					  ProductIntroduction: "These topics have also attracted much attention in recent years, including optimal control theory, dynamic programming, linear quadratic regulators (LQR), model predictive control (MPC), and Kalman filters. For these contents, there are both in-depth theoretical literature and popular science books. However, readers are often discouraged by theoretical literature, and the superficial introduction is often superficial, unable to meet the needs of readers for in-depth understanding and application. Therefore, in this book, I have tried to walk a middle path, which is both in-depth analysis of the theory and concise and intuitive presentation of these complex concepts to provide readers with a better learning experience.",
					  
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc8cec458853aef12071e.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc8cec458853aef1207e8.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc8cec458853aef120887.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc8cec458853aef120684.png", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc8cec458853aef1206b7.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc8fdc458853aef12d370.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'7',
					  catogory:"",
					  name:"Computer networking: a top-down approach",
					  auther:"James F. Kurose",
					  Publishers: "China Machine Press",
					  currentPrice:96.70,
					  originalPrice:129.00,
					  ProductIntroduction: "This book uses the author's original top-down approach to teach the principle of computer network and its protocols, that is, starting from the application layer protocol and going down the protocol stack, so that readers can understand the meaning of each layer from the perspective of implementation and application, and then understand the working principle and mechanism of computer network. This book emphasizes application layer paradigms and application programming interfaces that enable readers to learn and 'create' in the application environment they use every day.",
					
					  productImages: [
							{ src: "https://pic.imgdb.cn/item/656dc922c458853aef138b81.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc922c458853aef138a86.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc922c458853aef138abc.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc922c458853aef138b03.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc922c458853aef138b58.jpg", alt: "qoute-icon" },
							{ src: "https://pic.imgdb.cn/item/656dc958c458853aef14860c.jpg", alt: "qoute-icon" },
						],
					},
					{
					  productID:'8',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
					{
					  productID:'3',
					  catogory:"",
					  name:"Guwen Guanzhi",
					  auther:"Li Mengsheng, Shi Zhaoliang",
					  Publishers: "Shanghai Ancient Books Publishing House",
					  currentPrice:34.00,
					  originalPrice:50.00,
					  ProductIntroduction: "",
					
					  productImages: [
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
							{ src: "", alt: "qoute-icon" },
						],
					},
				  ]
					  
			    };
			  },
			mounted() {
		    // 在组件挂载时获取查询参数
			this.receivedValue = this.$route.query.index;
		  },
		  methods: {
		      showToast() {
				  
				const spanElement = this.$refs.subnoSpan
				// 获取当前标签的文本内容并转换为整数
				let currentValue = parseInt(spanElement.innerHTML);
				// 加一
				let newValue = currentValue + 1;
				// 更新标签的内容
				spanElement.innerHTML = newValue.toString();
				
				this.$emit('updateUserInfo', this.receivedValue);
				console.log("yes")
				
				sessionStorage.setItem("index",this.receivedValue);
				
				this.$notify({
				  title: 'succeed',
				  message: this.$createElement('i', { style: 'color: rgb(177, 30, 34)' }, 'Add to cart successfully')
				});
		      },
		    }
		}
		
	
</script>

<style scoped></style>