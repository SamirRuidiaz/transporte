import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/platfrom/dashboard.vue'
import Drivers from '../views/platfrom/drivers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/platform/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/platform/drivers',
    name: 'drivers',
    component: Drivers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
