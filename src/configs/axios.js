import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://master-of-notas-back-einyp.ondigitalocean.app/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;