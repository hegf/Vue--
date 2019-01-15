<template>
    <div class="mz">
        <p>我是mz组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Mz',
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .mz{
        width: 100%;
        height:600px;
        background:#600;
         margin-top:50px;
        p{font-size:24px;}
    }
</style>