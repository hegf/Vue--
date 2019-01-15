import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入路由组件

// home页
import Home from '../components/home/home.vue';
  import Search from '../components/home/header/search.vue';
    import Ser from '../components/home/header/ser.vue';
    import Slider from '../components/home/header/slider.vue';
  import Details from '../components/home/container/details.vue';

  import Main from '../components/home/container/main.vue';
// homenav
  import Homenav from '../components/home/homenav/homenav.vue';
  // import Shouye from '../components/home/homenav/shouye.vue';
  import Muying from '../components/home/homenav/muying.vue';
  import Qinshe from '../components/home/homenav/qinshe.vue';
  import Sale from '../components/home/homenav/sale.vue';
  import Store from '../components/home/homenav/store.vue';

// tuan页
import Tuan from '../components/tuan/tuan.vue';
import Tuanhome from '../components/tuan/tuanhome.vue';
import Food from '../components/tuan/food.vue';
import Jiaju from '../components/tuan/Jiaju.vue';
import Lpxb from '../components/tuan/Lpxb.vue';
import Myjk from '../components/tuan/myjk.vue';
import Mz from '../components/tuan/mz.vue';
import Neiyi from '../components/tuan/neiyi.vue';
import Nvzhua from '../components/tuan/nvzhua.vue';
import Shipin from '../components/tuan/shipin.vue';
import Xiezi from '../components/tuan/xiezi.vue';


// cart页
import Cart from '../components/cart/cart.vue';

// mime页
import Mime from '../components/mime/mime.vue';
import Login from '../components/mime/login.vue';
import Register from '../components/mime/register.vue';


const routes =[
        {path:'/',redirect:{path:'/home'}},
        {
          name:'Home',
          path:'/home',
          component:Home
        },
        {
          name:'Search',
          path:'/search',
          component:Search
        },
        {
          name:'Ser',
          path:'/ser',
          component:Ser
        },
        {
          name:'Slider',
          path:'/slider',
          component:Slider
        },

        {
          name:'Main',
          path:'/main',
          component:Main
        },
        {
          name:'Homenav',
          path:'/homenav',
          component:Homenav,
          children:[
            // {path:'/',redirect:'/muying'},
            {name:'Shouye',path:'shouye',component:Home},
            {name:'Muying',path:'muying',component:Muying},
            {name:'Qinshe',path:'qinshe',component:Qinshe},
            {name:'Sale',path:'sale',component:Sale},
            {name:'Store',path:'store',component:Store},
        ]
        },

        // 详情页,动态路由传参
        {
          path:'/details/:id/:type',
          name:'Details',
          component:Details
        },

        // tuan页
        {
            name:'Tuan',
            path:'/tuan',
            component: Tuan,
            children:[
              {path:'/',redirect:{path:'/tuanhome'}},
              {path:'/tuan/tuan',component:Tuanhome},
              {name:'Tuanhome',path:'/tuanhome',component:Tuanhome},
              {name:'Food',path:'food',component:Food},
              {name:'Jiaju',path:'jiaju',component:Jiaju},
              {name:'Lpxb',path:'lpxb',component:Lpxb},
              {name:'Myjk',path:'myjk',component:Myjk},
              {name:'Mz',path:'mz',component:Mz},
              {name:'Neiyi',path:'neiyi',component:Neiyi},
              {name:'Nvzhua',path:'nvzhua',component:Nvzhua},
              {name:'Shipin',path:'shipin',component:Shipin},
              {name:'Xiezi',path:'xiezi',component:Xiezi}
          ]
          },
          {
            name:'Cart',
            path:'/cart',
            component: Cart,
            meta:{isLogin:true}
          },
          {
            name:'Mime',
            path:'/mime',
            component: Mime,
          },
          {path:'/login',name:'login',component:Login},
          {path:'/register',component:Register},
    ]

// 全局路由守卫
// 在进入某个路由前执行的代码
// router.beforeEach((to,from,next)=>{
  // if(to.meta.isLogin){
  //     next()
  // }else{
  //   next({
  //     path:'/login'
  //   })
  // }
  
// })

let router = new VueRouter({
  routes
});

// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    // 判断是否登录
    if(sessionStorage.getItem('token')){
      // if(router.app.$store.state.token){
          next();
      }else{
          next({
              path:'/login'
          })
      }
  }else{
    // 要进入to路由，必须调用next()方法
      next();
  }
});
export default router;
