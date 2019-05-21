<template>
  <div id="header-container">
    <div class="header-top">
      <span class="logo"></span>
      <div class="searchInput" >
        <i class="iconfont iconchazhao"></i>
        <span class="placeholder" > 搜索商品，共XXXX件好物</span>
      </div>
      <button>登录</button>
    </div>
    <div class="header-list-icon" ref="listC">
      <ul class="header-list" v-show="!isShow" >
        <li class="active">
          <a href="javescript:" >推荐</a>
        </li>
        <li   v-for="(item,index) in navList" :key="index" >
          <a href="javescript:" >{{item.text }}</a>
        </li>
      </ul >
      <div class="icon-lower" @click="handelIsShow" :class="{active:isShow}">
        <i class="iconfont iconjiantouxia"></i>
      </div>
      <div class="nav-box-container" v-show="isShow">
         <div class="nav-box" @click.stop="handelIsShow">
           <div class="nave-icon" @click.stop>
             <span>全部频道</span>
           </div>
           <ul class="listBox" @click.stop>
             <li >
               <a href="javescript:" >推荐</a>
             </li>
             <li   v-for="(item,index) in navList" :key="index">
               <a href="javescript:" >{{item.text }}</a>
             </li>
           </ul   >
         </div>
       
      </div>
    </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "header-container",
    data(){
      return{
        isShow:false,
        navLindex:[]
      }
    },
   async  mounted() {
      //等到內容將div撑开之后，在对better-scroll的实例初始化
      //初始化的时机很重要
     this.$store.dispatch('getNaveList')
      this.$nextTick(() => {
      
     
         new BScroll(this.$refs.listC,{
            scrollX:true,
            eventPassthrough:'vertical' //忽略竖直方向的滚动
          });
      
       
     })
     
     
    },
    methods:{
      handelIsShow(){
        this.isShow=!this.isShow
      },
    },
    computed: {
      ...mapState(['navList'])
      
      
    },
    
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #header-container
    position relative
    background-color  #fff
    width 100%
    height 150px
    
    .header-top
      display flex
      align-items center
      justify-content space-around
      padding 10px 10px
      box-sizing border-box
      .logo
        height 35px
        background-image  url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-position center
        background-repeat no-repeat
        background-size 135px 40px
        flex 2
      
      
      .searchInput
        flex 7
        background-color rgba(0,0,0,0.1);
        border-radius 10px
        border 0
        height 55px
        margin 0 10px
        line-height 55px
        text-align center
        font-size 28px
        color #666
        i
          font-size 32px
      button
        width 100px
        height 40px
        border-radius 10px
        font-size 24px
        line-height 40px
        color  #b4282d
        border 1px solid  #b4282d
        flex 1
        text-align center
    .header-list-icon
      width 100%
      position relative
      overflow hidden
      .header-list
         width 1900px
         
         height 70px
         line-height 70px
         font-size 28px
      
         li
          float left
          margin-right 30px
          padding 0 10px
          text-align center
          &.active
            border-bottom 4px solid red
            a
              color red
      .icon-lower
        position absolute
        right 0
        top 0
        text-align center
        line-height 75px
        background white
        width 150px
        height 75px
        z-index 3000
        overflow hidden
        transition transform 0.1s
        &.active
          transform rotateZ(180deg)
        i
          font-size 32px
          color  #7e8c8d
  
  
    
      .nav-box
        position relative
        left 0
        top 0
        background-color rgba(0,0,0,.6)
  
        width 100%
        height 2000px
       
        z-index 1000
     
      
        .nave-icon
          font-size 32px
          height 70px
          width 100%
          line-height 70px
          padding-left  10px
          background white
        
        .listBox
           width 100%
           overflow hidden
           padding-top 25px
           padding-bottom 25px
          
           background white
           li
             width 150px
             height 55px
             border 1px solid black
             float left
             line-height 55px
             text-align center
             margin-bottom 40px
             margin-left 30px
     
   


       
  
  

</style>


