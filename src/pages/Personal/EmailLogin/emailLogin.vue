<template>
  <div class="emailLoginWrap">
    <Header/>
    <div class="imgWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <div class="inputWrap">
      <div class="inputBox">
        <input placeholder="邮箱账号" v-model="email"

               name="邮箱账号" v-validate="{required:true,regex:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/}" >
        <i class="iconfont iconqingchu" v-show="email" @click="email=''"></i>
      </div>
      <div class="line"></div>
      <span style="color: red">{{errors.first('邮箱账号')}}</span>
      <div class="inputBox  pwd" >
        <input placeholder="密码"   v-model="pwd"
               name="密码"  v-validate="{required:true,regex:/^.{6,}$/}">
        <i class="iconfont iconqingchu" v-show="pwd" @click="pwd=''"></i>
      </div>
      <div class="line two"></div>
      <span style="color: red">{{errors.first('密码')}}</span>
      <div class="spanWrap" >
        <span class="left">注册账号</span>
        
        <span class="right"> 忘记密码</span>
      </div>
      <div class="loginWarp">
        <div class="Login" @click="login">
          <span>登录</span>
        </div>
        <div class="Login elese"@click="$router.replace('/personal')">
          <span>其他方式登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../Header'
  export default {
    name: "",
    data(){
      return {
        email:'',
        pwd:''
      }
    },
    components:{
      Header
    },
    methods:{
      async login(){
        await this.$validator.validateAll()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .emailLoginWrap
    /*background #F2F5F4*/
    height 100%
    width 100%
    .imgWrap
      text-align center
      margin-top 56px
      margin-bottom 150px
      img
        width 192px
        height 64px
    
    .inputWrap
      padding 0 40px
      
      .inputBox
        position relative
        input
          margin 30px 0
          font-size 30px
          &:focus
             outline none
        i
          font-size 40px
          position absolute
          top 50%
          right 0
          margin-top -20px
      .pwd
        input
          margin 0 0 30px 0
      button
        background white
        width 173px
        height 56px
        color #333
        border-radius 10px
        border 1px solid #7F7F7F
        font-size 28px
        margin-left 100px
      .line
        height 2px
        width 100%
        background-color #7e8c8d
        margin-bottom 30px
      .two
        height 1px
      .spanWrap
        padding  20px  0  50px 0
        overflow hidden
        .left
          float left
          font-size 30px
          color #7e8c8d
        .right
          float right
          font-size 30px
          color black
      .loginWarp
        /*padding 0 40px*/
        margin-bottom 205px
        .Login
          background-color  #b4282d
          text-align center
          font-size 28px
          color #ffff
          height 94px
          line-height 94px
          margin-bottom 32px
        .elese
          background-color #F2F5F4
          border 1px solid #b4282d
          color  #b4282d
     

</style>


