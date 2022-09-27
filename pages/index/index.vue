<template>
	<view class="content">
		<image class="logo" style="margin: 35rpx" :src="src">
		</image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "/static/logo.png ",
				title: 'Hello Tsinghua'
			}
		},
		onLoad() {

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
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
