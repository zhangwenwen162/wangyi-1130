<template>
  <section class="categoryModule">
    <div class="categoryList " v-for="(item ,index) in categoryModules" :key="index">    <Cart/>
      <img :src="item.titlePicUrl">
    
      <div class="imgSmalcontainer " >
        <ul class="imgSmallList">
          <li v-for="(category ,index) in item.itemList" :key="index">
            <img :src="category.listPicUrl">
          
            <div class="name-price">
              <span class="name">{{category.name}}</span>
            </div>
            <div >
              <span class="price">￥222</span>
              <span class="priceOld">￥282</span>
            </div>
        
        
          </li>
          
      
        </ul>
      </div>
  
  
    </div>
    <Cart/>

    


  </section>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "",
    data(){
      return{
      }
    },
    mounted() {
      
      this.$store.dispatch('getcategoryModule')
   
    },
    methods:{
      _initScroll:()=>{
         let classifyList = document.querySelectorAll('.imgSmalcontainer');
          Array.from(classifyList).forEach((List,index)=>{
            console.log(List,'xxx')
            new BScroll(List,{
              scrollX:true,
              eventPassthrough:'vertical' //忽略竖直方向的滚动
            });
          })
      }
    },
    computed:{
      ...mapState(['categoryModules'])
      
    },
    watch: {
      categoryModules(){
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }
   
  }
  
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryModule
    height 10000px
    .categoryList
        img
          width 100%
          height 370px
          margin-bottom 30px
          
      .imgSmalcontainer
           /*padding 0 30px 30px*/
           width 100%
           margin-left 30px
           box-sizing border-box
           overflow hidden
           height 350px
           margin-bottom 20px
          .imgSmallList
             position absolute
             display flex
             flex-wrap: nowrap;
             
             li
               margin-right 20px
               img
                 background-color  #f4f4f4
                 width 200px
                 height 200px
                 margin-bottom 10px
               
               
               
             .name-price
               font-size  24px
               overflow hidden
               text-overflow ellipsis
               line-height 36px
               white-space normal
             .price
                color #b4282d
             .priceOld
                 text-decoration  line-through
                 color #999
                 
  .clearfix
   &:after
      visibility hidden
      display block
      content  " "
      clear both
      zoom 1


</style>


