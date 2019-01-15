<template>
    <div class="lpxb">
        <p>我是lpxb组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Lpxb',
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .lpxb{
        width: 100%;
        height:600px;
        background:#00a;
         margin-top:50px;
        p{font-size:24px;}
    }
</style>
   