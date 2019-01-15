<template>
    <div :class="{scroll:gun}">
      <div class="nav">
        <p
          v-for="(item,index) in nav"
          :key="index" 
          @click="toggle(index);goto(item.path,index)"
          :class="{active:index==active}"
        >{{item.text}}</p>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Homenav",
  data() {
    return {
      nav: [
        {
          text: "首页",
          path: "shouye",
          name: "Shouye"
        },
        {
          text: "急速免税店",
          path: "store",
          name: "Store"
        },
        {
          text: "母婴",
          path: "muying",
          name: "Muying"
        },
        {
          text: "轻奢",
          path: "qinshe",
          name: "qinshe"
        },
        {
          text: "名品特卖",
          path: "sale",
          name: "Sale"
        }
      ],
      selected: "",
      active: 0,
      gun: false
    };
  },
  components: {},
  methods: {
    // 点击高亮
    toggle(index) {
      this.active = index;
      this.index+1;
      this.$router.push('/home');
    },
    goto(path,idx) {
      if(idx==0){
        this.path = "store"
      }else{
        this.$router.push({ path: "/homenav/" + path });
      }
    }
    // 吸顶菜单
    // handleScroll(){
    //   if(window.scrollY>55){
    //      this.gun=true
    //   //  body滚动的距离 + window可视区域高度 = 滚动过的距离，到底了
    //     let bodyScroll = document.documentElement.scrollTop;
    //     let windowHeight = document.documentElement.clientHeight;
    //     let scrollTop = document.documentElement.scrollHeight;
    //     // if(bodyScroll+windowHeight == scrollTop){

    //     //   }

    //   }
    // }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 55) {
        this.gun = true;
      }
      //  body滚动的距离 + window可视区域高度 = 文本高度，到底了
      // let bodyScroll = document.documentElement.scrollTop;
      // let windowHeight = document.documentElement.clientHeight;
      // let scrollTop = document.documentElement.scrollHeight;
      var scrollFunc = e => {
        e = e || window.event;
        if (e.wheelDelta) {
          if (e.wheelDelta > 0) {
            // console.log('滑轮向上滚动')
            this.gun = false;
          }
          if (e.wheelDelta < 0) {
            // console.log("滑轮向下滚动");onmousewheel
            this.gun = true;
          }
        }
      };
      window.onscroll = document.onmousewheel = scrollFunc;
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../../style/base.scss";
.nav {
  position: fixed;
  z-index: 22;
  background: #fdfdfd;
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: middle;
  -ms-flex-align: middle;
  align-items: middle;
  overflow: auto;
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
// .mint-navbar {
//   border-bottom: 1px solid #ccc;
//   .mint-tab-item {
//     .mint-tab-item-label {
//       font-size: rem(14px);
//     }
//   }
// }
// 吸顶菜单
.scroll {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>