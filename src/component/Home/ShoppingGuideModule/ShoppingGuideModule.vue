<template>
  <div>
    <div class="ShoppingModule">
     <div class="title">
       <span>类目热销榜</span>
     </div>
     <ul class="ShoppingModuleList">
       <li class="item">
         <a href="javascript;">
          <span class="itemBig">热搜榜</span>
           <span class="wire">——</span>
          <img src="https://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="item">
         <a href="javascript;">
           <span class="itemBig">好评榜</span>
           <span class="wire">——</span>
           <img src="https://yanxuan.nosdn.127.net/d5325b2841aeb11423704be19e8fb230.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">居家生活榜</span>
           <img src="https://yanxuan.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=200x200">
       </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">服饰鞋包榜</span>
           <img src="https://yanxuan.nosdn.127.net/214afff35f15eedce8e3e1e1effeaaa8.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">美食酒水榜</span>
           <img src="https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">个护清洁榜</span>
           <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">数码家电榜</span>
           <img src="https://yanxuan.nosdn.127.net/e5a7f8681f49a525abd7106fe833c2ce.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">运动旅行榜</span>
           <img src="https://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">母婴亲子榜</span>
           <img src="https://yanxuan.nosdn.127.net/de44bd49514fcfe4a915cbd901a94016.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
       <li class="itemTwo">
         <a href="javascript;">
           <span class="itemSmall">全球特色榜</span>
           <img src="https://yanxuan.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200">
         </a>
       </li>
     </ul>
 </div>
    <Cart/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ShoppingModule
    .title
      width 100%
      height 90px
      line-height 90px
      margin-left 30px
      font-size 32px
    .ShoppingModuleList
       padding 0 20px 20px 30px
       overflow hidden
       .item
         width 340px
         height 200px
         float left
         border-radius 4px
         margin 0 10px 10px 0
         background: #F9F3E4;
         position relative
         a
           .itemBig
              display block
              float left
              padding-left 24px
              margin-top 66px
              font-size 28px
              color black
           .wire
              position absolute
              top 90px
              left 25px
           
           img
              float right
              height 100%
           
       .itemTwo
         display block
         width 165px
         height 180px
         background #f5f5f5
         float left
         border-radius 4px
         margin 0 10px 10px 0
         
         .itemSmall
           margin-top 10px
           font-size 24px
           color #333
           text-align center
           display block
         img
           width 100%
           height auto
           
</style>


