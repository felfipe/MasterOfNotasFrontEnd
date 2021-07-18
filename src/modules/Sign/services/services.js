import axios from '@/configs/axios';

const login = async (username,password) => {
    const response = await axios.post('/auth',{username,password})
    return response
}   

export default{
    login
}