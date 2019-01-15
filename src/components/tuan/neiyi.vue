<template>
    <div class="neiyi">
        <p>我是neiyi组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Neiyi',
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
    
}
</script>

<style scoped lang="scss">
    .neiyi{
        width: 100%;
        height:600px;
        background:pink;
         margin-top:50px;
        p{font-size:24px;}
    }
</style>