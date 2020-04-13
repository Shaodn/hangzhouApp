<template>
	<view class="container">
		
		<!-- 杭州banner -->
		<!-- <view class="home-banner">
			<image src="../../static/home-kv.jpg" mode="scaleToFill"></image>
		</view> -->
		<view class="home-banner">
			 <swiper class="swiper-home" autoplay="true" duration="1000" interval="3000" circular="true">
				<swiper-item>
					<view class="swiper-item"><image src="../../static/home-kv.jpg" mode="scaleToFill"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/app_home-kv02.jpg" mode="scaleToFill" @click="gotopromotion('../../static/promotion/content1.jpg')"></image></view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 搜索框 -->
		<view class="home-search">
			<view class="search-container" @click="gotosearch()">
				<text class="uni-icon uni-icon-search"></text>
				<text class="search-text">搜索产品</text>
			</view>
		</view>
		<swiper class="swiper" indicator-dots="true" duration="1000" indicator-color="#999999" indicator-active-color="#016b69">
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-cate" @click="gotocate(0)">
						<image src="../../static/home/ref.png" mode="widthFix"></image>
						<text>冰箱</text>
					</view>
					<view class="swiper-cate" @click="gotocate(1)">
						<image src="../../static/home/weiyu.png" mode="widthFix"></image>
						<text>家装卫浴</text>
					</view>
					<view class="swiper-cate" @click="gotocate(2)">
						<image src="../../static/home/dadian.png" mode="widthFix"></image>
						<text>厨房大电</text>
					</view>
					<view class="swiper-cate" @click="gotocate(3)">
						<image src="../../static/home/xiaodian.png" mode="widthFix"></image>
						<text>厨房小电</text>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-cate" @click="gotocate(4)">
						<image src="../../static/home/health.png" mode="widthFix"></image>
						<text>个护健康</text>
					</view>
					<view class="swiper-cate" @click="gotocate(5)">
						<image src="../../static/home/shenghuo.png" mode="widthFix"></image>
						<text>生活电器</text>
					</view>
					<view class="swiper-cate" @click="gotocate(6)">
						<image src="../../static/home/homeav.png" mode="widthFix"></image>
						<text>视听影音</text>
					</view>
					<view class="swiper-cate" @click="gotocate(7)">
						<image src="../../static/home/cameras-camcorders.png" mode="widthFix"></image>
						<text>摄影摄像</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gotocate(activeindex){
				try {
				    uni.setStorageSync('catecoryactive', activeindex);
				} catch (e) {
				   console.log(e)
				}
				uni.reLaunch({
					url:'../category/category'
				})
			},
			gotosearch(){
				uni.navigateTo({
					url:'../search/search'
				})
			},
			gotopromotion(promotioncontent){
				uni.navigateTo({
					url:'../promotion/promotion?cuxiaoid='+promotioncontent
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.home-search{
		text-align:center;
		margin:33upx auto 23upx;
		
		.search-container{
			padding-top: 15upx;
			padding-bottom: 15upx;
			padding-left:10upx;
			background: #FFFFFF;
			border-radius:50upx;
			width: 70%;
			margin: 0 auto;
			font-size: 12upx;
			color: #bdbdbd;
			display: flex;
			// justify-content: center;
			align-content: center;
			flex-direction: row;
			// line-height: 20upx;
			border: 1px solid #cccccc;
		}
		.uni-icon-search:before{
			content: "\E466";
			font-size: 18upx;
			color: #737373;
			
		}
		.search-text,.uni-icon{
			font-size: 14upx;
			
		}
	}
	.home-banner{
		width: 100%;
		image{
			width: 100%;
			height: 568upx;
		}
		font-size: 0;
		.swiper-home{
			height: 568upx;
		}
	}
	.swiper{
		height: 280upx;
		
		.swiper-item {
			margin:20upx 10upx;
			
			display: flex;
			
			flex-direction:row;
			// justify-content: space-between;
			.swiper-cate{
				display: flex;
				flex-direction: column;
				width:178upx;
				height:198upx;
				margin:0 5upx;
				justify-content:center;
				align-items:center;
				background:#FFFFFF;
				border-radius:5upx;
				text{
					font-size: 16upx;
					margin-top: 16upx;
				}
				image{
					width: 120upx;
				}
			}
			
		}
		
	}

</style>
