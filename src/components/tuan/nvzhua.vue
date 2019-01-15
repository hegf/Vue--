<template>
    <div class="nvzhua">
        <p>我是nvzhua组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Nvzhua',
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .nvzhua{
        width: 100%;
        height:600px;
        background:#6f1;
         margin-top:50px;
        p{font-size:24px;}
    }
</style>
   