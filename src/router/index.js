import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'count',
      component: count
    }
  ]
})
