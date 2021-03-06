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
import QuizQuestions from '@/modules/ProfessorQuiz/QuizQuestions.vue'
import GradeList from '@/modules/ProfessorQuiz/GradeList.vue'

import AlunoDisciplinas from '@/modules/AlunoDisciplinas/AlunoDisciplinaView.vue'
import AlunoQuizDisciplinasView from '@/modules/AlunoQuizDisciplinas/AlunoQuizDisciplinasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: SignView
  },
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '',
        name: 'home',
        component: DisciplineList
      },
      {
        path: 'add-discipline',
        name: 'add-discipline',
        component: DisciplineAdd
      },
      {
        path: 'update-discipline/:id',
        name: 'update-discipline',
        component: DisciplineAdd
      },
      {
        path: 'student-discipline/:id',
        name: 'student-discipline',
        component: DisciplineStudent
      },
      {
        path: 'perfil/',
        name: 'perfil',
        component: Perfil
      },

      {
        path: 'quiz',
        name: 'quiz-menu',
        component: QuizList
      },
      {
        path: 'add-quiz',
        name: 'add-quiz',
        component: QuizAddEdit
      },
      {
        path: 'update-quiz',
        name: 'update-quiz',
        component: DisciplineAdd
      },
      {
        path: 'questions-quiz-professor/:id',
        name: 'questions-quiz-professor',
        component: QuizQuestions
      },
      {
        path: 'grade-quiz/:id',
        name: 'grade-quiz-professor',
        component: GradeList
      },
      {
        path: 'question-quiz-professor/:id',
        name: 'question-quiz-professor',
        component: QuizAddQuestion
      },
      {
        path: 'aluno/disciplinas',
        name: 'disciplinas-aluno',
        component: AlunoDisciplinas
      },
      {
        path: 'aluno/disciplinas/:disciplinaId',
        name: 'quiz-disciplinas-aluno',
        component: AlunoQuizDisciplinasView
      },
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
