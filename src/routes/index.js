import HomePage from '../pages/HomePage/ HomePage'
import Classifi from '../pages/Classifi/classifi'
import Identifying  from '../pages/Identifying/Identifying'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Personal from '../pages/Personal/personal'
import Discover from '../pages/Identifying/discover/discover'
import Select from '../pages/Identifying/select/select'
const routes= [{
  path: '/homePage',
  component: HomePage,
},
  {
    path: '/classifi',
    component: Classifi,
 },
  {
    path: '/identifying',
    component: Identifying,
    children:[{ path: '/Identifying/discover',
      component: Discover,
    },
      { path: '/identifying/select',
        component: Select,
      },]
  },
  {path: '/shoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/personal',
    component: Personal,
  },
  {
    path:'',
    redirect: '/homePage'
  }
]


export default routes
