import axios, {AxiosRequestConfig} from "axios";
import Cookies from 'universal-cookie';
import {API_URL} from "../constants";

const cookies = new Cookies();

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token =  cookies.get('access_token');
    config.headers!.Authorization = `Bearer ${token}`
    return config
});

export default $api;
