<template>
    <div class="myjk">
        <p>我是myjk组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Myjk',
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .myjk{
        width: 100%;
        height:600px;
        background:#6a0a;
         margin-top:50px;
        p{font-size:24px;}
    }
</style>
   