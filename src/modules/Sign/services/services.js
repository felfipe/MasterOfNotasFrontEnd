import axios from '@/configs/axios';

const login = async (email,password) => {
    axios.post('/login',{email,password})
}

export default{
    login
}