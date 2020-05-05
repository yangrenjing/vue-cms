<template>
	<div class="newsinfo-containers">
		<h3 class="title">
			新闻详情 --- {{ id}}
		</h3>
		<p class="subtitle">
			<span>发表时间：{{ newsinfo.time }}</span>
			<span>浏览：{{ newsinfo.readTimes }}</span>
		</p>
		<hr />
		<!-- 文章内容 -->
		<div class="content" v-html="newsinfo.content"></div>
		
		<!-- 评论区域 -->
		<comment-box></comment-box>
	</div>
</template>

<script>
	import news from '../../data/news.js'
	import Comment from '../subcomponents/comment.vue' // 评论组件
	export default {
		data() {
			return {
				id: this.$route.params.id,
				newsinfo: {}
			};
		},
		created() {
			this.getNewsInfo() 
		},
		methods:{
			getNewsInfo() {
				for (let i = 0; i < news.length; i ++ ) {
					if(news[i].id == this.id) {
						this.newsinfo = news[i]
					}
				}
			}
		},
		components:{
			'comment-box': Comment
		}
		
	}
</script>

<style>
	.newsinfo-containers {
		padding: 0 4px;
	}
	
	.newsinfo-containers .title {
		font-size: 16px;
		text-align: center;
		margin: 15px 0;
		color: red;
	}
	.newsinfo-containers .subtitle {
		font-size: 14px;
		color: #0000FE;
		display: flex;
		justify-content: space-between;
	}
</style>
