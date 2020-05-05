<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr />
		<textarea placeholder="请输入BB的内容(最多B120个字)" maxlength="120" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="sendComment">BB</mt-button>
		
		<div class="cmt-list">
			
			<div class="cmt-item" v-for="(item, index) in comments">
				<!-- 评论用户 -->
				<div class="cmt-title">
					第{{index}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.time}}
				</div>
				<!-- 评论内容 -->
				<div class="cmt-body">
					{{item.comment}}
				</div>
			</div>
			
		</div>
		
		<mt-button type="danger" size="large" plain @click="getMore" >加载BB</mt-button>
	</div>
</template>

<script>
	import commentitem from '../../data/CommentData.js'
	import { Toast } from 'mint-ui'
	export default {
		data() {
			return{
				comments:[],
				msg: ''
			}
		},
		created() {
			this.getComments()
		},
		methods:{
			getComments() {
				for(let i = 0; i < 10; i ++) {
					this.comments.push(commentitem)
				}
			},
			getMore () {
				this.getComments()
			},
			sendComment () {
				if(this.msg == '') {
					Toast('BB内容不能为空');
					return;
				}
				let newComment = {
					username: '测试2',
					time: new Date(),
					comment: this.msg
				}
				this.comments.unshift(newComment)
			}
		}
	}
</script>

<style>
	.cmt-container h3 {
		font-size: 18px;
	}
	.cmt-container textarea {
		font-size: 14px;
		height: 85px;
	}
	.cmt-list {
		margin: 5px 0;
	}
	.cmt-item {
		font-size: 13px;
	}
	.cmt-title {
		background-color: #ccc;
		line-height: 30px;
	}
	.cmt-body {
		line-height: 30px;
		text-indent: 2em;
	}
</style>
