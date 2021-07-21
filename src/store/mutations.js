import Vue from 'vue'
export default {
    setUser(state, user) {
        state.user = user
        localStorage.setItem('token',user.token)
        localStorage.setItem('user',JSON.stringify(user))
    },
    setDisciplines(state,disciplines){
        state.disciplines = disciplines
    },
    addDiscipline(state,discipline){
        state.disciplines.push(discipline)
    },
    updateDiscipline(state,discipline){
        const index = state.disciplines.findIndex(dis => dis.id == discipline.id)
        Vue.set(state.disciplines,index,discipline)
    },
    setStudents(state, students) {
        state.students = students
    },
    removeDiscipline(state,disciplineid){
        state.disciplines.splice(state.disciplines.indexOf(disciplineid),1)
    },
    setQuestions(state,questions){
        state.questions = questions
    },
    addQuiz(state,quiz){
        state.quizs.push(quiz)
    },
    setQuizs(state,quizs){
        state.quizs = quizs
    },
}