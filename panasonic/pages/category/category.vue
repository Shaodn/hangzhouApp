<template>
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px;'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="item.lv1Id" :class="index==categoryActive?'active':''"
				 v-for="(item,index) in menulist">
				 
					{{item.lv1Name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px;' " scroll-with-animation>
			 <view class="nav-right-list">
			 	<view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in menulist[categoryActive].content" :key="index" @click="golist(item)">
			 		<image :src="'../../static/menu-images/'+item.lv2Id+'.png'" />
			 		<!-- <image src="../../static/menu-images/default.png" mode="widthFix"/> -->
			 		<view>{{item.lv2Name}}</view>
			 	</view>
			 </view> 
				
			</scroll-view>


		</view>
	</view>
</template>

<script>
	import menu from "../../common/menu.js"
	export default {
		data() {
			return {
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
				titleheight:0,
				menulist:menu.menulist
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.scrollTop = -this.scrollHeight * index;
			},
			golist(item){
				let detail = {
					subcategory:item.lv2Id,
					subcategoryName:item.lv2Name
				};
				uni.navigateTo({
					url: '../productlist/productlist?productlist=' + encodeURIComponent(JSON.stringify(detail))
				});
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'../search/search'
			})
		},
		onLoad: function() {
			
			this.height = uni.getSystemInfoSync().windowHeight;
			try {
			    const cav = uni.getStorageSync('catecoryactive');
			    this.categoryActive = cav;
			} catch (error) {
			    console.log(error)
			}
			
		}
	}
</script>

<style lang='scss'>
	page{
		background: #FFFFFF;
		/* height: 100%; */
	}
	.main-title{
		border-bottom: solid 1px #E0E0E0;
		text-align: center;
		padding-bottom: 20upx;
		padding-top: 20upx;
	}
	.page-body {
		display: flex;
	}
	.nav-left {
		width: 175upx;
		background: #f2f2f2;
	}
	.nav-left-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 72upx;
		font-size: 16upx;
		color: #000000;
		position: relative;
		&.active{
			/* color: $base-color; */
			background: #ffffff;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 20upx;
				width: 6upx;
				background-color: $base-color;
				/* border-radius: 0 4px 4px 0; */
				opacity: .8;
			}
		}
	}

	.nav-right {
		flex: 1;
		overflow: hidden;
		/* padding-top: 65upx; */
	}
	.nav-right-list{
		display:flex;
		flex-wrap: wrap;
		background: #fff;
		/* justify-content: ; */
		flex-direction: row;
		padding-top: 45upx;
		margin: 0 20upx;
	}
	.nav-right-item {
		width: 168upx;
		margin: 25upx 5upx;
		text-align: center;
		font-size: 16upx;
		height: 164upx;
	}
	.nav-right-item image {
		width: 168upx;
		height:126.5upx;
		margin-bottom: 10upx;
		will-change: transform;
	}
</style>
