<template>
  <div class="cart">
    <h3>我的购物车</h3>
    <div class="goods">
        <input type="checkbox">
        <img :src="goodslist.image_url_set.dx_image[320]" alt="">
        <h5>{{goodslist.short_name}}</h5>
        <p>{{goodslist.store_id}}</p>
        <p>合计:</p>
        <input type="text" disabled/>
    </div>
    
  </div>
</template>  

<script>
export default {
  name: "Cart",
  data() {
    return {
      goodslist:''
    };
  },
  methods: {
    getdate() {
      //http://h5.jumei.com/product/ajaxDynamicDetail?item_id=ht190110p2197962t1&type=global_deal
      let store = JSON.parse(localStorage.getItem("local"));
      this.$axios
        .get(`dpi/ajaxStaticDetail?item_id=${store.id}&type=${store.type}`)
        .then(res => {
          //   console.log(res.data.data);
          this.goodslist = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getdate();
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
    .cart{
        h3{font-size:rem(24px);text-align: center;margin-bottom:rem(16px);}
        .goods{
            display:flex;
            justify-content: space-around;
            align-items: center;
             font-size:12px;
            img{width:rem(60px);height:rem(80px);}
            input{width: rem(20px);border:none;}
        }
    }
</style>