<template>
  <div class="details">
    <div class="header">
      <i class="fa fa-chevron-left" aria-hidden="true" @click="back"></i>
      <h5>{{details.short_name}}</h5>
      <i class="fa fa-home" aria-hidden="true" @click="home"></i>
    </div>
    <div class="main">
      <div>
        <img :src="img">
      </div>
      <div class="logo">
        <img v-lazy="details.area_icon_v2">
      </div>
      <div class="price">
        <span>¥{{details.category_id}}</span>
        <span>{{details.price_detail.title}}</span>
      </div>
      <div class="title">
        <span>聚美自营</span>
        <span>{{details.name}}</span>
      </div>
    </div>
    <div class="artic">
      <div class="showimg" v-html="details.description_info.description"></div>
      <!-- <div id="show" v-html="details.description_info.description_images"></div> -->
      <div class="showimg" v-html="details.description_info.description_usage"></div>
    </div>
    <div class="footer">
        <div style=""><i class="fa fa-archive" aria-hidden="true"></i><br/>店铺</div>
        <div @click="goto"><i class="fa fa-shopping-cart" aria-hidden="true"></i><br/>购物车</div>
        <div @click=add>加入购物车</div>
    </div>
  </div>
</template>
<script>
import lazyload from "vue-lazyload";
import { Toast } from 'mint-ui';
export default {
  name: "Details",
  data() {
    return {
      details: {},
      img: ""
    };
  },
  methods: {
    getdate() {
      //http://h5.jumei.com/product/ajaxDynamicDetail?item_id=ht190110p2197962t1&type=global_deal
      this.$axios
        .get(
          `dpi/ajaxStaticDetail?item_id=${this.$route.params.id}&type=${
            this.$route.params.type
          }`
        )
        .then(res => {
          // console.log(res.data.data);
          this.details = res.data.data;
          // 获取图片
          let imgtol = res.data.data.image_url_set.dx_image;
          let imglist = {};
          for (var key in imgtol) {
            imglist[key] = imgtol[key];
          }
          // console.log(imglist[320])
          this.img = imglist[320];
        })
        .catch(err => {
          console.log(err);
        });
    },
    back(){
        this.$router.go(-1)
    },
    home(){
        this.$router.push({path:'/home'})
    },
    goto(){
      this.$router.push({path:'/cart'})
    },

    // 添加购物车
    add(){
      // console.log(this.$store.state.cart.cartlist)
      // let store = this.$store.state.cart.cartlist;
      // let arr = {id:this.$route.params.id,type:this.$route.params.type};
      let id = this.$route.params.id;
      let type = this.$route.params.type;
      let obj1 = {id,type};
      let obj = {};
      Object.assign(obj,obj1)
      
      localStorage.setItem('local',JSON.stringify(obj))
      // this.$store.commit('addcart',arr);//条用mutations里的方法
      Toast({
        message: '添加成功',
        iconClass: 'icon icon-success',
        duration: 3000
      });
    }
  },
  created() {
    // console.log(this.$route.params)
    this.getdate();
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/base.scss";
.details {
  .header {
    display: flex;
    text-align: center;
    padding: 0 rem(15px);
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    font-size: rem(18px);
    color: #333;
    height: rem(44px);
    line-height: rem(44px);
    border-bottom: 1px solid #ccc;
    i {
      font-size: 24px;
      color: #bbb;
    }
  }
  .main {
    width: 100%;
    position: relative;
    text-align: center;
    .logo {
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: rem(80px);
        height: rem(60px);
      }
    }
    .price {
      overflow: hidden;
      :first-child {
        color: red;
        font-size: rem(28px);
        float: left;
        padding: rem(10px);
      }
      :nth-child(2) {
        font-size: rem(16px);
        float: left;
        padding: rem(20px) rem(10px);
      }
    }
    .title {
      // display:flex;
      // flex-wrap: wrap;
      :first-child {
        margin-right: rem(4px);
        font-size: rem(16px);
        padding: rem(1px) rem(8px);
        background: #fe4070;
        border-radius: rem(4px);
        box-sizing: border-box;
        color: #fff;
      }
      :nth-child(2) {
        font-size: rem(18px);
        text-align: left;
        // padding-left:rem(30px);
      }
    }
  }
  .artic {
    #show {
      img {
        width: 375px;
      }
    }
    .showimg {
      color: #fe4070;
      font-size: rem(16px);
      margin-bottom:rem(70px);
    }
  }
  .footer{
      font-size:rem(16px);
      position:fixed;
      bottom:0;
      z-index:10000;
      :first-child{
          i{font-size:rem(24px);}
        float:left;
        text-align: center;
        width: rem(80px);
        padding:1px;
         color: #ccc;
         background:#ffe;
       
        }
      :nth-child(2){
          i{font-size:rem(24px);}
          float:left;
          padding:1px;
          text-align: center;
        width: rem(80px);
        color:#ccc;
         background:#ffe;
      }
      :nth-child(3){
          float:left;
          background:#fe4070;
          text-align: center;
          height:rem(45px);
          line-height:rem(45px);
          width:rem(208px);
          
      }
  }
}
</style>