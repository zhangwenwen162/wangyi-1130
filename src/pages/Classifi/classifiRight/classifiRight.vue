<template>
  <div class="contentWrap">
    <div class="classifiRightWrap">
    
      <div class="classifiRight">
        <img :src="item.bannerUrl">
        <ul class="content">
          <li  v-for="(category ,index) in item.subCateList" :key="index">
            <img :src="category.bannerUrl">
            <span>{{category.name}}</span>
          </li>
        
        </ul>
      </div>
    </div>
  </div>
 
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: "",
    props:{
      itemindex:Number,
      item:Object
    },
    
    mounted() {
      this.$nextTick(() => {
      
      
        new BScroll('.contentWrap',{
          click: true,
          scrollY: true,
        });
      
      
      })
    }
   
  }
 
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.contentWrap
 
  height 100%
 
  .classifiRightWrap
     
     margin-left 162px
     padding  30px 30px 150px
 
     .classifiRight
       
       img
         width 100%
         height 192px
       .content
         li
           display inline-block
           margin-right 34px
           &:nth-child(1)
             margin-right 34px
           &:nth-child(2n+1)
             margin-right 0
           img
             width 144px
             height 144px
             display block
             border-radius 50%
           span
             display block
             width 144px
             height 72px
             line-height 72px
             text-align center
             color #333
             text-overflow  ellipsis
             overflow hidden




</style>


