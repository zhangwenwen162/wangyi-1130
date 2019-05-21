<template>
  <ul class="KingKongList">

    <li v-for="(item,index) in navList" :key="index">
      <a>
        <img :src="item.picUrl">
        <span>{{item.text}}</span>
      </a>
    </li>
   
    
    
   
  </ul>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "kingKongList",
    
    computed:{
      ...mapState(['navList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .KingKongList
    overflow hidden
    margin-bottom 22px
    
    li
      float left
      width 110px
      height 156px
      margin 10px 20px
     
      display block
      text-align center
      &:nth-child(5)
        margin-right 0
      &:nth-child(10)
        margin-right 0
      a
       img
          width 110px
          height 110px
       span
          font-size 24px
          margin-top 10px
  

</style>


