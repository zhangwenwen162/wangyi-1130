import {NAV_LIST,POLICY_DESC_LIST,FLASH_SALE_MODULE,NEW_ITEM_LISt,CATE_GORY_MDULE,
  CATEGORYL1_LIST,SEARCH_LIST,IDENTIFYING_LIST,IDENTIFYING_MONDEL} from './mutation-types'
import {homeNav,policyDescList,flashSaleModule,newItemList,categoryModule,categoryL1List,searchList,IdentifyingList,IdentifyingMondel} from '../api'
const actions={
  async getNaveList({commit}){
    const res=await homeNav ();
    if(res.code===0){
      commit(NAV_LIST,res.data.kingKongList)
    }else {
      console.log('获取数据失败')
    }
  },
  async getPolicyDescList({commit}){
    const res=await policyDescList ();
    if(res.code===0){
      commit(POLICY_DESC_LIST,res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getflashSaleModule({commit}){
    const res=await flashSaleModule ();
    if(res.code===0){
      commit(FLASH_SALE_MODULE,res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getnewItemList({commit}){
    const res=await newItemList ();
    if(res.code===0){
      commit(NEW_ITEM_LISt,res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getcategoryModule({commit}){
    const res=await categoryModule ();
    console.log(1111)
    if(res.code===0){
      commit(CATE_GORY_MDULE,res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getcategoryL1List({commit}){

    const res=await categoryL1List ();
    if(res.code===0){
      commit(CATEGORYL1_LIST,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getsearchList({commit},text){

    const res=await searchList (text);
    console.log(res)
    if(res.code==="200"){
      commit(SEARCH_LIST,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getIdentifyingList({commit}){

    const res=await IdentifyingList ();
    console.log(res)
    if(res.code==="200"){
      commit(IDENTIFYING_LIST,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
  async getIdentifyingMondel({commit}){

    const res=await IdentifyingMondel ();
    console.log(res)
    if(res.code==="200"){
      commit(IDENTIFYING_MONDEL,res.data)
      console.log(res.data)
    }else {
      console.log('获取数据失败')
    }
  },
}
export default actions
