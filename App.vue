<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		// globalData是简单的全局变量，如果使用状态管理，请使用vuex（main.js中定义）
		globalData: {
			detail_id: "0"
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
