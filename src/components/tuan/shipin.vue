<template>
    <div class="shipin">
        <slot name="nav"></slot>
        <p>我是shipin组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Shipin',
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .shipin{
        width: 100%;
        height:600px;
        background:rgba(13, 107, 5, 0.133);
         margin-top:50px;
        p{font-size:24px;}
    }
</style>
   