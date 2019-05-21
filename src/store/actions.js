import {NAV_LIST,POLICY_DESC_LIST,FLASH_SALE_MODULE,NEW_ITEM_LISt,CATE_GORY_MDULE} from './mutation-types'
import {homeNav,policyDescList,flashSaleModule,newItemList,categoryModule} from '../api'
const actions={
  async getNaveList({commit}){
    const res=await homeNav ();
    if(res.code===0){
      commit(NAV_LIST,res.data.kingKongList)
      console.log(res.data.kingKongList)
    }else {
      console.log('获取数据失败')
    }
  },
  async getPolicyDescList({commit}){
    const res=await policyDescList ();
    if(res.code===0){
      commit(POLICY_DESC_LIST,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getflashSaleModule({commit}){
    const res=await flashSaleModule ();
    if(res.code===0){
      commit(FLASH_SALE_MODULE,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getnewItemList({commit}){
    const res=await newItemList ();
    if(res.code===0){
      commit(NEW_ITEM_LISt,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getcategoryModule({commit}){
    const res=await categoryModule ();
    if(res.code===0){
      commit(CATE_GORY_MDULE,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  }
}
export default actions
