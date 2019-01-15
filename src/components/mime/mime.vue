<template>

    <div class="mime"><router-view></router-view>
        <div class="header">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <h5>我的聚美</h5>
            <router-link to='/home' tag='i'><i class="fa fa-home" aria-hidden="true"></i></router-link>
        </div>
        <div class="user">
            <div class="userimg">
                <img src="https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/noportrait.png"/>
            </div>
            <div class="login" v-if="nologin">
                <span @click="gotoreg">注册</span>
                <span>丨</span>
                <span @click="gotologin">登录</span>
            </div>
            <div class="ohlogin" v-if="yeslogin">欢迎您{{login}}</div>
        </div>
        <ul class="ul">
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.url"/>
                <h5>{{item.name}}</h5>
                <i :class="item.icon" aria-hidden="true"></i>
            </li>
        </ul>
    </div>
</template> 

<script>
export default {
    name:"Mime",
    data(){
        return {
            list:[
                {
                    name:'我的订单',
                    url:'https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/myorder.png',
                    icon:'fa fa-angle-right'
                },
                {
                    name:'售后服务',
                    url:'https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/rmaservice.png',
                    icon:'fa fa-angle-right'
                },
                {
                    name:'意见反馈',
                    url:'https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/feedback.png',
                    icon:'fa fa-angle-right'
                },
                {
                    name:'收货地址',
                    url:'https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/address.png',
                    icon:'fa fa-angle-right'
                },
                {
                    name:'退出登录',
                    url:'https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/logout.png',
                    icon:'fa fa-angle-right'
                },
                {
                    name:'400-123-8888',
                    url:'https://f4.jmstatic.com/static_account/dist/v1.0.124522/images/mobile_usercenter/myjumei/tel.png',
                    icon:'fa fa-angle-right'
                }
            ],
            nologin:true,
            yeslogin:false,
            login:'',

        }
    },
    methods: {
        gotoreg(){
            this.$router.push({path:'/register'})
        },
        gotologin(){
            this.$router.push({path:'/login'})
        }
    },
    created(){
        if(sessionStorage.getItem('token') == undefined){
            this.nologin=true;
            this.yeslogin=false;
        }else{
            this.nologin=false;
            this.yeslogin=true;
            this.login = sessionStorage.getItem('token');
        }
        
    }
   
}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
    .mime{
        width:100%;
        .header{
            display:flex;
            padding:rem(10px) rem(10px) rem(0px) rem(10px);
            justify-content: space-between;
            background: #ed145b;
            color: #fff;
            height:rem(38px);
            text-align: center;
            i{
                font-size:rem(32px);
            }
            h5{
                font-size:rem(18px);
                line-height: rem(38px);
            }
        }
        .user{
            padding-top:rem(20px);
            background:#ed145b;
             .userimg{
                 width: 100%;
                 height:rem(60px);
                img{
                    width: rem(60px);
                    height: rem(60px);
                    position: absolute; 
                    left: 50%;
                    margin-left: rem(-(30px));
                }
            }
            .login{
                color:#fff;
                display:flex;
                justify-content: center;
                padding-top:rem(5px);
                padding-bottom:rem(5px);
            }
            .ohlogin{color:#fff;padding-top:30px;text-align: center;}
            span{padding:rem(5px); cursor:pointer}
        }
        .ul {
            padding-top:rem(15px);
            li{
                display:flex;
                height:rem(50px);
                font-size:rem(20px);
                line-height: rem(50px);
                align-items: center;
                img{width:rem(20px);
                    height:rem(20px);
                    padding:rem(0px) rem(10px);
                    }
                i{position: absolute;
                    right:0;
                    padding:rem(0px) rem(15px);
                }

            }
        }
    }
</style>