import MyMain from './mymain'
import {routes as main} from './main'
export default [
  {
    path: '/',
    component: MyMain,
    meta: {
      requireAuth: false
    }
  },
  ...main
]
