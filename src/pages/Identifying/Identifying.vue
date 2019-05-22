<template>
  <div class="IdentifyingWrap">
    <div class="IdentifyingContent" >
      <div class="header">
        <i class="iconfont iconshouye-"  @click="$router.replace('/homePage')"></i>
        <div class="title">
          <router-link to="/identifying/discover" class="item" >发现</router-link>
          <router-link to="/identifying/select" class="item">甄选家</router-link>
        </div>
        
        <div class="icon">
          <i class="iconfont iconchazhao " ></i>
          <i class="iconfont icongouwuche- left"  @click="$router.replace('/shoppingCart')"></i>
        </div>
      
    
      </div>
      <div class="line" ></div>
      <div class="nav" v-if="$route.path==='/identifying/discover'">
        <ul class="navList">
          <li v-for="(item ,index) in IdentifyingList" :key="index">{{item.tabName}}</li>
  
        </ul>
      </div>
      <div class="line"></div>
      <Cart v-if="$route.path==='/identifying/discover'"/>
      <div class="contentWrap" v-if="$route.path==='/identifying/discover'">
        <div  v-for="(item ,index) in IdentifyingMondel" :key="index">
         <div class="contentList"   v-for="(Identifying,index) in item.topics" :key="index">
           
           <div class="content" v-if="Identifying.style===1">
             <div class="name">
               <img :src="Identifying.avatar">
               <span>{{Identifying.nickname}}</span>
             </div>
             <div class="title">
               {{Identifying.title}}
             </div>
             <div class="imgWrap">
               <img :src="Identifying.picUrl">
             </div>
             <div class="fooder">
               <i class="iconfont iconyanjing " ></i>
               <span>{{Identifying.readCount}}w人看过</span>
             </div>
  
           </div>
           <div class="contont1" v-if="Identifying.style===2">
              <div class="left">
                  <div class="name1">
                    <img :src="Identifying.avatar">
                    <span>{{Identifying.nickname}}</span>
               </div>
                <div class="title1">
                  {{Identifying.title}}
                </div>
              <span class="text">{{Identifying.subTitle}}</span>
              <div class="fooder1">
                <i class="iconfont iconyanjing " ></i>
                <span>{{Identifying.readCount}}w人看过</span>
              </div>
              
              </div>
             <div class="imgWrap1">
               <img :src="Identifying.picUrl">
             </div>
           </div>
           <Cart/>
         
         </div>
        </div>
        
      </div>
     
    </div>
  
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "",
    mounted() {
      //等到內容將div撑开之后，在对better-scroll的实例初始化
      //初始化的时机很重要
  
 
      this.$store.dispatch('getIdentifyingList')
      
      this.$store.dispatch('getIdentifyingMondel')
  
    },
    watch:{
      IdentifyingList(){
        this.$nextTick(() => {
    
    
          new BScroll('.nav', {
            scrollX: true,
            click:true
          });
    
    
        })
      },
      // IdentifyingMondel(){
      //
      //   this.$nextTick(() => {
      //
      //
      //     new BScroll('.contentWrap', {
      //       scrollY: true,
      //       click:true
      //     });
      //
      //
      //   })
      // }
    },
    computed:{
      ...mapState(['IdentifyingList','IdentifyingMondel'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .IdentifyingWrap
     width 100%
     height 100%
     .IdentifyingContent
       width 100%
       height 100%
       .header
          background white
          padding 20px 18px
          display flex
          align-items center
          justify-content space-between
          z-index 100
          position relative
          i
            font-size 50px
          .title
            .item
               font-size  26px
               color black
               &.active
                font-weight 700px
                font-size  30px
                color #b4282d
       .line
          height 2px
          background-color: #d9d9d9
          width 100%
          
       .nav
          width 100%
          height 54px
          background white
          z-index 100
          position relative
          .navList
             position absolute
             height 54px
             line-height 54px
             white-space nowrap
          
             li
               
               font-size 28px
               display inline-block
               color  #7F7F7F
               padding 0 20px
               margin 0 15px
               &.active
                 color #B4282D
                 border 3px solid #B4282D
               
          
       .contentWrap
           background #fff
           width 100%
           height 100%
          .contentList
            width 100%
            .content
               padding 20px 20px
              .name
                 margin-bottom 18px
                 img
                   width 42px
                   height 42px
                   border-radius 12px
                   vertical-align middle
                 span
                   font-size 28px
                   vertical-align middle
              .title
                 margin-bottom 18px
                 color  #333
                 font-size 30px
                 line-height 40px
              .imgWrap
                 margin-bottom 18px
                 width 100%
                 height 100%
                 img
                   width 100%
                   height 100%
              .fooder
                 i
                   font-size 26px
                   color  #999
                 span
                   font-size 26px
                   color  #999
          .contont1
            overflow hidden
            padding 27px 23px
            margin 15px 0
            .left
              width 400px
              float left
              .name1
                width 100%
                margin-bottom 18px
                img
                  width 42px
                  height 42px
                  border-radius 12px
                  vertical-align middle
                span
                  font-size 28px
                  vertical-align middle
              .title1
                margin-bottom 20px
                color  #333
                font-size 30px
                line-height 45px
              .text
                 margin-bottom 20px
                 font-size 26px
                 color #7f7f7f
              .fooder1
                margin-top 18px
                i
                  font-size 26px
                  color  #999
                span
                  font-size 26px
                  color  #999
            .imgWrap1
              float right
              width 250px
              height 250px
              
              img
                width 100%
                height 100%
                border-radius 4px
            
     
            
            
</style>


