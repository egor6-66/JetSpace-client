interface IUserAuth{
    id: string,
    email: string,
    name: string,
    theme: string,
    isActivated: boolean,
}

export interface AuthState {
    isAuth: boolean,
    user: IUserAuth | any,
    loading: boolean,
    error: string | null,
}

export enum AuthActionTypes {
    REGISTER_USER = 'GET_USER',
    REGISTER_USER_SUCCESS = 'GET_USER_SUCCESS',
    REGISTER_USER_ERROR = 'GET_USER_ERROR',
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    CHECK_AUTH = 'CHECK_AUTH',
    CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS',
    CHECK_AUTH_ERROR = 'CHECK_AUTH_ERROR',
    LOGOUT = 'LOGOUT'
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
    user: IUserAuth,
}

interface registerAction {type: AuthActionTypes.REGISTER_USER,}
interface registerSuccessAction {type: AuthActionTypes.REGISTER_USER_SUCCESS,payload: {}}
interface registerErrorAction {type: AuthActionTypes.REGISTER_USER_ERROR,payload: string}

interface loginAction {type: AuthActionTypes.LOGIN_USER,}
interface loginSuccessAction {type: AuthActionTypes.LOGIN_USER_SUCCESS,payload: {}}
interface loginErrorAction {type: AuthActionTypes.LOGIN_USER_ERROR,payload: string}

interface checkAuthAction {type: AuthActionTypes.CHECK_AUTH,}
interface checkAuthSuccessAction {type: AuthActionTypes.CHECK_AUTH_SUCCESS,payload: {}}
interface checkAuthErrorAction {type: AuthActionTypes.CHECK_AUTH_ERROR,payload: string}

interface logoutAction {type: AuthActionTypes.LOGOUT,}


export type AuthAction =
    registerAction |
    registerSuccessAction |
    registerErrorAction |
    loginAction |
    loginSuccessAction |
    loginErrorAction |
    checkAuthAction |
    checkAuthSuccessAction |
    checkAuthErrorAction |
    logoutAction;
