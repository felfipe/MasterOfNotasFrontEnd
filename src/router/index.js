import Vue from 'vue'
import VueRouter from 'vue-router'
import SignView from '@/modules/Sign/SignView.vue'
import MainView from '@/modules/main/MainView.vue'
import Perfil from '@/modules/Perfil/Perfil.vue'
import DisciplineList from '@/modules/ProfessorDisciplines/DisciplinesList.vue'
import DisciplineAdd from '@/modules/ProfessorDisciplines/DisciplineAddEdit.vue'
import DisciplineStudent from '@/modules/ProfessorDisciplines/DisciplineStudent.vue'
import QuizView from '@/modules/Quiz/QuizView.vue'
import QuestQuiz from '@/modules/Quiz/components/QuestQuiz.vue'

import QuizAddEdit from '@/modules/ProfessorQuiz/QuizAddEdit.vue'
import QuizAddQuestion from '@/modules/ProfessorQuiz/QuizAddQuestion.vue'
import QuizList from '@/modules/ProfessorQuiz/QuizList.vue'
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
        path:'',
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
      },
      {
        path:'perfil/',
        name: 'perfil',
        component: Perfil
      },

      {
        path:'quiz',
        name: 'quiz-menu',
        component: QuizList
      },
      {
        path:'add-quiz',
        name: 'add-quiz',
        component: QuizAddEdit
      },
      {
        path:'update-quiz',
        name: 'update-quiz',
        component: DisciplineAdd
      },
      
      {
        path:'question-quiz',
        name: 'question-quiz',
        component: QuizAddQuestion
      }
    ]
  },
  {
    path: '/quiz/:quizid',
    name: 'quiz',
    component: QuizView,
    children: [
      {
        path: 'question/:questionid',
        name: 'question-quiz',
        component: QuestQuiz
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
