<template>
	<view class="productpage">
		<view id="overview">
			
			<swiper class="swiper" indicator-dots="true" duration="1000" interval="10000" circular="true" v-if="productdata.gallery>1" indicator-color="#999999" indicator-active-color="#016b69">
			
				<swiper-item v-for="index in productdata.gallery" :key="index" class="swiper-item">
					<view class="overviewgallery">
						<image :src="'../../static/productimg/'+productdata.pid+'_Gallery_'+(index+1)+'.jpg'" mode="aspectFill"></image>	
					</view>
				</swiper-item>
			</swiper>
			<view class="productimg" v-if="productdata.gallery==1" >
				<image :src="'../../static/productimg/'+productdata.pid+'_Gallery_1.jpg'" mode="aspectFill"></image>
			</view>
		</view>
		<view class="productname">
			{{productdata.catch}}{{productdata.pname}}
		</view>
		<view id="feature">
			<view class="galleryfeature" v-if="productdata.feature>1" >
				<swiper class="swiper" :duration="duration" indicator-color="#999999" :current="current" @change="curIndex">
					<swiper-item v-for="indexf in productdata.feature" :key="indexf" class="swiper-item">
						<view class="overviewgallery">
							<image :src="'../../static/productimg/'+productdata.pid+'_feature_'+(indexf+1)+'.jpg'" mode="aspectFill"></image>	
						</view>
					</swiper-item>
				</swiper>
				<view class="swiper-dots">
					<text class="num">{{current+1}}</text>
					<text class="sign">/</text>
					<text class="num">{{productdata.feature}}</text>
				</view>
				<view class="sliderbutton">
					<text @click="prev" class="uni-icon uni-icon-arrowleft"></text>
					<text @click="next" class="uni-icon uni-icon-arrowright"></text>
				</view>
			</view>
			<view class="productimg" v-else>
				<image :src="'../../static/productimg/'+productdata.pid+'_feature_1.jpg'" mode="aspectFill"></image>
			</view>
		</view>
		<view id="spectable" v-if="productdata.spectable!='no-spec'">
			<view class="title">
				产品参数
			</view>
			<parser :html="productdata.spectable" :tag-style="tagStyle"  class="specttable"></parser>
			<!-- <rich-text class="specttable" :nodes="productdata.spectable"></rich-text> -->
		</view>
		<view id="related">
			<view class="title">
				相关联产品
			</view>
			
			<view class="product-list">
				<product-item :level2id="proInfo.subcategory" v-for="(product,indexr) in productlist" :key="product[1]" :productid="product[1]" :productname="product[0].pname" v-if="indexr<loadmore" :CatchPhrase="product[0].catch" :producturl="product[0].pid" ></product-item>
			</view>
			<uni-load-more :status="status" :color="loadingcolor" :content-text="contentText" v-if="loading"/>
		</view>
		<srorll-top-com :scrollTop="scrollTop"></srorll-top-com>
	</view>
</template>

<script>
	import productItem from '@/components/product-item/product-item.vue'
	import srorllTopCom from '@/components/scrollTopCom/scrollTopCom.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import parser from "@/components/jyf-Parser/index"
	export default {
		components:{
			productItem,
			srorllTopCom,
			uniLoadMore,
			parser
		},
		data() {
			return {
				proInfo:{},
				productdata:{},
				overimg:1,
				productlist:[],
				backlevel:0,
				current:0,
				loadmore:3,
				loading:false,
				status:'',
				loadingcolor:'#006B69',
				scrollTop:0,
				duration:1000,
				contentText: {
					contentrefresh: '加载中...',
					contentnomore: '没有更多产品'
				},
				tagStyle:{
				    table: 'border-collapse: collapse;border-spacing: 0;border: 1px solid #ccc;width: 100%;',
				    th: 'border: 1px solid #ccc;background-color: #f5f5f5;padding: 10px;vertical-align: top;font-size: 14px;line-height: 17px;text-align: left;',
				    td: 'white-space: pre-wrap; word-break: break-all;border: 1px solid #ccc;background-color: #fff;padding: 10px;vertical-align: top;font-size: 14px;line-height: 17px;text-align: left;width: 70%;'
				}
			}
		},
		onLoad(event){
			const loadInfo=event.product;
			try {
				this.proInfo=JSON.parse(decodeURIComponent(loadInfo))
			} catch (error){
				this.proInfo=JSON.parse(loadInfo)
			}
			this.productdata=this.$productlist[this.proInfo.subcategory][this.proInfo.productid]
			this.$productlist[this.proInfo.subcategory].forEach((v,i)=>{
				if(v.pid!=this.productdata.pid){
					this.productlist.push([v,i])
				}
			})
			try {
				this.backlevel = uni.getStorageSync('productlevel');
				// console.log(this.backlevel)
			} catch (e) {
			    // error
			}
		},  
		onReachBottom(){
			//下拉加载更多
			if(this.loadmore<this.productlist.length){
				this.loading=true
				this.status='loading'
				setTimeout(()=>{
					this.loadmore+=12
					
					this.loading=false
				},700)
				
			}else{
				this.loading=true
				this.status='nomore'
				this.loadingcolor="#777777"
			}
		},
        onBackPress(options) {  
            if (options.from === 'navigateBack') {  
                return false;  
            }  
            this.back();  
            return true;  
        },  
		onPageScroll(data){
			this.scrollTop = data.scrollTop;
		},
        methods: {  
            back() {  
				if(this.backlevel>2){
					uni.setStorageSync('productlevel', 1);
					uni.navigateBack({
					    delta: this.backlevel-1  
					}); 
				}else{
					uni.navigateBack({
					    delta: 1
					});
				}
            },
			next(){
				if(this.current == this.productdata.feature - 1){
					this.current = this.current

				}else{
					this.current = this.current + 1
				}
			},
			prev(){
				if(this.current == 0){
					this.current = 0
				}else{
					this.current = this.current - 1
				}
			},
			curIndex(e){
				this.current = e.detail.current
			}
        }, 
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'../search/search'
			})
		}
	}
</script>

<style lang="scss">
	.productpage{
		background: #FFFFFF;
	}
	#overview{
		.swiper{
			height: 300upx;
		}
		.overviewgallery {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-content: center;
		}
		image{
			height: 273upx;
			width: 364upx;
		}
		.productimg{
			text-align: center;
		}
	}
	.productname{
		text-align: center;
		font-size: 24upx;
		margin-top: 24upx;
	}
	#feature{
		margin-top:30upx;
		overflow:hidden;
		.swiper{
			height: 293.75upx;
		}
		.galleryfeature{
			position: relative;
		}
		image{
			width: 750upx;
			height: 293.75upx;
		}
		.swiper-dots{
			display: flex;
			position: absolute;
			right: 20upx;
			bottom: 12upx;
			width: 60upx;
			height: 30upx;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
			background-size: 100% 100%;
			
			.num {
				width: 30upx;
				height: 30upx;
				border-radius: 50px;
				font-size: 18upx;
				color: #fff;
				text-align: center;
				line-height: 30upx;
			}
			
			.sign {
				position: absolute;
				top: 0;
				left: 50%;
				line-height: 30upx;
				font-size: 12upx;
				color: #fff;
				transform: translateX(-50%);
			}
		}
		.sliderbutton{
			position:absolute;
			top:38%;
			width:100%;
			z-index:20;
			height:0;
			.uni-icon{
				background: rgba(164, 164, 164,0.7);
				// opacity: 0.7;
				height: 50upx;
				line-height: 50upx;
				width: 50upx;
				text-align: center;
				border-radius: 52upx;
				color: #ffffff;
			}
			.uni-icon-arrowleft{
				float: left;
				transform: translateX(-40%);
			}
			.uni-icon-arrowright{
				float: right;
				transform: translateX(40%);
			}
		}
	}
	#spectable{
		margin:50upx 20upx 0;
		.title{
			font-size: 24upx;
			margin-bottom:20upx;
		}
		 // /deep/ table{
			//  border-collapse: collapse;
			//  border-spacing: 0;
			//  border: 1px solid #ccc;
			//  width: 100%;
		 // }
		 // /deep/ table th{
			//  border: 1px solid #ccc;
			//  background-color: #f5f5f5;
			//  padding: 10px;
			//  vertical-align: top;
			//  font-size: 14px;
			//  line-height: 17px;
			//  text-align: left;
		 // }
		 // /deep/ table td.tb-blk{
			//  white-space:pre-wrap;
			//  word-break: break-all;
			//  border: 1px solid #ccc;
			//  background-color: #fff;
			//  padding: 10px;
			//  vertical-align: top;
			//  font-size: 14px;
			//  line-height: 17px;
			//  text-align: left;
			//  width: 70%;
		 // }
	}
	#related{
		margin:30upx 0 0;
		background:#f6f6f6;
		padding: 32upx 20upx 0;
		.title{
			font-size: 24upx;
		}
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		margin-top: 25upx;
	}
	.scroll-view-item_H {
		display: inline-block;
	}
	.uni-icon-arrowleft:before{
		content: '\E582';
	}
	.uni-icon-arrowright:before{
		content: '\E583';
	}
	.product-list{
		display: flex;
		flex-wrap: wrap;
		margin:20upx -5upx;
	}
	
</style>
