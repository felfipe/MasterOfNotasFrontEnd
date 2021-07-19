import services from "@/modules/Sign/services/services.js";


export default {
    async loginRequest({ commit }, { email, password }) {
        const response = await services.login(email, password)
        commit('setUser', response.data)
    },
    async signUpRequest({ commit }, { email, username, password, type }) {
        const response = await services.signUp(email, username, password, type.toUpperCase())
        commit('setUser', response.data)
    }
}