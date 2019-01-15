<template>
  <div class="search">
    <i class="fa fa-chevron-left left" aria-hidden="true" @click="back"></i>
    <mt-search 
      cancel-text="取消"
      placeholder="搜索商品  分类  功效"
      autofocus
    ></mt-search>
  </div>
</template>

<script>

// 引入mint-ui搜索
import { Search } from "mint-ui";
export default {
  name: "Ser",
  data() {
    return {
      icon:'list-unordered'
    };
  },
  methods:{
    back(){
      this.$router.push({path:'/'})
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../../style/base.scss';
  .search{
    display:flex;
    height:rem(30px);
    font-size:rem(14px);
    margin-top:rem(16px);
    .mint-search{
      height:rem(60px);
      flex:1;
    }
    .left{font-size:rem(24px);
          color:#bbb;
          padding:5px;
          position: relative;
          }
  }
</style>