import Mock from  'mockjs'
import data  from './homeData.json'
import categoryData from './category'
//商品导航
Mock.mock('/homeNav',{code:0,data:data.kingKongModule})
// console.log(1111)
//服务策略
Mock.mock('/policyDescList',{code:0,data:data.policyDescList})
// 限时购
Mock.mock('/flashSaleModule',{code:0,data:data.flashSaleModule})
//新品首发
Mock.mock('/newItemList',{code:0,data:data.newItemList})
Mock.mock('/categoryModule',{code:0,data:data.categoryModule})
Mock.mock('/categoryL1List',{code:0,data:categoryData.categoryL1List})

