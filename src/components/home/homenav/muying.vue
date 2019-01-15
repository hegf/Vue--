<template>
    <div class="muying">
        <p @click='back'>返回</p>
        我是muying
    </div>
</template>
<script>
export default {
    name:"Muying",
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .muying{
        width: 100%;
        height:600px;
        background:#90a;
        padding-top:60px;
         p{font-size:18px;color:red;}
    }
</style>