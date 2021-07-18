import Vue from 'vue'
import VueRouter from 'vue-router'
import SignView from '@/modules/Sign/SignView.vue'
import MainView from '@/modules/main/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: SignView
  },
  {
    path: '/',
    name: 'home',
    component: MainView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
