import Vue from 'vue'
export default {
    setUser(state, user) {
        state.user = user
        window.localStorage.setItem('token',user.token)
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
    }
}