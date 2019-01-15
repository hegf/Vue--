<template>
  <header>
    <div class="header">
      <!-- <router-link to="/Ser" tag="div"> -->
        <div class="search" @click="gosearch">
          <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png">
          <span>搜索商品 分类 功效</span>
        </div>
      <!-- </router-link> -->
      <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" class="slider" @click="navShow">
    </div>
    <Slider :show='isShow'></Slider>
    <!-- <router-view></router-view> -->
  </header>
  
</template>

<script>
import Slider from "./slider.vue";

export default {
  name: "Search",
  data() {
    return {
      isShow:false
    };
  },
  methods:{
     gosearch(){
      this.$router.push({path:'/ser'})
    },
    navShow(){
      this.isShow=!this.isShow
    }
  },
  components: {Slider}
};
</script>

<style lang="scss" scoped>
@import "../../../style/base.scss";
.header {
  display: flex;
  width: 100%;
  height: rem(45px);
  font-size: rem(14px);
  justify-content: flex-end;
  cursor: pointer;
  .search {
    width: rem(300px);
    background: #eee;
    line-height: rem(45px);
    border-radius: rem(10px);
    img {
      vertical-align: middle;
    }
  }
  .slider {
    height: rem(25px);
    margin-left: rem(10px);
    margin-top: rem(8px);
  }
}
</style>