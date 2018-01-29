import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
