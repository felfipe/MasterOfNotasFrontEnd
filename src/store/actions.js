import services from "@/modules/Sign/services/services.js";


export default {
    async loginRequest({ commit }, { email, password }) {
        const response = await services.login(email,password)
        commit('setUser',response.data)
    }
}