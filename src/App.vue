<template>
	<div class="app-container">

		<!-- 顶部Header区域 -->
		<mt-header fixed title="固定在顶部"></mt-header>

		<!-- 中间的路由router-view区域 -->
		<router-view></router-view>
		
		<!-- 底部Tabbaar区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>

<style lang="css" scoped="scoped">
	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
	}
</style>
