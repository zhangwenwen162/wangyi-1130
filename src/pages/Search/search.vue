<template>
   <div class="searchWrap">
      <div class="header">
         <div class="icon-search">
           <div class="iconBox">
             <i class="iconfont iconchazhao"></i>
           </div>
           <input type="text" placeholder="英国摩飞榨汁杯 仅199元" v-model="text" @keyup="chendl">
           <i class="iconfont iconqingchu" v-show="text" @click="text=''"></i>
         </div>
         <div class="text" @click="$router.replace('/homePage')">
           <span>取消</span>
         </div>
       
      </div>
      <div class="hotSearch" v-show="!text">
         <div class="title">
           <span>热门搜索</span>
         </div>
         <ul class="hotSearchList" >
           <li class="item" v-for="(item ,index) in navList" :key="index" @click="handelIndex(index)"  :class="{active:index===indexItem}">{{item.text}}</li>
         
           
         </ul>
      </div>
      <ul class="searchList" v-show="text">
        <li  class="item" v-for="(item ,index) in searchList" :key="index">{{item}}</li>
       
      </ul>
   </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "",
    data(){
      return{
        text:'',
        indexItem:0
      }
    },
    computed:{
      ...mapState(['searchList','navList'])
    },
    methods:{
    
    chendl(){
      setTimeout(()=>{
        this.$store.dispatch('getsearchList',this.text)
      },500)
     
    },
      handelIndex(index){
        this.indexItem=index
      }
      
   
  },

  

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchWrap
     background-color #f4f4f4
     height 100%
     width 100%
     .header
       background-color white
       height 88px
       padding 0 30px
       display flex
       align-items center
       justify-content center
       .icon-search
         flex 9
         height 56px
         display flex
         align-items center
         background-color  #f4f4f4
         .iconBox
           height 56px
           flex 1
           text-align center
           line-height 56px
           i
             font-size 30px
         input
            flex 7
            background-color  #f4f4f4
            border-radius 6px
            &:focus
              outline none
              
         i
            font-size 30px
            margin-right 15px
       .text
          flex 1
          text-align center
          line-height 56px
          
  
  
    .hotSearch
        padding 0 30px 30px
        /*height 300px*/
        /*background-color red*/
        overflow hidden
        .title
           height 90px
           line-height 90px
        .hotSearchList
           .item
             float left
             padding 15px
             margin-right 32px
             margin-bottom 32px
             border-radius 8px
             color #333
             border 1px solid #999
             &:nth-child(4n)
               margin-right 0
             &.active
               border 1px solid #b4282d
               color #b4282d
               
     .searchList
        position relative
        z-index 100
        display block
        padding-left 30px
        background-color white
        .item
          display block
          font-size 28px
          height 90px
          line-height 90px
          border-bottom 2px  solid #f4f4f4
  
  

</style>


