<template>
    <div class="sale">
        <p @click='back'>返回</p>
        我是sale
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
    .sale{
        width: 100%;
        height:600px;
        background: #f90;
        padding-top:60px;
         p{font-size:18px;color:red;}
    
    }
</style>