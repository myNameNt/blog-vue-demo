// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import Axios from 'axios'

import requestInterceptor from './untils/interceptor/request-interceptor'
import responseInterceptor from './untils/interceptor/response-interceptor'

import '../static/element-variables.sass' // element默认样式
import 'normalize.css/normalize.css' // 清楚默认样式
import './assets/css/index.scss' // 自己的风格修改后的样式表

Vue.use(Element, { size: 'small' })
Vue.config.lang = 'zh-cn'
Vue.config.devtools = true // 用来控制当前为开发环境还是正式环境
Vue.config.productionTip = false

// axios拦截
requestInterceptor.config(Axios)
responseInterceptor.config(Axios, store, router)

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth === true) {
    if (localStorage.getItem('token').length) {
      next()
    } else {
      const login = {path: '/login', query: {msg: '没有检测到token'}}
      next(login)
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
