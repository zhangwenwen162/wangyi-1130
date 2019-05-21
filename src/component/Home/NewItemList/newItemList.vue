<template>
 <div class="newItemList">
   <div class="top">
     <span class="headerLift">新品首发</span>
     <a href="javascrips:" class="more">
         <span >更多</span>
         <i> > </i>
     
       
     </a>
   </div>
   <div class="listBottomContainer">
     <div class="listBottom">
       <a href="javascipt:;" v-for="(item ,index) in newItemList" :key="index">
         <div class="imgs">
           <img :src="item.primaryPicUrl">
         </div>
         <div class="spanS">
           <span class="name">{{item.name}}</span>
           <span class="price">￥{{item.counterPrice}}</span>
         </div>
         <span class="status ">520特惠</span>
       </a>
  
     </div>
   </div>
  

 </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "",
    mounted() {
      this.$store.dispatch('getnewItemList')
    },
    computed:{
    ...mapState(['newItemList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .newItemList
    padding 0 30px
    .top
      height 100px
      width 100%
      line-height 100px
      .headerLift
        float left
        font-size 32px
      .block
        background black
        color #fff
        border-radius 4px
        margin 0 10px
      .more
        float right
        display block
        font-size 28px
        line-height 100px
        color black
        i
         font-size 34px
         
    .listBottom
      width 100%
      display flex
      flex-wrap wrap
      a
        margin-right 20px
        width 216px
        margin-bottom 10px
        &:nth-child(3)
          margin-right 0
        &:nth-child(6)
          margin-right 0
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
          white-space normal
        .price
          font-size 24px
          color #B4282D
        .status
          font-size 20px
          line-height 25px
          color #B4282D
          display inline-block
          border-radius 10px
          border 1px solid #B4282D
          height 25px
          text-align center



</style>


