import axios from '@/configs/axios';

const login = async (email, senha) => {
    const response = await axios.post('/auth', { email, senha })
    return response
}
const signUp = async (email, nome, senha, tipo) => {
    const response = await axios.post('/signUp', { email, nome, senha, tipo })
    return response
}
const getDisciplines = async () => {
    const response = await axios.get('/listarDisciplinas')
    return response
}
const getDiscipline = async (id) => {
    const response = await axios.get(`/listarDisciplina?disciplinaId=${id}`)
    return response
}
const addDiscipline = async (nome, sigla) => {
    const response = await axios.post('/criarDisciplina', { nome, sigla })
    return response
}
const updateDiscipline = async (id, nome, sigla) => {
    const response = await axios.post('/atualizarDisciplina', { id, nome, sigla })
    return response
}
const getStudents = async () => {
    const response = await axios.get('/listarAlunos', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return response
}
const addStudentToDiscipline = async (disciplinaId, alunosId) => {
    const response = await axios.post('/setAlunosDisciplina', { disciplinaId, alunosId })
    return response
}
const removeDiscipline = async (disciplinaId) => {
    const response = await axios.post('/deletarDisciplina', { disciplinaId })
    return response
}
const getQuestions = async (enqueteId) => {
    const response = await axios.get(`/listarQuestoes?enqueteId=${enqueteId}`)
    return response
}
const getQuizbyId = async (enqueteId) => {
    const response = await axios.get(`/listarEnqueteById?enqueteId=${enqueteId}`)
    return response
}
const addQuiz = async (nome, disciplinaId, quantidade, ativo) => {
    const response = await axios.post('/criarEnquete', { nome, disciplinaId, quantidade, ativo })
    return response
}
const getQuizs = async () => {
    const response = await axios.get('/listarEnquetes')
    return response
}
const addQuestionToQuiz = async (enqueteId, enunciado, alternativas) => {
    const response = await axios.post('/criarQuestao', { enqueteId, enunciado, alternativas })
    return response
}
const getQuizQuestions = async (enqueteId) => {
    const response = await axios.get(`/listarQuestoesQuestionario?questionarioId=${enqueteId}`)
    return response
}
const postResponseQuiz = async (enqueteId, respostas) => {
    const response = await axios.post('/responderEnquete', { enqueteId, respostas })
    return response.status
}
const getDisciplinasAluno = async () => {
    const response = await axios.get('/listarDisciplinasMatriculadas')
    return response
}
const removeQuizQuestion = async (questionarioId, questaoId) => {
    const response = await axios.post('/deletarQuestao', { questionarioId, questaoId })
    return response
}
const startQuiz = async (enqueteId) => {
    const response = await axios.post('/iniciarEnquete', { enqueteId })
    return response
}
const finishQuiz = async (enqueteId) => {
    const response = await axios.post('/encerrarEnquete', { enqueteId })
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
    getQuizs,
    addQuestionToQuiz,
    getQuizQuestions,
    postResponseQuiz,
    getDisciplinasAluno,
    removeQuizQuestion,
    startQuiz,
    finishQuiz,
}