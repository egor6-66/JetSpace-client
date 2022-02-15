import {API_URL} from '../../constants';
import {AuthAction, AuthActionTypes, AuthResponse, loginUserProps, registerUserProps} from "./models";
import {Dispatch} from "redux";
import axios from "axios";
import {removeToken, saveToken} from "../../services";


export const registerUser = (data: registerUserProps) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.REGISTER_USER})
        const response = await axios.post<AuthResponse>(`${API_URL}/registration`, data)
        saveToken(response.data.accessToken)
        dispatch({type: AuthActionTypes.REGISTER_USER_SUCCESS, payload: response.data.user})
    } catch (e) {
        dispatch({type: AuthActionTypes.REGISTER_USER_ERROR, payload: 'Ошибка при регистрации'})
    }
};

export const loginUser = (data: loginUserProps) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.LOGIN_USER})
        const response = await axios.post<AuthResponse>(`${API_URL}/login`, data)
        saveToken(response.data.accessToken)
        dispatch({type: AuthActionTypes.LOGIN_USER_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: AuthActionTypes.LOGIN_USER_ERROR, payload: 'Ошибка при входе'})
    }
};

export const logout = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        await axios.post<AuthResponse>(`${API_URL}/logout`)
        removeToken()
        dispatch({type: AuthActionTypes.LOGOUT})
    } catch (e) {
        console.log(e)
    }
};

