import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Portfolio from '@/components/portfolio'
import MakeupVideos from '@/components/makeupvideos'
import Contact from '@/components/contact'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/makeupVideos',
      name: 'makeupVideos',
      component: MakeupVideos
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
