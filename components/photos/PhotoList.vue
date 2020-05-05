<template>
	<div>
		<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in categorys">
						{{ item.name }}
					</a>
				</div>
			</div>

		</div>
		
		<!-- 图片列表区域 -->
		<ul class="photo-list">
		  <router-link v-for="item in imgs" to="/home/photo/1" tag="li">
		    <img v-lazy="item.imgUrl">
			<div class="info">
				<h1 class="info-title">affa </h1>
				<div class="info-body">addddddddhak和卡拉九点零akljf;laj 亨利卡据了解拉拉决定了啊的剑法；啊空间的发掘哦i乌尔克鲁尼叫阿里的剑法分骄傲了阿</div>
			</div>
		  </router-link>
		</ul>
	</div>
</template>

<script>
	// 导入mui的js文件
	import mui from '../../lib/mui/js/mui.min.js'
	
	//  数据js
	import categoryList, {imgList} from '../../data/PhotoData.js'

	export default {
		data() {
			return {
				categorys: [],
				imgs:[]
			}
		},
		mounted() {
			//  初始化滑动控件
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		created() {
			this.getAllCategoty()
			this.getAllPhoto()
		},
		methods: {
			getAllCategoty () {
				this.categorys = categoryList;
			},
			getAllPhoto () {
				this.imgs = imgList
				console.log(imgList)
			}
		}
	}
</script>

<style >
	* {
		touch-action: pan-y;
	}
	.photo-list {
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
	}
	.photo-list li {
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 6px #999;
		position: relative;
	}
	img {
	  width: 100%;
	  height: 200px;
	  margin: auto;
	}
	
	.info {
		color: white;
		text-align: left;
		position: absolute;
		bottom: 0;
		background-color: rgba(0,0,0,0.4);
		max-height: 50px;
	}
	
	.info-title{
		font-size: 14px;
	}
	
	.info-body {
		font-size: 13px;
	}
</style>
