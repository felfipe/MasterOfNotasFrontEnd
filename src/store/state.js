export default {
    user: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : {},
    disciplines: [],
    students: [],
    questions: [],
    quizs: [],
    responseQuiz: localStorage.getItem('responseQuiz')? JSON.parse(localStorage.getItem('responseQuiz')) : [],
}