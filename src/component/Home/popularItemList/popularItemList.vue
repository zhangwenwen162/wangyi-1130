<template>
  <div class="popularItemList">
     
       <div class="top">
         <span class="headerLift">人气推荐</span>
         <a href="javascrips:" class="more">
           <span >更多</span>
           <i> > </i>
         </a>
       </div>
       <div class="listTop">
          <img src="https://yanxuan.nosdn.127.net/042fa68e8179420a9203436256b14a01.png?imageView&quality=65&thumbnail=280x280">
          <div class="spanContainer">
            <div class="preference">
              <span >520特惠</span>
            </div>
            
            <span class="name">九制黑芝麻丸</span>
            <span class="desc">传统工艺2222222222222222222222222222222222222222222222</span>
            <span class="price">￥69</span>
          </div>
       </div>
       <div class="listBottom">
         <a href="javascipt:;" >
           <div class="imgs">
             <img src="https://yanxuan.nosdn.127.net/b3a401594caf734b7fd843df7ffea1a6.png?imageView&quality=65&thumbnail=330x330">
           </div>
           <div class="spanS">
             <span class="name">多功能人体工学转椅</span>
             <span class="price">￥139</span>
             <span class="status ">每满499减80券</span>
           </div>
         </a>
         <a href="javascipt:;" >
           <div class="imgs">
             <img src="https://yanxuan.nosdn.127.net/dccb1e4c4bdc95788bfc458dcc5b7d44.png?imageView&quality=65&thumbnail=330x330">
           </div>
           <div class="spanS">
             
             <span class="name">网易云音乐氧气蓝牙耳机青春...</span>
             <span class="price">￥139</span>
             <span class="status ">每满499减80券</span>
           </div>
         </a>
         <a href="javascipt:;" >
           <div class="imgs">
             <img src="https://yanxuan.nosdn.127.net/b3a401594caf734b7fd843df7ffea1a6.png?imageView&quality=65&thumbnail=330x330">
           </div>
           <div class="spanS">
             <span class="name">多功能人体工学转椅</span>
             <span class="price">￥139</span>
             <span class="status ">每满499减80券</span>
           </div>
         </a>
       </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState,mapActions} from 'vuex'
  export default {
    name: "",
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .popularItemList
     
     margin 0 30px 20px
     .top
        height 100px
        width 100%
        line-height 100px
        /*padding 0 30px*/
        .headerLift
          float left
          font-size 32px
        .more
          float right
          font-size 28px
          line-height 100px
          color black
     .listTop
        color #333
        width 690px
        height 280px
        display flex
        align-items center
        background #FEF0DF
        border-radius 4px
        margin-bottom 20px
        .spanContainer
          .preference
            display inline-block
            color #B4282D
            font-size 20px
            margin-bottom 20px
            border 1px solid #B4282D
            border-radius 2px
            text-align center
            padding 0 4px
            background-color white
          .name
            display block
            font-size 28px
          .desc
            display block
            width 350px
            color #7f7f7f
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            margin-top 10px
            margin-bottom 10px
            font-size 24px
          .price
             font-size 28px
             color #b4282d;
     .listBottom
         width 216px
         padding 0 0 13px
         display flex
         a
           margin-right 20px
           img
             background-color #f5f5f5
             width 216px
             height 216px
           .name
              font-size 24px
              margin-bottom 40px
              padding 0
              overflow visible
              line-height 24px
              /*display block*/
              width 200px
           .price
              font-size 24px
              color #B4282D
           .status
             font-size 24px
             color #B4282D
             display inline-block



</style>


