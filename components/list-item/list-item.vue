<template>
	<view class="item">
		<image class="itemImage" src="../../static/logo.png">
		</image>
		<view class="textArea">
			<text>Number: </text>
			<text>{{number}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "listItem",
		props: {
			number: Number
		},
	}
</script>

<style>
	.textArea {
		font-size: 40rpx;
		margin-left: 30rpx;
	}

	.item {
		width: 500upx;
		height: 130upx;
		border-radius: 20upx;
		background-color: #E8E8E8;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin: auto;
		margin-bottom: 30rpx;
	}

	.itemImage {
		height: 100rpx;
		width: 100rpx;
	}
</style>
