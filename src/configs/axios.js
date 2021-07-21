import axios from 'axios'
import router from '@/router'
const instance = axios.create({
    baseURL: 'https://master-of-notas-back-einyp.ondigitalocean.app/',
    headers: {'X-Custom-Header': 'foobar'}
});
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) config.headers.accesstoken =  token;
    return config;
});
instance.interceptors.response.use(response => {
    return response;
 }, error => {
   if (error.response.status === 403) {//Verificar se o erro é 401 msm
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push({name:'login'})
   }
   return error;
 });
export default instance;