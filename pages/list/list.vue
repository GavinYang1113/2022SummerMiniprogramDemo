<template>
	<view class="content">
		<list-item v-for="(item,index) in image_list" :key="index" v-bind:number="item.number"
			@click.native="redirect(index)"></list-item>
	</view>
</template>



<script>
	export default {
		data() {
			return {
				image_list: []
			}
		},
		onLoad() {
			for (var i = 0; i < 10; i++) {
				var dict = {
					"src": "../../static/logo.png",
					"number": i
				}
				dict.number = i;
				this.image_list.push(dict);
			}
		},
		methods: {
			redirect(index) {
				//通过全局变量传参
				getApp().globalData.detail_id = index;
				uni.navigateTo({
					url: '../../pages/detail/detail',
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 30rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
</style>
