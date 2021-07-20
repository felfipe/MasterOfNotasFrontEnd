import services from "@/modules/Sign/services/services.js";


export default {
    async loginRequest({ commit }, { email, password }) {
        const response = await services.login(email, password)
        commit('setUser', response.data)
    },
    async signUpRequest({ commit }, { email, username, password, type }) {
        const response = await services.signUp(email, username, password, type.toUpperCase())
        commit('setUser', response.data)
    },
    async getDisciplinesRequest({commit}){
        const response = await services.getDisciplines()
        commit('setDisciplines', response.data)
    },
    async getDisciplineRequest({commit},{id}){
        const response = await services.getDiscipline(id);
        return response.data
    },
    async addDisciplineRequest({commit},{name,initials}){
        const response = await services.addDiscipline(name,initials)
        commit('addDiscipline', {id: response.data.id, name, initials})
    },
    async updateDisciplineRequest({commit},{id,name,initials}){
        await services.updateDiscipline(id,name,initials)
        commit('updateDiscipline', {id, name, initials})
    },
}