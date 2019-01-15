<template>
  <div class="main">
   <router-view></router-view>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="20"
    >
      <li v-for="item in container" :key="item.item_id"
       @click="gotodetails(item.item_id,item.type)">
        <div class="con">
          <img v-lazy="item.image"/>
          <h4>{{item.name}}</h4>
        </div>
        <div class="price">
          <span>¥{{item.jumei_price}}</span>
          <span>¥{{item.market_price}}</span>
          <p>{{item.product_desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "mint-ui";
import { InfiniteScroll } from "mint-ui";
import lazyload from "vue-lazyload";
Vue.use(InfiniteScroll);
export default {
  name: "Main",
  data() {
    return {
      container: [],
      loading: false
    };
  },
  methods: {
    loadMore() {
      // this.loading = true;
      let timer = setTimeout(() => {
        let last = this.container[this.container.length - 1];
        for (let i = 1; i <= 3; i++) {
          this.container.push(last + i);
        }
      }, 2500);
      //  console.log(this.container.length)
      if (this.container.length >= 23) {
        // console.log(888);
        Toast({
          message: "到底啦",
          position: "bottom",
          duration: 1500
        });
        clearInterval(timer);
        this.loading = true;
      }
    },
    gotodetails(idx,type){
      // console.log(idx,type)
      this.$router.push({path:`/details/${idx}/${type}/`})
    }
  },
  created() {
    let toast = Toast({
      message: "数据加载中....",
      // duration: 2000,
      iconClass: "fa fa-cog fa-spin"
    });
    this.$axios
      .get("http://localhost:2000/static/data.json")
      .then(res => {
        // console.log(res.data.item_list);
        this.container = res.data.item_list;
        toast.close();
      })
      .catch(error => {
        toast.close();
        console.log("error", error);
      });
    // this.loadMore();
  }
};
</script>

<style scoped lang="scss">
@import "../../../style/base.scss";
.main {
  position: absolute;
  top: rem(100px);
  left: 0;
  right: 0;
  color: inherit;
  font-size: rem(12px);
  overflow: hidden;
  ul {
    li {
      position:relative;
      .con {
        display: flex;
        justify-content: flex-start;
        position: relative;
        padding: rem(10px);
        img {
          z-index: 11;
        }
        h4 {
          z-index: 21;
          position: absolute;
          left: 50%;
          top: 10%;
        }
      }
      .price {
        z-index:21;
        position: absolute;
        right:32%;
        top:55%;
        :first-child{
          color:#fe4070;
          font-size:rem(24px);
        }
        :nth-child(2){
          text-decoration:line-through;
        }
      }
    }
  }
}
</style>