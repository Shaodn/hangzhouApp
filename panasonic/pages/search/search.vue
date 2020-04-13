<template>
	<view>
		<view v-if="isHistory" class="history-box">
			<view>
				<view class="history-title">
					<text>搜索历史</text>
					<text class="uni-icon uni-icon-trash"  @click="clearSearch" v-if="historyList.length>0"></text>
				</view>
				<view class="history-content">
					<view class="history-item" v-for="(item, index) in historyList" :key="index" @click="searchhistory(item)"> {{ item }}
					</view>
				</view>
			</view>
		</view>
		<view class="history-box" v-else>
			<view class="history-title">
				<text>搜索到{{products.length}}个产品</text>
			</view>
			<view class="hasdata" v-if="products.length>0">
				<view class="product-list">
					<product-item v-for="(product,index) in products" :key="index" :productid="parseInt(product.productid)" :productname="product.productname" :level2id="product.level2id" :CatchPhrase="product.catch" :producturl="product.pid" v-if="index<loadmore" ></product-item>
				</view>
				<uni-load-more :status="status" :color="loadingcolor" :content-text="contentText" v-if="loading"/>
			</view>
			
			<view v-else class="no-data">没有搜索到相关内容</view>
		</view>
	</view>
</template>

<script>
	import search from '@/common/search.js'
	import productItem from '@/components/product-item/product-item.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	export default {
		components:{
			productItem,
			uniLoadMore
		},
		data() {
			return {
				historyList: [],
				isHistory: true,
				products:[],
				loadmore:12,
				loading:false,
				searchtext:'',
				status:'',
				loadingcolor:'#006B69',
				contentText: {
					contentrefresh: '加载中...',
					contentnomore: '没有更多产品'
				}
			}
		},
		onBackPress(options) {
		    if (options.from === 'navigateBack') {  
		        return false;  
		    }  
		    this.back();  
		    return true;  
		}, 
		methods: {
			back() {
				if(this.isHistory){
					uni.navigateBack({
					    delta: 1
					});
				}else{
					this.isHistory=true
				}
			     
			},
			clearSearch() {
				uni.showModal({
					title: '提示',
					content: '是否清理全部搜索历史？该操作不可逆。',
					success: res => {
						if (res.confirm) {
							try {
							    uni.removeStorageSync('searchhistory');
							} catch (e) {
							    // error
							}
							this.historyList=[]
						}
					}
				});
			},
			searchhistory(keyword){
				
				let hisliststore = uni.getStorageSync('searchhistory');
				if (hisliststore == '') {
					this.historyList.push(keyword)
				} else {
					this.historyList = hisliststore
					this.historyList.unshift(keyword)
						
				}
				// 去重
				this.historyList = Array.from(new Set(this.historyList))
				// 就留20条
				if(this.historyList.length>=20){
					this.historyList=this.historyList.slice(0,19)
				}
				uni.setStorage({
					key: 'searchhistory',
					data: this.historyList,
					success: function() {
						console.log('success');
					}
				});
				this.isHistory = false;
				this.products=search.searchkey(keyword)
			}
		},
		onReachBottom(){
			//下拉加载更多
			
			if(this.loadmore<this.products.length){
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
		onLoad(){
			this.isHistory = true
			let loadhistory=uni.getStorageSync('searchhistory')
			if (loadhistory!='') {
				this.historyList = uni.getStorageSync('searchhistory')
			}
			
		},
		onShow(){
			uni.setStorageSync('productlevel', 0);
		}
		,
		onNavigationBarSearchInputConfirmed(e) {
			// console.log(e)
			let text = e.text.trim().replace(/[`~!@#$%^&*()_+<>?:"{},.;[\]]/im,'');
			if (!text) {
		
				uni.showModal({
					title: '提示',
					content: '请输入内容。',
					success: res => {
						if (res.confirm) {}
					}
				});
				return;
				
			} else {
				this.searchhistory(text)
				uni.setStorageSync('productlevel', 0);
			}
		},
		onNavigationBarSearchInputChanged(e){
			// console.log(e.text)
			this.isHistory=true
			this.searchtext=e.text
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				if(this.searchtext==''){
					uni.showModal({
						title: '提示',
						content: '请输入内容。',
						success: res => {
							if (res.confirm) {}
						}
					});
					return;
				}else{
					uni.hideKeyboard()
					this.searchhistory(this.searchtext)
					uni.setStorageSync('productlevel', 0);
				}
				
			}
			
		}
	}
</script>

<style>
.uni-page-head-btn{
	justify-content: center;
}
.uni-page-head-btn{
	width: 80px;
}
.history-title {
	display: flex;
	justify-content: space-between;
	margin: 40upx 20upx 20upx;
	padding-bottom: 0;
	font-size: 18upx;
	font-weight: bold;
}

.uni-icon-trash:before {
	content: '\e401';
}

.history-title .uni-icon {
	font-size: 28upx;
}

.history-content {
	display: flex;
	flex-wrap: wrap;
	margin: 0 10upx;
}

.history-item {
	padding: 10px 40upx;
	border: 1px #f1f1f1 solid;
	background: #E4E4E4;
	border-radius: 50upx;
	font-size: 14upx;
	margin:5upx 10upx;
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
