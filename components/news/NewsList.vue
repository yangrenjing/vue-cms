<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key='item.id'>
				<router-link :to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img">
					<div class="mui-media-body">
						<h1>{{item.username}}</h1>
						<p class='mui-ellipsis'>
							<span>发表时间：{{item.time}}</span>
							<span>浏览：{{item.readTimes}}</span>
						</p>
					</div>
				</router-link>
			</li>
			
			
		</ul>
	</div>
</template>

<script>
	import news from '../../data/news.js'
	export default {
		data() {
			return {
				newsList:null
			}
		},
		created() {
			this.getNewList()
		},
		methods: {
			getNewList() {
				this.newsList = news
			}
		}
	}
</script>

<style>
	.mui-table-view li h1 {
		font-size: 14px;
	}
	.mui-table-view li .mui-ellipsis {
		font-size: 12px;
		color: #0000FE;
		display: flex;
		justify-content: space-between;
	}
</style>
