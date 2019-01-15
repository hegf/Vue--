<template>
    <div class="xiezi">
        <p>我是xiezi组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Xiezi',
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .xiezi{
        width: 100%;
        height:600px;
        background:rgba(20, 22, 18, 0.6);
         margin-top:50px;
        p{font-size:24px;}
    }
</style>
   