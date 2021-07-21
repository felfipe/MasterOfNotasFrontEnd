import axios from '@/configs/axios';

const login = async (email, senha) => {
    const response = await axios.post('/auth', { email, senha })
    return response
}
const signUp = async (email, nome,senha,tipo) => {
    const response = await axios.post('/signUp', { email, nome, senha,tipo  })
    return response
}
const getDisciplines = async () => {
    const response = await axios.get('/listarDisciplinas')
    return response
}
const getDiscipline = async (id) => {
    const response = await axios.get(`/listarDisciplina?idDisciplina=${id}`)
    return response
}
const addDiscipline = async(nome,sigla) =>{
    const response = await axios.post('/criarDisciplina',{nome,sigla})
    return response
}
const updateDiscipline = async(id,nome,sigla) => {
    const response = await axios.post('/atualizarDisciplina',{id,nome,sigla})
    return response
}
const getStudents = async() => {
    const response = await axios.get('/listarAlunos',{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
    return response
}
const addStudentToDiscipline = async(disciplinaId,alunosId) => {
    const response = await axios.post('/setAlunosDisciplina', {disciplinaId,alunosId})
    return response
}
const removeDiscipline = async(idDisciplina) => {
    const response = await axios.post('/deletarDisciplina', {idDisciplina})
    return response
}
const getQuestions = async (enqueteId) => {
    const response = await axios.get(`/listarQuestoes?enqueteId=${enqueteId}`)
    return response
}
const getQuizbyId = async (idEnquete) => {
    const response = await axios.get(`/listarEnqueteById?idEnquete=${idEnquete}`)
    return response
}
const addQuiz = async(nome,disciplinaId,quantidade, ativo) =>{
    const response = await axios.post('/criarEnquete',{nome,disciplinaId, quantidade,ativo})
    return response
}
const getQuizs = async () => {
    const response = await axios.get('/listarEnquetes')
    return response
}
export default {
    login,
    signUp,
    getDisciplines,
    getDiscipline,
    addDiscipline,
    updateDiscipline,
    getStudents,
    addStudentToDiscipline,
    removeDiscipline,
    getQuestions,
    getQuizbyId,
    addQuiz,
    getQuizs
}