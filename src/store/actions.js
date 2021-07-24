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
        commit('addDiscipline', {id: response.data.id, nome:name, sigla:initials})
    },
    async updateDisciplineRequest({commit},{id,name,initials}){
        await services.updateDiscipline(id,name,initials)
        commit('updateDiscipline', {id, name, initials})
    },
    async getStudentsRequest({commit}){
        const response = await services.getStudents()
        commit('setStudents', response.data)
    },
    async addStudentToDisciplineRequest({commit},{disciplineID, studentsID}){
        console.log(studentsID)
        await services.addStudentToDiscipline(disciplineID,studentsID)
    },
    async removeDisciplineRequest({commit},{disciplineID}){
        await services.removeDiscipline(disciplineID)
        commit('removeDiscipline', disciplineID)
    },
    async getQuestionsRequest({commit}, id){
        const response = await services.getQuestions(id)
        commit('setQuestions', response.data)
    },
    async getQuizbyId({commit},id){
        const response = await services.getQuizbyId(id)
        return response.data;
    },
    async addQuizRequest({commit},{name, amount, discipline,active}){
        const response = await services.addQuiz(name,discipline,amount,active)
        commit('addQuiz', {id: response.data.id, nome:name, quantidade:amount,ativo:active,disciplinaid:discipline})
    },
    async addQuestionToQuizRequest({commit},{id,title,alternatives}){
        const response = await services.addQuestionToQuiz(id,title,alternatives)
        return response.data
        //commit('addQuiz', {id: response.data.id, nome:name, quantidade:amount,ativo:active,disciplinaid:discipline})
    },
    async getQuizQuestionsRequest({commit},id){
        const response = await services.getQuizQuestions(id)
        return response
        //commit('setQuizs', response.data)
    },
    async getQuizsRequest({commit}){
        const response = await services.getQuizs()
        commit('setQuizs', response.data)
    },
    async addResponseQuiz({commit},{enqueteId,responseQuiz}){
        console.log(commit, enqueteId, responseQuiz)
        const response = await services.postResponseQuiz(enqueteId, responseQuiz)
        return response;
    },
    async getDisciplinasMatriculadas({commit}){
        const response = await services.getDisciplinasAluno()
        return response.data;
    },

}