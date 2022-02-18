import {API_URL} from '../../constants';
import {AuthAction, AuthActionTypes, AuthResponse, loginUserProps, registerUserProps} from "./models";
import {Dispatch} from "redux";
import axios from "axios";
import {removeToken, saveToken} from "../../services/cookies-customs";
import $axios from "../../services/axios-customs";


export const registerUser = (data: registerUserProps) => async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionTypes.REGISTER_USER})
    try {
        const response = await $axios.post<AuthResponse>(`${API_URL}/registration`, data)
        saveToken(response.data.accessToken)
        dispatch({type: AuthActionTypes.REGISTER_USER_SUCCESS, payload: response.data.user})
        return 'success'
    } catch (e) {
        dispatch({type: AuthActionTypes.REGISTER_USER_ERROR, payload: 'Ошибка при регистрации'})
    }
};

export const loginUser = (data: loginUserProps) => async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionTypes.LOGIN_USER})
    try {
        const response = await $axios.post<AuthResponse>(`${API_URL}/login`, data)
        saveToken(response.data.accessToken)
        dispatch({type: AuthActionTypes.LOGIN_USER_SUCCESS, payload: response.data.user})
        return response.data.user.id
    } catch (e) {
        dispatch({type: AuthActionTypes.LOGIN_USER_ERROR, payload: 'Ошибка при входе'})
    }
};

export const logout = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        await $axios.post(`${API_URL}/logout`)
        dispatch({type: AuthActionTypes.LOGOUT})
        await removeToken()
        window.location.href = '/'
    } catch (e) {
        console.log(e)
    }
};

export const checkAuth = () => async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionTypes.CHECK_AUTH})
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        dispatch({type: AuthActionTypes.CHECK_AUTH_SUCCESS, payload: response.data.user})
        saveToken(response.data.accessToken)
    } catch (e) {
        dispatch({type: AuthActionTypes.CHECK_AUTH_ERROR, payload: 'Вы не авторизованы'})
    }
};


