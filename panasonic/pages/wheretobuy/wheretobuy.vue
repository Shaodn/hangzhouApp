<template>
	<view>
		<view class="menu">
			<view class="menuItem" v-for="(menuItem,index) in menu"  @click="choose(index)" :class="rindex == index ? 'menuItemGreen' : 'menuItemBlack'" :key="index">
				<text>{{menuItem}}</text> 
			</view>
		</view>
		<view class="buyContentWrap">
			<view class="BuyContent" v-for="(buyconItem , buyIndex) in buyContent" :key="buyIndex" @click="gotoApp($event,buyconItem.schemeLink)" :data-reLink="buyconItem.link" :data-appTip="buyconItem.tip">
				<view class="contentLeft">
					<view class="ConName">{{buyconItem.name}}</view>
					<view class="ConLink">
						<text>{{buyconItem.showlink}}</text>
						<image class="icon" src="../../static/buyImage/icon.gif" mode=""></image>
					</view>
				</view>
				<view class="contentRight">
					<image :src="buyconItem.image" class="buyImage"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rindex:0,
				menu:['天猫旗舰店','京东旗舰店'],
				buyContent:{},
				tryList:{},
				link:'',
				tip:''
			}
		},
		onLoad(){
			this.buyContent = this.$buyList[0].buyContent;
		},
		methods: {
			choose(index){
				this.rindex = index;
				this.buyContent = this.$buyList[index].buyContent;
			},
			gotoApp(e,url){
				var self = this;
				var link_ = e.currentTarget.dataset.relink;
				self.link = link_;
				
				var tip_ = e.currentTarget.dataset.apptip;
				self.tip = tip_;
				// #ifdef APP-PLUS
				plus.runtime.openURL(url, function(res) {  
					uni.showModal({  
						content:'本机未检测到'+self.tip+'客户端，是否打开浏览器访问'+self.tip+'？',  
						success:function(res){  
							if (res.confirm) { 
								plus.runtime.openURL(self.link)  
							}  
						}  
					})  
				});
				// #endif
			}
		}
	}
</script>

<style>
@import url("buy.css");
</style>