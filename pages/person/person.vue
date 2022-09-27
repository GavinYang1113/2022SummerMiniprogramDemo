<template>
	<!-- div->view -->
	<view class="content">
		<!--绑定局部变量时需要在属性名前加上':'-->
		<image class="person_background_image" :src="background_image_src" mode="aspectFill">
		</image>

		<!--@click用于设置点击事件-->
		<view class="person_profile_view" @click="getName()">
			<view class="person_avatar_view">
				<image class="avatar_image" :src="avatar_src" mode="aspectFill"></image>
			</view>
			<view class="person_profile_text_view">
				<view class="person_profile_nickname">{{profile_text.nickname}}</view>
				<view class="person_welcome_text_view"><text
						class="person_welcome_text">{{profile_text.welcome_text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>



<script>
	export default {
		// 局部变量
		data() {
			return {
				background_image_src: "../../static/Tsinghua.jpg",
				avatar_src: "../../static/person_profile_icon.png",
				profile_text: {
					nickname: "Nickname",
					welcome_text: "Welcome to the C-Cloud.", //欢迎词
				}
			}
		},
		// 自定义函数
		methods: {
			getName() {
				if (this.profile_text.nickname == "Nickname") {
					this.$api.person_api.getIdentityStr({
							str: "Tsinghua"
						}).then(res => {
							if (res.data == null || res.data == "" || res.data == undefined) {
								console.log("Error,,data is None");
							} else {
								var data = res.data.str;
								this.$set(this.profile_text, 'nickname', data);
							}
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					this.$set(this.profile_text, 'nickname', 'Nickname');
				}
			}
		}

	}
</script>

<style>
	.avatar_image {
		width: 150upx;
		height: 150upx;
		border-radius: 200upx;
		margin: 35upx 45upx 35upx 45upx;

	}

	.person_avatar_view {
		width: 240upx;
		height: 220upx;
	}

	.person_welcome_text_view {
		height: 130upx;
	}

	.person_welcome_text {
		margin-top: 15upx;
		font-size: 25upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-weight: 400;
	}

	.person_profile_nickname {
		font-size: 35upx;
		height: 45upx;
		width: 400upx;
		line-height: 40upx;
		justify-content: center;
		align-items: center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-top: 20upx
	}

	.person_profile_text_view {
		display: flex;
		flex-direction: column;
		margin: 35upx 40upx 20upx 0upx;
		height: 180upx;
		width: 400upx;
	}

	.person_profile_view {
		display: flex;
		flex-direction: row;
		width: 680upx;
		height: 220upx;
		border-radius: 30upx;
		margin-top: -100upx;
		background-color: #FFFFFF;
		box-shadow: 0 0 2upx #4B4B4B;
	}

	.person_background_image {
		width: 750upx;
		height: 500upx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
