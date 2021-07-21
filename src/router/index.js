import Vue from 'vue'
import VueRouter from 'vue-router'
import SignView from '@/modules/Sign/SignView.vue'
import MainView from '@/modules/main/MainView.vue'
import DisciplineList from '@/modules/ProfessorDisciplines/DisciplinesList.vue'
import DisciplineAdd from '@/modules/ProfessorDisciplines/DisciplineAddEdit.vue'
import DisciplineStudent from '@/modules/ProfessorDisciplines/DisciplineStudent.vue'
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
    component: MainView,
    children: [
      {
        path:'disciplines',
        name: 'disciplines',
        component: DisciplineList
      },
      {
        path:'add-discipline',
        name: 'add-discipline',
        component: DisciplineAdd
      },
      {
        path:'update-discipline/:id',
        name: 'update-discipline',
        component: DisciplineAdd
      },
      {
        path:'student-discipline/:id',
        name: 'student-discipline',
        component: DisciplineStudent
      }
    ]
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
