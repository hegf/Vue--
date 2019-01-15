<template>
    <div class="qinshe">
        <p @click='back'>返回</p>
        我是轻奢
    </div>
</template>
<script>
export default {
    name:"Qinshe",
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .qinshe{
        width: 100%;
        height:600px;
        background:#091;
        padding-top:60px;
        p{font-size:18px;color:red;}
    }
</style>