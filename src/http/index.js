import axios from "axios";

export const API_URL = "https://localhost:5000/api"

const $api = axios.create({
    withCredentials: true,
    baseURL:API_URL
})
//цепляем токен на каждый запрос (011802)
$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
//014157
$api.interceptors.response.use((config)=>{
    return config;
}, (async (error)=>{
    const originRequest = error.config;
    if(error.response.status == 401 && error.config && !error.config._isRetry){
        originRequest._isRetry = true;
        try{
            const response = await axios.get(`${API_URL}/refresh`,{withCredentials:true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originRequest);
        }
        catch(e){
            console.log(e, "Пользователь не авторизован")
        }
    }
    throw error;
}))


export const WS_URL = "ws://localhost:5000/"
const $ws = axios.create({
    withCredentials: true,
    baseURL:WS_URL
})

export default $api;