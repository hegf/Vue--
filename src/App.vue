<template>
  <div id="app">
    <router-view/>
    <div>
      <mt-tabbar v-model="selected">
        <mt-tab-item
          :id="tab.name"
          v-for="tab in tabs"
          :key="tab.name"
          @click.native="toggle(tab.path)"
        >
          <myicons :type="tab.icon"></myicons>
          {{tab.text}}
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
// 引入字体图标插件
import Vue from "vue";
import myicons from "./assets/icon.js";
Vue.use(myicons);

export default {
  name: "App",
  data() {
    return {
      tabs: [
        {
          text: "首页",
          icon: "home",
          path: "/home",
          name: "home"
        },
        {
          text: "拼团",
          icon: "organization",
          path: "/tuan",
          name: "tuan"
        },
        {
          text: "购物车",
          icon: "briefcase",
          path: "/cart",
          name: "cart"
        },
        {
          text: "我的",
          icon: "person",
          path: "/mime",
          name: "mime"
        }
      ],
      selected: "home"
    };
  },
  methods: {
    toggle(path) {
      this.$router.push({ path: path });}
    
  }
};
</script>

<style lang="scss">
@import "./style/base.scss";
#app {
  width: 100%;
  height: auto;
  overflow: hidden;
  .mint-tabbar {
    z-index:9999;
    position: fixed;
    bottom: 0;
    .is-selected {
      color: #58bc58;
      svg {
        color: #58bc58;
        fill: #948abe;
      }
      .mint-tab-item-label {
        color: #58bc58;
      }
    }
  }
}
</style>
