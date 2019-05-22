<template>
  <div class="classifiWrap">
    <div class="header">
      <div class="searchInput" @click="$router.replace('/search')" >
        <i class="iconfont iconchazhao"></i>
        <span  > 搜索商品，共XXXX件好物</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="ulWrap">
      <div class="listS">
        <ul class="listWrap">
          <li :class="{active: itemindex===index }" v-for="(item , index) in categoryL1List" @click="changeIndex(index)" :key="index">{{item.name}}</li>
          
        </ul>
      </div>
    </div>
    <ClassifiRight :itemindex="itemindex" :item="item"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import ClassifiRight from './classifiRight/classifiRight'
  export default {
    name: "",
    data(){
      return {
        itemindex :0,
        item:{}
      }
    },
    components:{
      ClassifiRight
    },
 
    methods:{
      changeIndex(index){
        this.item=this.categoryL1List[index]
        this.itemindex=index
       
      }
    },
    watch: {
      categoryL1List(){
        this.$nextTick(() => {
          this.item=this.categoryL1List[0]
    
          new BScroll('.ulWrap',{
            click: true,
            scrollY: true,
          });
    
    
        })
        
      }
  
     
  },
    mounted(){
      this.$store.dispatch('getcategoryL1List')
    },
    computed:{
      ...mapState(['categoryL1List'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .classifiWrap
    width 100%
    height 100%
    .header
       padding 0 40px
       height 88px
       display flex
       align-items center
       position relative
       background white
       z-index 100
       .searchInput
          width 100%
          height 56px
          background-color: #ededed
          border-radius 10px
          display flex
          align-items center
          justify-content center
          i
            font-size 30px
            margin-right 20px
            color #666
          span
            font-size 28px
            color #666
    .line
       height 2px
       background-color: #d9d9d9
       width 100%
    .ulWrap
       float left
       width 162px
       height 100%
       background-color #fff
       .listS
          padding 0 0 180px 0
         .listWrap
            padding  40px 0
         
            li
             width 100%
             height 50px
             text-align center
             line-height 50px
             margin-bottom 40px
             font-size 28px
             &.active
              border-left 4px solid #ab2b2b
              color #ab2b2b
       
   
</style>


