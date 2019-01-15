<template>
    <div class="food">
        <slot name="nav"></slot>
        <p>我是food组件</p>
        <p @click="back">返回</p>
    </div>
</template>

<script>
export default {
    name:'Food',
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    .food{
        width: 100%;
        height:600px;
        background: #19a;
        margin-top:50px;
        p{font-size:24px;}
    }
</style>
   