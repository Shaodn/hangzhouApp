<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			plus.screen.lockOrientation('portrait-primary');
			try {
			    uni.setStorageSync('catecoryactive', 0);
				uni.setStorageSync('productlevel', 0);
			} catch (e) {
			   console.log(e)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('./static/uni.ttf') format('truetype');
	}
	.uni-icon {
	    font-family: uniicons;
	    font-size: 24px;
	    font-weight: normal;
	    font-style: normal;
	    line-height: 1;
	    display: inline-block;
	    text-decoration: none;
	    -webkit-font-smoothing: antialiased;
	}
	page{
		background: #f6f6f6;
		
		font-family: yahei;
	}
	.uni-page-head-btn{
		display: flex;
	}
</style>
