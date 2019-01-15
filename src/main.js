
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true;

// 引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

// 引入animate动画
import '../node_modules/animate.css/animate.css';


// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;

// loading效果
// 利用axios拦截器全局设置
// import { Indicator } from 'mint-ui';
// axios.interceptors.request.use(config => {
//     Indicator.open();
//     // console.log('config:',config);
//     config.params.token = '10086';
//     return config
// }, error => {
//     Indicator.close();
    
//     return Promise.reject(error)
// })

// http响应拦截器
// axios.interceptors.response.use(data => {
//     // 响应成功关闭loading
//     Indicator.close();
//     return data
// }, error => {
//     Indicator.close();
//     return Promise.reject(error)
// })


// vuex的使用
import store from './store';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由注入实例
  store,//vuex注入实例
  components: { App },
  template: '<App/>'
})
