<template>
	<view>
		<view class="main-title">
			{{categoryTitle}}
		</view>
		<view class="hasdata" v-if="productlist.length>0">
			<view class="product-list">
				<product-item :level2id="categoryid" v-for="(product,index) in productlist" :key="index" :productid="index" :producturl="product.pid" :productname="product.pname" v-if="index<loadmore" :CatchPhrase="product.catch"></product-item>
			</view>
			<uni-load-more :status="status" :color="loadingcolor" :content-text="contentText" v-if="loading"/>
		</view>
		<view v-else class="no-data">暂无产品，敬请期待。</view>
		<srorll-top-com :scrollTop="scrollTop"></srorll-top-com>
	</view>
</template>

<script>
	import productItem from '@/components/product-item/product-item.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import srorllTopCom from '@/components/scrollTopCom/scrollTopCom.vue'
	export default {
		components:{
			productItem,
			srorllTopCom,
			uniLoadMore
		},
		data() {
			return {
				productlist:{},
				catlist:{},
				categoryTitle:"",
				categoryid:"",
				loadmore:12,
				loading:false,
				status:'',
				loadingcolor:'#006B69',
				scrollTop:0,
				contentText: {
					contentrefresh: '加载中...',
					contentnomore: '没有更多产品'
				}
			}
		},
		methods: {
			
		},
		onPageScroll(data){
			this.scrollTop = data.scrollTop;
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'../search/search'
			})
		},
		onReachBottom(){
			//下拉加载更多
			
			if(this.loadmore<Object.keys(this.productlist).length){
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
				// setTimeout(()=>{
				// 	this.loading=false
				// },3000)
			}
		},
		onShow(){
			uni.setStorageSync('productlevel', 0);
		},
		onLoad(event) {
			const loadInfo=event.productlist || event.payload;
			try {
				this.catlist = JSON.parse(decodeURIComponent(loadInfo));
			} catch (error) {
				this.catlist = JSON.parse(loadInfo);
			}
			this.categoryTitle=this.catlist.subcategoryName
			this.categoryid=this.catlist.subcategory
			this.productlist=this.$productlist[this.categoryid]
		}
	}
</script>

<style>
	.main-title {
		text-align: center;
		padding-top: 40upx;
		margin: 0 auto 35upx;
		font-size: 24upx;
		letter-spacing: 2upx;
		color: #333333;
	}
	.product-list{
		display: flex;
		flex-wrap: wrap;
		margin:0 15upx 20upx;
	}
	.no-data{
		margin: 0 15px 20px;
		font-size: 16upx;
	}
</style>
