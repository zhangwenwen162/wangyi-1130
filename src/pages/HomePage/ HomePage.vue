<template>
     <div class="homeContainer" >
       <Header/>
       <Swiper/>
       <ul class="policyDescList">
         <li class="policyItem" v-for="(item ,index) in policyDescList" :key="index">
           <a>

               <img :src="item.icon"/>

             <span>{{item.desc}}</span>
           </a>
         </li>

       </ul>
       <KingKongList/>
       <Cart/>
       <Lists/>
       <ShoppingModule/>
       <popularItemList/>
       <Cart/>
       <FlashSaleModule/>
       <Cart/>
       <NewItemList/>
       <Cart/>
       <CategoryModule/>
     </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Header  from '../../component/Home/Header/header'
  import Swiper  from '../../component/Home/Swiper/swiper'
  import  KingKongList from '../../component/Home/kingKongList/kingKongList'
  import Lists from '../../component/Home/Lists/list'
  import ShoppingModule from '../../component/Home/ShoppingGuideModule/ShoppingGuideModule'
  import popularItemList from '../../component/Home/popularItemList/popularItemList'
  import FlashSaleModule from  '../../component/Home/FlashSaleModule/flashSaleModule'
  import NewItemList from '../../component/Home/NewItemList/newItemList'
  import CategoryModule from '../../component/Home/CategoryModule/categoryModule'
  export default {
    name: 'home',
    components:{
      Header,
      Swiper,
      KingKongList,
      Lists,
      ShoppingModule,
      popularItemList,
      FlashSaleModule,
      NewItemList,
      CategoryModule
    },
    mounted(){
      this.$store.dispatch('getPolicyDescList')
      // this.$nextTick(() => {
      //
      //
      //   new BScroll('homeContainer',{
      //     scrollX:true,
      //     eventPassthrough:'vertical' //忽略竖直方向的滚动
      //   });
      //
      //
      // })
    },
   computed:{
     ...mapState(['policyDescList'])
   }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .homeContainer
     .policyDescList
       width 100%
       height 72px
       display flex
       justify-content space-around
       line-height 72px
       text-align center
       .policyItem
         a
          img
            display inline-block
            width 32px
            height 32px
            vertical-align middle
          span
            font-size 24px
            color #B4282D
            vertical-align middle


</style>


