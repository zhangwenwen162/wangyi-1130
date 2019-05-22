<template>
   <div class="selectWrap">
     <div class="selectcontent">
       <div class="swiper-wrapper">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/5dabfaf695b65513493dc29f11727e78.jpg?imageView&quality=75&thumbnail=670x371">
        
         <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/fe726ef94ce6a26a666e84361dbd6f4d.jpg?imageView&quality=75&thumbnail=670x371">
       </div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "",
    mounted () {
      new Swiper('.selectcontent', {
      
        loop: true,
        autoplay: true, // 自动轮播
        speed: 500,
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-wrapper
    margin-top  -1040px
    width 100%
    height 100%
    display flex
    img
      width 690px
      height 450px
      padding 30px
      border-radius 40px
      box-sizing border-box
      
    
    
</style>


