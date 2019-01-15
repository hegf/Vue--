<template>
  <div class="tuan" slot="nav">
    <div class="nav">
      <p
        v-for="(item,index) in arr"
        :key="index"
        @click="toggle(index),goto(item.path)"
        :class="{active:index==active}"
      >{{item.text}}</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Tuan",
  data() {
    return {
      active: 0,
      arr: [
        { text: "推荐", name: "Tuan", path: "tuan" },
        { text: "母婴健康", name: "Myjk", path: "myjk" },
        { text: "家居", name: "Jiaju", path: "jiaju" },
        { text: "美妆", name: "Mz", path: "mz" },
        { text: "饰品装饰", name: "Shipin", path: "shipin" },
        { text: "礼品包箱", name: "Lpxb", path: "lpxb" },
        { text: "鞋类", name: "Xiezi", path: "xiezi" },
        { text: "内衣", name: "Neiyi", path: "neiyi" },
        { text: "食品保健", name: "Shipin", path: "shipin" },
        { text: "女装", name: "Nvzhua", path: "nvzhua" }
      ],
      page: 0,
      per_page: 20
    };
  },
  methods: {
    // 头部标签切换
    toggle(index) {
      this.active = index;
    },

    goto(path) {
      // console.log(path);
      this.$router.push({ path: "/tuan/" + path });
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../style/base.scss";
.tuan {
  width: 100%;
  overflow: auto;
  font-family: Arial;
  .nav {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    background: #eee;
    padding: 0 rem(10px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
    // overflow-x:visible;
    p {
      text-align: center;
      font-size: rem(16px);
      -ms-flex-negative: 0;
      flex-shrink: 0;
      padding: rem(10px);
      margin: rem(5px);
    }
    .active {
      color: #fe4070;
      border-bottom: 2px solid#fe4070;
    }
  }
}
</style>
