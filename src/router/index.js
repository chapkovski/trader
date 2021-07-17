import Vue from 'vue'
import VueRouter from 'vue-router'

import Work from '../views/Work.vue'
import Start from '../views/Start.vue'
import Trade from '../views/Trade.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Start',
    component: Start
  },
 
  {
    path: '/trade',
    name: 'Trade',
    component: Trade,
     
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Work.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
