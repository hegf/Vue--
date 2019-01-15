<template>
  <div class="login">
    <h5>用户登录</h5>
    <div class="name">
      <label>用户名:</label>
      <input type="text" placeholder="用户名" ref="uname">
    </div>
    <div class="pswd">
      <label>密码:</label>
      <input type="text" placeholder="密码" ref="pswd">
    </div>
    <div class="btn">
      <mt-button type="primary" @click="login">登录</mt-button>
      <router-link to="/mime">
        <mt-button type="danger">取消</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Field } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      uname: null,
      pswd: null
    };
  },
  methods: {
      login(){
          
        this.uname = this.$refs.uname.value;
        this.pswd = this.$refs.pswd.value;
          if(this.$refs.uname.value!='' && this.$refs.pswd.value!=''){
            sessionStorage.setItem('token',this.$refs.uname.value);
            this.$router.push({path:'mime',query:{uname:this.$refs.uname.value}})
          }
    }
    
  }
};
</script>
<style lang="scss" scoped>
@import '../../style/base.scss';
.login {
    text-align: center;
    h5{line-height: rem(80px);margin:2px;}
    .name{
        text-align:left;
        padding-left:rem(14px);
        font-size:rem(18px);
        margin-bottom:20px;
        input{width: rem(250px);height:rem(30px);}
    }
    .pswd{
        text-align:left;
        margin-left:rem(33px);
        font-size:rem(18px);
        input{width: rem(250px);height:rem(30px);}
    }
}
</style>