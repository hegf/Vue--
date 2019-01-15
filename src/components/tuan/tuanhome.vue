<template>
  <div class="tuan">
    <ul class="ul">
      <li v-for="(item,index) in list" :key="index">
        <div class="img">
          <span>{{item.buyer_number_text}}</span>
          <img v-lazy="item.image">
        </div>
        <div class="tag">
          <span>{{item.group_name_tag}}</span>
          <span>{{item.short_name}}</span>
        </div>
        <div class="price">
          <div>
            <span>{{item.jumei_price}}</span>
            <br>
            <span>{{item.single_price}}</span>
          </div>
          <span>加入购物车</span>
        </div>
      </li>
    </ul>
    </div>
</template>  

<script>
import { InfiniteScroll } from "mint-ui";
import { Toast } from "mint-ui";
import lazyload from "vue-lazyload";
export default {
  directives: { InfiniteScroll },
  name: "Tuan",
  data() {
    return {
      list: [],
      loading:false,
      page: 0,
      per_page: 20,

    };
  },
  methods: {
    // 获取数据 http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20.

    // 无限加载
    // 获取数据
    getdate() {
      let toast = Toast({
        message: "数据加载ing",
        iconClass: "fa fa-cog fa-spin",
        duration: -1
      });
      this.$axios
        //   每页20条 per_page：20，更改无效
        .get(`gpi/tab_list?&tab=coutuan_home&page=${this.page}`)
        .then(res => {
           console.log(res.data.data)
          if (res.data.data.length == 0) {
            Toast({
              message: "没有更多数据了",
              duration: 4000
            });
             toast.close();
            return false;
          } else {
            this.list = this.list.concat(res.data.data);
            toast.close();
          }
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    // 头部标签切换
    toggle(index) {
      this.active = index;
    },

    goto(path){
      // console.log(path)
      this.$router.push({path:'/tuan/'+path})
    }
  },
  created() {
    this.getdate() ;
   
  window.onscroll = ()=>{
   		//变量scrollTop是滚动条滚动时，距离顶部的距离
   		var scrollTop = document.documentElement.scrollTop;
   		//变量windowHeight是可视区的高度
   		var windowHeight = document.documentElement.clientHeight;
   		//变量scrollHeight是滚动条的总高度
   		var scrollHeight = document.documentElement.scrollHeight;
               //滚动条到底部的条件
               if(scrollTop+windowHeight==scrollHeight){
                //写后台加载数据的函数
                  this.page = this.page+1;
                  this.getdate()
              }   
        
   }
  },
  watch: {
      list:function(){
        // console.log(this.list)
      },
      
  }
  
};
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.tuan {
  width: 100%;
  overflow: auto;
  font-family: Arial;
  .ul {
    margin-top: rem(55px);
    li {
      position: relative;
      font-size: rem(12px);
      border-bottom:6px solid #ddd;
      .img {
        text-align: center;
        image[lazy=loading] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
        :first-child {
          position: absolute;
          top: 50%;
          left: 0;
          padding: rem(2px);
          background: rgba(251, 251, 251, 0.8);
          border: 1px solid #eee;
          border-top-right-radius: 1.5625rem;
          border-bottom-right-radius: 1.5625rem;
          color: #666;
        }
        img {
          width: rem(150px);
          height: rem(150px);
        }
      }
      .tag {
        font-size: 14px;
        max-height: 34px;
        line-height: 18px;
        padding: 0 12px;
        margin-top: 10px;
        color: #424242;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        :first-child {
          color: #fe4070;
        }
      }
      .price {
        display: flex;
        justify-content: space-between;
        padding: rem(12px) rem(12px);
        align-items: center;
        :first-child :first-child {
          font-size: 18px;
          color: #fe4070;
          font-family: Arial;
          padding: rem(3px);
        }
        :nth-child(2) {
        border: 0.0625rem solid #fe4070;
        display:block;
        width:rem(90px);
        height:rem(30px);
        border-radius: rem(25px);
        background: #fe4070;
        text-align: center;
        line-height:rem(30px);
        font-size:rem(14px);
        color:#fff;
        }
      }
    }
  }
}
</style>