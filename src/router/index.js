import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '../app/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return {x: 0, y: 0}
    }
  }
})
