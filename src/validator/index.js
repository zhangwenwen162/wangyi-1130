import Vue from 'vue'
import Veevalidata from 'vee-validate'

Vue.use(Veevalidata)


import zh_CN from 'vee-validate/dist/locale/zh_CN'

Veevalidata.Validator.localize('zh_CN',{
  messages:zh_CN.messages,
  attributes:{}
})
