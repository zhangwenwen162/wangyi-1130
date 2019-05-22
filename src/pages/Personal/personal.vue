<template>
  <div class="personalWrap">
    <Header/>
    <div class="content">
      <div class="imgWrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="login">
        <div class="phone-emilELogin" @click="$router.replace('/phoneLogin')">
          <i class="iconfont iconshouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="phone-emilELogin emile" @click="$router.replace('/emailLogin')">
          <i class="iconfont icontubiao209"></i>
          <span>邮箱账号登录</span>
        </div>
         <div class="register" @click="$router.replace('/phoneRegister')">
           <span>手机号快捷注册</span>
           <i class="iconfont iconxiaoyuhao"></i>

         </div>
      </div>
      <div class="thirdWrap">
        <a href="javascript:" class="weChat">
          <i class="iconfont iconweixin"></i>
           <span>微信</span>
        </a>
         <span>|</span>
        <a  href="javascript:" class="qq">
          <i class="iconfont iconqq"></i>
          <span>QQ</span>
        </a>
        <span>|</span>
        <a  href="javascript:" class="microblog">
          <i class="iconfont iconweibo"></i>
          <span>微博</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './Header'
  export default {
    name: "",
    components:{
      Header,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personalWrap
    background #F2F5F4
    height 100%
    width 100%
    z-index 1000
   
    .content
      .imgWrap
         text-align center
         padding-top 160px
         padding-bottom 160px
         img
           width 268px
           height 90px
    
      .login
         padding 0 40px
         margin-bottom 205px
         .phone-emilELogin
           background-color  #b4282d
           text-align center
           font-size 28px
           color #ffff
           /*vertical-align middle*/
           height 94px
           line-height 94px
           margin-bottom 32px
           i
             vertical-align middle
             font-size 40px
             margin-left 10px
           span
             vertical-align middle
         .emile
             background-color #F2F5F4
             border 1px solid #b4282d
             color  #b4282d
         .register
             text-align center
             i
               font-size 30px
  
      .thirdWrap
         margin-top 50px
         text-align center
         a
          margin 0 30px
          span
            font-size 28px
            vertical-align middle
          i
            font-size 40px
            vertical-align middle

</style>


