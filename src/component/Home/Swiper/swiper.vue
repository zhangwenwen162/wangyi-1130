<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100"/>
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会"/>
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己"/>
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站"/>
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新"/>
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "swiper",
    mounted () {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true, // 自动轮播
        speed: 500,
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.swiper-container
  width 100%
  height 400px
  img
   width 100%
   height 400px
  .swiper-pagination-bullet
   width 40px
   height 4px
   display inline-block
   border-radius 3px
   background #000
   opacity .2
  .swiper-pagination-bullet-active
   background white

</style>


