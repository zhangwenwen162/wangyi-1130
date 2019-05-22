<template>
  <div class="phoneWrap">
    <Header/>
    <div class="imgWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <div class="inputWrap">
      <div class="inputBox">
        <input placeholder="请输入手机号" v-model="phone"
               name="手机号" v-validate="{required:true,regex:/^1\d{10}$/}">
        <i class="iconfont iconqingchu" v-show="phone" @click="phone=''"></i>
      </div>
      <div class="line"></div>
      <span style="color: red">{{errors.first('手机号')}}</span>
      <div class="inputBox" >
        <input placeholder="请输入短信验证"
               name="验证码"  v-validate="{required:true,regex:/^1\d{6}$/}">
        <button :class="{btn:isPhone}" :disabled="!isPhone || computeTime>0 " @click="sendCode">{{computeTime>0 ? `已发送${computeTime}s` : '获取验证码'}}</button>
      </div>
    
      <div class="line two"></div>
      <span style="color: red" >{{errors.first('验证码')}}</span>
      <div class="inputBox  pwd" >
        <input placeholder="请输入密码"   v-model="pwd"  name="密码"  v-validate="{required:true,regex:/^.{6,}$/}">
        <i class="iconfont iconqingchu" v-show="pwd" @click="pwd=''"></i>
      </div>
      <div class="line two"></div>
      <span style="color: red" >{{errors.first('密码')}}</span>
      <div class="loginWarp">
        <div class="Login" @click="login">
          <span>注册</span>
        </div>
        <div class="text">
          <input type="checkbox" />
          <span > 我同意</span>
          <span class="blue"> 《服务条款》</span>
          <span> 和</span>
          <span class="blue"> 《网易隐私政策》</span>
        </div>
        <div class="register">
          
         
        
            <span>邮箱账号注册</span>
            <i class="iconfont iconxiaoyuhao"></i>
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
     return{
       phone:'',
       pwd:'',
       computeTime:0
     }
    },
    components:{
      Header
    },
    computed:{
      isPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      sendCode(){
        this. computeTime=30
        const IntervalId=setInterval(()=>{
          this. computeTime--
          if(this. computeTime===0){
            clearInterval(IntervalId)
          }
        },1000)
      },
      async login(){
        await this.$validator.validateAll()
      }
    },
   
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .phoneWrap
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
      .btn
        color black
        border 1px solid #000
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
        .text
          input
            width 34px
            height: 34px
            font-size 28px
            vertical-align middle
          .blue
            color #007AFF
        .register
          text-align center
          margin-top 50px
          font-size 28px
         
          

</style>


