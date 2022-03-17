import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants";
import { getToken, saveToken } from "./cookies";


const $axios = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token =  getToken();
    config.headers!.Authorization = `Bearer ${token}`
    return config
});

$axios.interceptors.response.use((config: AxiosRequestConfig) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
       try {
           const response = await axios.get<any>(`${API_URL}/refresh`, {withCredentials: true})
           saveToken(response.data.accessToken)
           return $axios.request(originalRequest)
       }catch (e){
           window.location.href = '/';
       }
    }else {
        throw error
    }
});

export default $axios;
