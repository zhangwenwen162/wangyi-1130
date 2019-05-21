<template>
 <div class="listContainer">
    <div class="present">
      <div class="fristListTop">
       <span> — </span>
       <span> 新人专享好礼 </span>
       <span> — </span>
     </div>
      
      <div class="fristListDown">
        <a href="javascript:" class="fristListLeft">
          <span>新人专享礼包</span>
           <div class="imgs">
             <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
    
           </div>
        </a>
        <a href="javascript:"  class="fristListRight">
           <div class="top">
             <span class="welf">福利社</span>
             <span class="offer">今日特价</span>
             <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&thumbnail=200x200&quality=75">
           </div>
           <div class="bottom">
             <span class="xrpt">新人拼团</span>
             <span class="oneY">1元起包邮</span>
             <img src="https://yanxuan.nosdn.127.net/9dda6ba19c27f7403acda49f610ff03c.png?imageView&thumbnail=200x200&quality=75">
           </div>
        </a>
     </div>
   </div>
    <Cart/>
     <div class="manufacturer">
     <div class="manufacturerTop">
       <span class="manufacturerleft">品牌制造商直供</span>
       <a  href="javascript:" class="more">
         <span > 更多 </span>
         <i > > </i>
       </a>
    
     </div>
     <div class="manufacturerList">
       <a href="javascript:;">
         <span class="top">海外制造</span>
         <div class="bottom">
           <span class="element">9.9元起</span>
           <span>上新</span>
         </div>
       </a>
       <a href="javascript:;">
         <span class="top">CK制造商</span>
         <div class="bottom">
           <span class="element">29.9元起</span>
         </div>
       </a>
       <a href="javascript:;">
         <span class="top">新秀丽制造商</span>
         <div class="bottom">
           <span class="element">34.9元起</span>
           <span>上新</span>
         </div>
       </a>
       <a href="javascript:;">
         <span class="top">Nine West制造商</span>
         <div class="bottom">
           <span class="element">21.9元起</span>
         </div>
       </a>
     </div>
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
  .listContainer
    .present
      .fristListTop
        width 100%
        height 90px
        line-height 90px
        text-align center
        font-size 32px
      .fristListDown
        padding-left: 30px
        overflow hidden
        .fristListLeft
          width 343px
          height 434px
          background #F9E9CF;
          float left
          margin-right 5px
          display block
          
          span
            font-weight 700
            font-size 32px
            padding 30px 0 0 30px
            display block
            color black
          .imgs
             width 258px
             height 257px
             position relative
             margin 37px auto
             img
               width 100%
               height 100%
            
        .fristListRight
          width 343px
          height 434px
          float left
          display block
          .top
             width 343px
             height 215px
             background #F9E9CF;
             margin-bottom  5px;
             position relative
             .welf
               display block
               padding 30px 0 0 30px
               font-size 32px
               color black
               font-family: PingFangSC-Medium;
             .offer
               display block
               padding 10px 0 0 30px
               font-size 24px
               color #7F7F7F;
             img
               position absolute
               bottom 0
               right 0
               width 200px
               height 200px
               
     
          .bottom
             width 343px
             height 215px
             background #FFECC2;
             position relative
             .xrpt
                display block
                padding 30px 0 0 30px
                font-size 32px
                font-family: PingFangSC-Medium;
                font-weight 700
                color black
             .oneY
                position relative
                display block
                font-size 22px
                color white
                background: #CBB693;
                width 120px
                margin-left 30px
                text-align center
                height 32px
                line-height 32px
                font-family: PingFangSC-Medium;
           
               
               
             img
                position absolute
                bottom 0
                right 0
                width 200px
                height 200px
              
           
    
    .manufacturer
      .manufacturerTop
         height 100px
         width 100%
         line-height 100px
         padding 0 30px
         .manufacturerleft
           float left
           font-size 32px
         .more
           float right
           display block
           font-size 28px
           line-height 100px
           color black
           i
             margin 50px 50px 0 8px
  
  
         
      .manufacturerList
        padding 0 26px 26px 30px
        background #fff
        margin-bottom 20px
        font-size 0
        a
         display inline-block
         /*margin 0 40px 40px 0*/
         width 342px
         height 260px
         background-color #f4f4f4
         border-radius 4px
         background-image url("https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1")
         background-size 100% 100%
         text-align center
         margin-right: 4px
         margin-bottom 4px
         &:nth-child(2)
           background-image url("https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1")
           margin-right 0
         &:nth-child(3)
           background-image url("https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1")
         &:nth-child(4)
            background-image url("https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1")
            margin-right 0
         .top
           width 100%
           padding-top 27px
           display block
           font-size 28px
           height 28px
           margin-bottom 3px
          .bottom
            span
              font-size 24px
              color #7f7f7f
            
            
</style>


