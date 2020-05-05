// 入口文件
import Vue from 'vue';

// 导入根组件(需要安装相关的第三方loder)
import app from './App.vue'

// 导入MUI的样式
import '../lib/mui/css/mui.min.css'

// 按需引入mint-ui的组件
import { Header, Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(Lazyload);
// 1,1 导入路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由模块
Vue.use(VueRouter);
// 1.3 导入自己的router.js路由模块
import router from './router.js';

// 导入vue-resource
// import VueResource from ('vue-resource')
// Vue.use(VueResource)

var vm = new Vue({
	el:'#app',
	data:{
		msg: '1234',
	},
	render: c => c(app),
	router
})
