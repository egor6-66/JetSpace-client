import axios from "axios";
import {Dispatch} from "redux";
import {AuthModels} from "../models";
import {removeToken, saveToken} from "../../services/cookies";
import $axios from "../../services/axios-customs";
import {API_URL} from '../../constants';


export const registerUser = (data: any) => async (dispatch: Dispatch<AuthModels.Actions>) => {
    dispatch({type: AuthModels.ActionsTypes.REGISTER_USER})
    try {
        const response = await $axios.post<any>(`${API_URL}/registration`, data)
        saveToken(response.data.accessToken)
        dispatch({type: AuthModels.ActionsTypes.REGISTER_USER_SUCCESS, payload: response.data.user})
        return 'success'
    } catch (e) {
        dispatch({type: AuthModels.ActionsTypes.REGISTER_USER_ERROR, payload: 'Ошибка при регистрации'})
    }
};

export const loginUser = (data: any) => async (dispatch: Dispatch<AuthModels.Actions>) => {
    dispatch({type: AuthModels.ActionsTypes.LOGIN_USER})
    try {
        const response = await $axios.post<any>(`${API_URL}/login`, data)
        saveToken(response.data.accessToken)
        dispatch({type: AuthModels.ActionsTypes.LOGIN_USER_SUCCESS, payload: response.data.user})
        return response.data.user.id
    } catch (e) {
        dispatch({type: AuthModels.ActionsTypes.LOGIN_USER_ERROR, payload: 'Ошибка при входе'})
    }
};

export const logout = (id: any) => async (dispatch: Dispatch<AuthModels.Actions>) => {
    try {
        await $axios.post(`${API_URL}/logout`, {userId: id})
        dispatch({type: AuthModels.ActionsTypes.LOGOUT})
        await removeToken()
        window.location.href = '/'
    } catch (e) {
        console.log(e)
    }
};

export const checkAuth = () => async (dispatch: Dispatch<AuthModels.Actions>) => {
    dispatch({type: AuthModels.ActionsTypes.CHECK_AUTH})
    try {
        const response = await axios.get<any>(`${API_URL}/refresh`, {withCredentials: true})
        dispatch({type: AuthModels.ActionsTypes.CHECK_AUTH_SUCCESS, payload: response.data.user})
        saveToken(response.data.accessToken)
    } catch (e) {
        dispatch({type: AuthModels.ActionsTypes.CHECK_AUTH_ERROR, payload: 'Вы не авторизованы'})
    }
};

