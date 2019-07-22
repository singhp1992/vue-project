import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Nav/HelloWorld'
import Home from '@/components/Nav/Home'
import Categories from '@/components/Nav/Categories'
import Random from '@/components/Nav/Random'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
