<template>
	<view>
		<view class="CuWrap">
			<view class="CuItem" v-for="(CuItem,index) in content" :key="index">
				<navigator :url="'../promotion/promotion?cuxiaoid='+CuItem.content" hover-class="none">
					<image :src="CuItem.image" class="CuItemImage"></image>
					<view class="CuItemTitle">{{CuItem.title}}</view>
					<view class="CuItemDate">{{CuItem.date}}</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:[
					{
						"title":"京都和风家展",
						"date":"2019-10-01",
						"image":"../../static/promotion/01.jpg",
						"content":"../../static/promotion/content1.jpg"
					}
				]
			}
		},
		onLoad(){
			
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("promotionlist.css");
</style>
