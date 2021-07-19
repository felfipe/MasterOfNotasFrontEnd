import axios from '@/configs/axios';

const login = async (email, senha) => {
    const response = await axios.post('/auth', { email, senha })
    return response
}
const signUp = async (email, nome,senha,tipo) => {
    const response = await axios.post('/signUp', { email, nome, senha,tipo  })
    return response
}

export default {
    login,
    signUp
}