import ajax from './ajax'
export const homeNav = () => ajax('/homeNav')
export const policyDescList=()=>ajax('/policyDescList')
export const flashSaleModule=()=>ajax('/flashSaleModule')
export const newItemList=()=>ajax('/newItemList')
export const categoryModule=()=>ajax('/categoryModule')
export const categoryL1List=()=>ajax('/categoryL1List')
export const searchList=(keywordPrefix)=>ajax('/api/xhr/search/searchAutoComplete.json',{keywordPrefix})

export const IdentifyingList=()=>ajax('/api/topic/v1/find/getTabs.json')
export const IdentifyingMondel=()=>ajax('/api/topic/v1/find/recManual.json')

