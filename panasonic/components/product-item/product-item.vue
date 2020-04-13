<template>
	<view class="product-item" @click="gotoproduct()">
		<view class="image-view">
			<!-- <image class="uni-product-image" src="../../static/productimg/seeall.jpg" mode="aspectFit"></image> -->
			<image class="uni-product-image" :src="'../../static/productimg/'+producturl+'_Gallery_1.jpg'" mode="aspectFit"></image>
		</view>
		<view class="uni-product-title">{{CatchPhrase}}<br>{{productname}}</view>
	</view>
</template>

<script>
	export default {
		name: 'productItem',
		props:{
			imgurl:{
				type:String,
				default:"http://placehold.it/50x50"
			},
			productname:{
				type:String,
				default:""
			},
			producturl:{
				type:String,
				default:""
			},
			productid:{
				type:Number,
				default:0
			},
			level2id:{
				type:String,
				default:""
			},
			CatchPhrase:{
				type:String,
				default:""
			}
		},
		methods:{
			gotoproduct(){
				let product={
					subcategory:this.level2id,
					productid:this.productid
				}
				try {
					const value = uni.getStorageSync('productlevel')+1;
					uni.setStorageSync('productlevel', value);
				    

				} catch (e) {
				    // error
				}
				//路径是引用页面收到的路径
				uni.navigateTo({
					url:'../product/product?product='+ encodeURIComponent(JSON.stringify(product))
				})
			}
		}
	}
</script>

<style>
	.product-item{
		width:230upx;
		margin:5upx 5upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;	
		flex-shrink: 0;
		text-align: center;
		border-radius: 5upx;
		font-size: 0;
	}
	
	.uni-product-image{
		width: 230upx;
		height: 175upx;
	}
	.uni-product-title{
		font-size:16upx;
		margin-top:15upx;
		margin-bottom:20upx;
		line-height: 1.5;
		text-align: center;
	}
</style>
