<template>
  <div class="slider">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="mask" v-show="show" @click="back"></div>
    </transition>

    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <ul v-show="show">
        <li class="search">
          <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png">
          <router-link to="/ser"><span class="ser">搜索商品 分类 功效</span></router-link>
          <span @click="back">返回</span>
        </li>
        <transition
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeInUp">
          <li>
            <div class="icon" @click="looka=!looka">
              {{navlist[0].name}}
              <i class="fa fa-angle-down" aria-hidden="true" v-if="!looka"></i>
              <i class="fa fa-angle-up" aria-hidden="true" v-if="looka"></i>
            </div>
            <div class="list" v-if="looka">
              <p v-for="(item,index) in list[0]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
            </div>
          </li>
        </transition>
        <li>
          <div class="icon" @click="lookb=!lookb">
            {{navlist[1].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!lookb"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="lookb"></i>
          </div>
          <div class="list" v-if="lookb">
            <p v-for="(item,index) in list[1]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
        <li>
          <div class="icon" @click="lookc=!lookc">
            {{navlist[2].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!lookc"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="lookc"></i>
          </div>
          <div class="list" v-if="lookc">
            <p v-for="(item,index) in list[2]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
        <li>
          <div class="icon" @click="lookd=!lookd">
            {{navlist[3].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!lookd"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="lookd"></i>
          </div>
          <div class="list" v-if="lookd">
            <p v-for="(item,index) in list[3]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
        <li>
          <div class="icon" @click="looke=!looke">
            {{navlist[4].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!looke"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="looke"></i>
          </div>
          <div class="list" v-if="looke">
            <p v-for="(item,index) in list[4]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
        <li>
          <div class="icon" @click="lookf=!lookf">
            {{navlist[5].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!lookf"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="lookf"></i>
          </div>
          <div class="list" v-if="lookf">
            <p v-for="(item,index) in list[5]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
        <li>
          <div class="icon" @click="lookg=!lookg">
            {{navlist[6].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!lookg"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="lookg"></i>
          </div>
          <div class="list" v-if="lookg">
            <p v-for="(item,index) in list[6]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
        <li>
          <div class="icon" @click="lookh=!lookh">
            {{navlist[7].name}}
            <i class="fa fa-angle-down" aria-hidden="true" v-if="!lookf"></i>
            <i class="fa fa-angle-up" aria-hidden="true" v-if="lookf"></i>
          </div>
          <div class="list" v-if="lookh">
            <p v-for="(item,index) in list[7]" :key="index" @click="addclass(index)" :class='{active:index==current}'>{{item.name}}</p>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["show"],
  data() {
    return {
      navlist: {},
      list: [],
      looka: false,
      lookb: false,
      lookc: false,
      lookd: false,
      looke: false,
      lookf: false,
      lookg: false,
      lookh: false,
      current:0,
      active:false
    };
  },
  methods: {
    back() {
      this.show = false;
    },
    addclass(idx){
      this.current = idx
    }
  
  },
  created() {
    this.$axios
      .get("http://localhost:2000/static/slidel_nav.json")
      .then(res => {
        // this.navlist = res.data.data;
        // console.log(res.data.data);
        let obj = {};
        let arr = {};
        let newarr = [];
        for (var i = 0; i < res.data.data.length; i++) {
          obj[i] = res.data.data[i];
          arr[i] = res.data.data[i].sub_categories;
        }
        this.navlist = obj;
        for (var key in arr) {
          // console.log(arr[key])
          newarr.push(arr[key]);
        }
        this.list = newarr;
        // console.log(this.list[0]);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/base.scss";
.slider {
  z-index: 25;
  ul {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: rem(70px);
    z-index: 99;
    background: #fff;
    .search {
      display: flex;
      line-height: rem(50px);
      box-sizing: border-box;
      img {
        width: rem(25px);
        height: rem(25px);
        vertical-align: middle;
        padding-top: rem(10px);
      }
      a {
        width: rem(210px);
        box-sizing: border-box;
        margin: rem(8px) rem(3px) rem(8px) rem(5px);
        border: 1px solid #ccc;
        border-radius: rem(9px);
        background: #ccc;
        line-height: rem(30px);
      }
    }
    li {
      line-height: rem(36px);

      padding: rem(0px) rem(14px) rem(0px) rem(14px);
      font-size: rem(14px);
      border-bottom: 1px dotted #333;
      margin-bottom: 10px;
      // overflow: hidden;
      p {
        line-height: rem(28px);
        font-size: rem(16px);
      }
       .icon{
         :first-child{
           position: absolute;
           right:rem(15px);
           padding-top:rem(5px);
           font-size:rem(22px);
         }
         :nth-child(2){
          position: absolute;
          padding-top:rem(5px);
          right:rem(15px);
           font-size:rem(22px);
         }
      }
      .list {
        z-index: 1000;
        display: flex;
        flex-direction: column;
        background: #eee;
      }
      .active{background:#58bc5b;}
    }
  }
  .mask {
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 90;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
  }
}
</style>