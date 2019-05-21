<template>
	 <div class="ShoppingCart">
     <div class="header">
       <span>购物车</span>
       <a href="javascript:">领券</a>
     </div>
     <div class="ShoppingCartlist">
       <span>30天无忧退货</span>
       <span>48小时无忧退款</span>
       <span>满88元免邮费</span>
     </div>
     <img data-v-e6de86ca="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="cartImg" class="cart-img">
     <div class="add-Btn">
       <span class="add"> 去添加点什么吧</span>
       <div class="Btn">
         <a href="javascript:" @click="$router.push('./personal')" >登录</a>
       </div>
     
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ShoppingCart
    width 100%
    height 100%
    position relative
    background #f4f4f4;
    .header
      display flex
      align-items center
      justify-content space-between
      height 88px
      padding 0 30px
      background #fff
      span
        font-size 36px
        color  #333
      a
        font-size 36px
        color: #b4282d;
    .ShoppingCartlist
      display flex
      align-items center
      justify-content space-between
      padding 0 30px
      height 70px
      span
        color #666
        font-size 24px
    img
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%);
      width 248px
      height 248px
    
    .add-Btn
       position absolute
       left 50%
       bottom 380px
       transform translateX(-50%)
       text-align center
       .add
         display block;
         font-size 28px
         color #999
         margin-bottom 50px
       .Btn
         height 90px
         width 480px
         margin 0 135px
         text-align center
         line-height 90px
         background #b4282d
         a
           font-size 30px
           color #fff

</style>


