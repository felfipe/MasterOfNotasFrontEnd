import Vue from 'vue'
import VueRouter from 'vue-router'
import SignView from '@/modules/Sign/SignView.vue'
import MainView from '@/modules/main/MainView.vue'
import QuizView from '@/modules/Quiz/QuizView.vue'

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
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
