<template>
    <div class="jiaju">
        <p>我是jiaju组件</p>
         <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Jiaju',
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .jiaju{
        width: 100%;
        height:600px;
        background:#a19;
         margin-top:50px;
        p{font-size:24px;}
    }
</style>
   
   