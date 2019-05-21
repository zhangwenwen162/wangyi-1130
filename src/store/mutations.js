import {NAV_LIST,POLICY_DESC_LIST,FLASH_SALE_MODULE,NEW_ITEM_LISt,CATE_GORY_MDULE} from './mutation-types'
const mutations={
  [NAV_LIST](state,naveList){
    state.navList=naveList
  },
  [POLICY_DESC_LIST](state,policyDescList){
    state. policyDescList=policyDescList
  },
  [FLASH_SALE_MODULE](state,flashSaleModule ){
    state. flashSaleModule=flashSaleModule
  },
  [NEW_ITEM_LISt](state,newItemList ){
    state. newItemList=newItemList
  },
  [CATE_GORY_MDULE](state,categoryModules ){
    state. categoryModules=categoryModules
  },


}
export default mutations
