<template>
<div id="app">
  <ul class="list" v-show="$route.meta.isShow">
    <li >
      <router-link to="/homePage"  class="item">
        <i class="iconfont iconshouye-"></i>
        <span>首页</span>
      </router-link>
    </li>
    <li>
     <router-link to="/classifi" class="item">
      <i class="iconfont iconfenlei-"></i>
      <span>分类</span>
     </router-link>
    </li>
     <li>
    <router-link to="/identifying" class="item">
      <i class="iconfont iconcaidan"></i>
      <span>识物</span>
    </router-link>
      </li>
     <li>
    <router-link to="/shoppingCart" class="item">
      <i class="iconfont icongouwuche-"></i>
      <span>购物车</span>
    </router-link>
   </li>
   <li>
    <router-link to="/personal" class="item">
      <i class="iconfont iconwode-"></i>
      <span>我的</span>
    </router-link>
   </li>

  </ul>
  <router-view/>
</div>
 
  </template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
html
  width 100%
  height 100%
  body
   height 100%
   /*overflow hidden*/
   #app
    width 100%
    height 100%
    position relative
    overflow-x hidden
    .list
      position fixed
      bottom 0
      left:0
      height 100px
      width 100%
      font-size 24px
      padding 0
      display flex
      justify-content space-around
      align-items center
      z-index 100
      border-top 1px solid #eee
      background white
     li
      display inline-block
      .item
        text-decoration:none
        display flex
        flex-direction column
        align-items center
        color black
        &.active
          color  #b4282d
        i
         font-size 32px
        span
         margin-top 5px
  


</style>
