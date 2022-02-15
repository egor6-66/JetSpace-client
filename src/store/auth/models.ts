import {IUser} from "../../models/IUser";

export enum AuthActionTypes {
    REGISTER_USER = 'GET_USER',
    REGISTER_USER_SUCCESS = 'GET_USER_SUCCESS',
    REGISTER_USER_ERROR = 'GET_USER_ERROR',
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    LOGOUT = 'LOGOUT'
}

export interface AuthState {
    isAuth: boolean,
    user: IUser | any,
    successRegister: boolean,
    successLogin: boolean,
    loading: boolean,
    error: string | null,
}

export interface registerUserProps {
    name: string,
    email: string,
    password: string,
}

export interface loginUserProps {
    email: string,
    password: string,
}

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser,
}

interface registerUserAction {type: AuthActionTypes.REGISTER_USER,}
interface registerUserSuccessAction {type: AuthActionTypes.REGISTER_USER_SUCCESS,payload: {}}
interface registerUserErrorAction {type: AuthActionTypes.REGISTER_USER_ERROR,payload: string}

interface loginUserAction {type: AuthActionTypes.LOGIN_USER,}
interface loginSuccessAction {type: AuthActionTypes.LOGIN_USER_SUCCESS,payload: {}}
interface loginErrorAction {type: AuthActionTypes.LOGIN_USER_ERROR,payload: string}

interface logoutAction {type: AuthActionTypes.LOGOUT,}


export type AuthAction =
    registerUserAction |
    registerUserSuccessAction |
    registerUserErrorAction |
    loginUserAction |
    loginSuccessAction |
    loginErrorAction |
    logoutAction;
