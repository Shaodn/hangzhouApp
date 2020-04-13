<template>
	<view class="wrap">
		<image :src="content" mode="widthFix" class="conImage"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
			}
		}, 
		onLoad(params){
			this.content = params.cuxiaoid
		},
		methods: {
			
		}
	}
</script>

<style>
	.conImage{
		width: 100%;
	}
	page{
		background: #FFFFFF;
	}
</style>
