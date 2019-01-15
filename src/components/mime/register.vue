<template>
  <div class="register">
    <mt-field label="用户名" placeholder="用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="密码" type="password" v-modal="password"></mt-field>
    <mt-field label="手机号" placeholder="手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="生日" placeholder="生日" type="date" v-model="birthday"></mt-field>
    <mt-button type="primary">注册</mt-button>
    <router-link to='/mime'><mt-button type="danger">取消</mt-button></router-link>
  </div>
</template>
<script>
import { Field } from "mint-ui";
export default {
  name: "Register"
};
</script>
<style lang="scss" scoped>
.register {
    text-align: center;
}
</style>