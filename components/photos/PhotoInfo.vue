<template>
	<div class="photoinfo-container">
		<h3>图片标题</h3>
		<p class="subtitle">
			<span>发表时间:2020-10-08 12:00:00</span>
			<span>浏览：20</span>
		</p>
		<hr />
		
		<!-- 缩略图区域 -->
		
		
		<!-- 图片内容区域 -->
		<div class="content">和开发接口连接；啊立刻搭街坊咖啡机懊恼安静的弗兰克才能了；奥克兰的房间啊翻了肯定就发打卡就空间的链接哦i为u人l飞机垃圾
		和发掘的法拉家纺利空打击啊；骄傲加拉案件；</div>
		<!-- 评论区 -->
		<comment></comment>
	</div>
</template>

<script>
	import comment from '../subcomponents/comment.vue'
	export default {
		data () {
			return {}
		},
		methods:{
			
		},
		components:{
			comment
		}
	}
</script>

<style>
	.photoinfo-container {
		padding: 3px;
	}
	.photoinfo-container h3 {
		color: #26A2FF;
		font-size: 15px;
		text-align: center;
		margin: 15px 0;
	}
	
	.photoinfo-container .subtitle {
		display: flex;
		justify-content: space-between;
		font-size: 13px;
	}
	
	.content {
		font-size: 13px;
		line-height: 30px;
	}
</style>
