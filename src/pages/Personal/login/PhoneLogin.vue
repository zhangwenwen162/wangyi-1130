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
        <div class="inputBox" v-show="!isShow">
           <input placeholder="请输入短信验证"
            name="验证码"  v-validate="{required:true,regex:/^1\d{6}$/}">
           <button :class="{btn:isPhone}" :disabled="!isPhone || computeTime>0 " @click="sendCode">{{computeTime>0 ? `已发送${computeTime}s` : '获取验证码'}}</button>
       </div>
        <div class="inputBox  pwd" v-show="isShow" >
         <input placeholder="请输入密码" type="password" v-model="pwd"
                name="密码"  v-validate="{required:true,regex:/^.{6,}$/}">
          <i class="iconfont iconqingchu" v-show="pwd" @click="pwd=''"></i>
       </div>
        <div class="line "></div>
       <span style="color: red" v-show="!isShow">{{errors.first('验证码')}}</span>  <span style="color: red" v-show="isShow">{{errors.first('密码')}}</span>
        <div class="spanWrap" v-show="!isShow">
          <span class="left">遇到的问题?</span>
          
          <span class="right" @click="handel"> 使用密码验证登陆</span>
        </div>
       <div class="spanWrap" v-show="isShow" >
         <span class="left">忘记密码?</span>
    
         <span class="right" @click="handel"> 使用短信验证码登陆</span>
       </div>
        <div class="loginWarp">
         <div class="Login" @click="login">
           <span>登录</span>
         </div>
         <div class="Login elese"@click="$router.replace('/personal')">
           <span>其他方式登录</span>
         </div>
         <div class="register">
           <span>注册账号</span>
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
        isShow:false,
        phone:'',
        computeTime:0,
        pwd:''
      }
    },
    components:{
      Header
    },
    methods:{
      handel(){
        this.isShow=!this.isShow
  },
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
    computed:{
      isPhone(){
         return /^1\d{10}$/.test(this.phone)
      }
    }
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
      
      .inputBox
        position relative
        .btn
          color black
          border 1px solid #000
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
          height 1.5px
          width 100%
          background-color #7e8c8d
          margin-bottom 30px
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
        .register
          text-align center
          
</style>


