import HomePage from '../pages/HomePage/ HomePage'
import Classifi from '../pages/Classifi/classifi'
import Identifying  from '../pages/Identifying/Identifying'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Personal from '../pages/Personal/personal'
import Discover from '../pages/Identifying/discover/discover'
import Select from '../pages/Identifying/select/select'
import PhoneLogin from '../pages/Personal/login/PhoneLogin'
import EmailLogin from '../pages/Personal/EmailLogin/emailLogin'
import PhoneRegister from  '../pages/Personal/PhoneRegister/phoneRegister'
import Search from  '../pages/Search/search'
const routes= [
  {
    path: '/homePage',
    component: HomePage,
    meta:{
      isShow:true
    }
  },
  {
    path: '/classifi',
    component: Classifi,
    meta:{
      isShow:true
      }
  },
  {
    path: '/identifying',
    component: Identifying,
    meta:{
      isShow:true
    },
    children:[
      {
        path: '/identifying/discover',
        component: Discover,
        meta:{
          isShow:true
        }
      },
      { path: '/identifying/select',
        component: Select,
        meta:{
          isShow:true
        }
      },
      {
        path:'/identifying',
        redirect: '/identifying/discover'
      },

    ]

  },
  {
    path: '/shoppingCart',
    component: ShoppingCart,
    meta:{
      isShow:true
    }
  },
  {
    path: '/personal',
    component: Personal,
  },

  { path: '/phoneLogin',
    component: PhoneLogin,
  },
  { path: '/emailLogin',
    component: EmailLogin,
  },
  {
    path: '/phoneRegister',
    component: PhoneRegister,
  },
  {
    path:'/search',
    component: Search,
  },
  {
    path:'/',
    redirect: '/homePage'
  },

]


export default routes
