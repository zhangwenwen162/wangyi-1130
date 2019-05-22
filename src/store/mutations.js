import {NAV_LIST,POLICY_DESC_LIST,FLASH_SALE_MODULE,NEW_ITEM_LISt,CATE_GORY_MDULE,
  CATEGORYL1_LIST,SEARCH_LIST,IDENTIFYING_LIST,IDENTIFYING_MONDEL} from './mutation-types'
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
  [CATEGORYL1_LIST](state,categoryL1List ){
    state. categoryL1List=categoryL1List
  },
  [SEARCH_LIST](state,searchList ){
    state.searchList=searchList
  },
  [IDENTIFYING_LIST](state,IdentifyingList ){
    state.IdentifyingList=IdentifyingList
  },
  [IDENTIFYING_MONDEL](state,IdentifyingMondel ){
    state.IdentifyingMondel=IdentifyingMondel
  },
}
export default mutations
