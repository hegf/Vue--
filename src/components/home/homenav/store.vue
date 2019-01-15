<template>
    <div class="store">
         <p @click='back'>返回</p>
        我是store
    </div>
</template>
<script>
export default {
    name:"Sale",
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .store{
        width: 100%;
        height:600px;
        background:#a70;
        padding-top:60px;
         p{font-size:18px;color:red;}
    }
</style>