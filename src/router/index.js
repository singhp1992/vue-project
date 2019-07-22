import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/nav/Home'
import Categories from '@/components/nav/Categories'
import Random from '@/components/nav/Random'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/random',
      name: 'Random',
      component: Random
    }
  ]
})
