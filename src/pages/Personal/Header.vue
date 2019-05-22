<template>
  <div>
  <div class="header">
    <i class="iconfont iconshouye-"  @click="$router.replace('/homePage')"></i>
    <div class="imgBox">
    
    </div>
    <div class="icon">
      <i class="iconfont iconchazhao " ></i>
      <i class="iconfont icongouwuche- left"  @click="$router.replace('/shoppingCart')"></i>
    </div>
    
  
  </div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    background white
    height 88px
    display flex
    align-items center
    justify-content space-between
    padding 0 16px
    
    i
      font-size 50px
    .left
      margin-left 20px
    .imgBox
      width 172px
      display inline-block
      height 54px
      background-position: center
      background-image  url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
      background-size  172px 54px
      background-repeat no-repeat
  .line
    height 2px
    background-color: #d9d9d9
    width 100%
</style>


