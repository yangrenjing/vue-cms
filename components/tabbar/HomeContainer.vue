<template>
	<div>
		<!-- 轮播图区域 -->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in lunbotuList" :key="item">
				<img :src="item" />
			</mt-swipe-item>
		</mt-swipe>

		<!-- 九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">新闻资讯</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/photolist">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">图片分享</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">商品购买</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">留言反馈</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">视频专区</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">联系我们</div>
				</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lunbotuList: [],
			}
		},
		created() {
			this.getLunbotu()
		},
		methods: {
			getLunbotu() {
				this.lunbotuList.push(
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=393483733,3567509314&fm=26&gp=0.jpg')
				this.lunbotuList.push(
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4062570393,2650077188&fm=26&gp=0.jpg')
				this.lunbotuList.push(
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615463161,702304570&fm=26&gp=0.jpg')
			}
		}
	}
</script>

<style lang="css" scoped="scoped">
	.mint-swipe {
		height: 200px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border: none;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: 0;
	}
</style>
