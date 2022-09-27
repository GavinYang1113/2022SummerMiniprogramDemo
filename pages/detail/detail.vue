<template>
	<view class="text-area">
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "detal page id: "
			}
		},
		onReady() {
			// 通过全局变量 跨页面传参
			this.$set(this.$data, 'title', this.title + getApp().globalData.detail_id);
		},
		methods: {


		}
	}
</script>

<style>
	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		margin-top: 300rpx;
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
