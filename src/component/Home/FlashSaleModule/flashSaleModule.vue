<template>
	<div class="flashSaleModule">
    <div class="top">
      <span class="headerLift">限时购</span>
      <span class="block" ref="timeHour">{{hour &lt; 10 ? '0' + hour : hour}}</span>
      <span>:</span>
      <span  class="block" ref="timeMinute">{{minute &lt; 10 ? '0' + minute : minute}}</span>
      <span>:</span>
      <span  class="block" ref="timeSecond">{{second &lt; 10 ? '0' + second : second}}</span>
      <a href="javascrips:" class="more">
        <span >更多</span>
        <i> > </i>
      </a>
    </div>
    <ul class="buttom">
      <li v-for="(item,index) in flashSaleModule.itemList" :key="index">
        <a>
          <img :src="item.picUrl">
          <span class="one">￥{{item.activityPrice}}</span>
          <span class="two">￥{{item.originPrice}}</span>
        </a>
      </li>
    
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  
  import {mapState} from 'vuex'
  export default {
    name: "",
    data () {
      return {
        hour: 2,
        minute: 59,
        second: 59
      }
    },
    mounted(){
      this.$store.dispatch('getflashSaleModule')
      this._timeDown();
    },
    computed:{
      ...mapState(['flashSaleModule'])
    },
    methods: {
      _timeDown () {
        this.intervalId = setInterval(() => {
          // 当秒数减至小于0时，重新置为59 同时分钟数减1
          if (this.second > 0) {
            // 秒数大于0时，秒数减1
            this.second--;
          } else {
            // 秒数小于0或者等于0时
            if (this.minute) {
              // 如果分钟数有值，则重置秒数，同时分钟数减1
              this.second = 59;
              this.minute--;
              // 如果小时数为0 则当分钟数减至0时，直接设为0
              if (this.minute <= 0 && this.hour === 0) {
                this.minute = 0;
              }
            } else if (this.hour) {
              // 如果分钟数为0而小时数不为0  即 x:0:xx 则秒数和分钟数均置为初始值 同时小时数减1
              this.second = 59;
              this.minute = 59;
              this.hour--;
              if (this.hour <= 0) {
                // 小时数减至0时，直接设为0
                this.hour = 0;
              }
            }
          }
        
          if (!this.hour && !this.minute && !this.second) {
            // 秒数/分钟数/小时数全都不大于0时，停止计时器
            clearInterval(this.intervalId);
          }
          // 当分钟数减至小于0时，重置为59 同时小时数减1
        }, 1000);
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .flashSaleModule
    margin 0 30px
    .top
      height 100px
      width 100%
      line-height 100px
      .headerLift
        float left
        font-size 32px
      .block
        background black
        color #fff
        border-radius 4px
        margin 0 10px
      .more
        float right
        font-size 28px
        line-height 100px
        color black
        
    .buttom
      overflow hidden
      li
        margin-right 20px
        padding-bottom 30px
        float left
        width 216px
        height 263px
        &:nth-child(3)
          margin-right 0
        &:nth-child(6)
          margin-right 0
        height
        a
          img
            width 216px
            height 216px
            background #f5f5f5
            display block
            margin-bottom 12px
          .one
            margin-left 10px
            font-size 28px
            color #b4282d
          .two
            font-size 24px
            color #777
            text-decoration line-through
            
          

</style>


