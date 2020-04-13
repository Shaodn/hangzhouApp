<template>
	<view>
		<view class="returnTop" @click="returnTop" v-if="scrollTop > 100">
			<image src="../../static/fanhuidingbu.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['scrollTop'],
		methods: {
			returnTop(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
			},
		}
	}
</script>

<style lang="scss">
	.returnTop{
		position: fixed;
		bottom: 100upx;
		right: 0;
		image{
			width: 50upx;
			height: 50upx;
		}
	}
</style>
