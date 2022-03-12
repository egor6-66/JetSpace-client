export interface IState {
    isAuth: boolean,
    loading: boolean,
    error: string | null,
}

export enum ActionsTypes {
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

interface registerAction {type: ActionsTypes.REGISTER_USER}
interface registerSuccessAction {type: ActionsTypes.REGISTER_USER_SUCCESS,payload: {}}
interface registerErrorAction {type: ActionsTypes.REGISTER_USER_ERROR,payload: string}

interface loginAction {type: ActionsTypes.LOGIN_USER}
interface loginSuccessAction {type: ActionsTypes.LOGIN_USER_SUCCESS,payload: {}}
interface loginErrorAction {type: ActionsTypes.LOGIN_USER_ERROR,payload: string}

interface checkAuthAction {type: ActionsTypes.CHECK_AUTH}
interface checkAuthSuccessAction {type: ActionsTypes.CHECK_AUTH_SUCCESS,payload: {}}
interface checkAuthErrorAction {type: ActionsTypes.CHECK_AUTH_ERROR,payload: string}

interface logoutAction {type: ActionsTypes.LOGOUT,}


export type Actions =
    registerAction |
    registerSuccessAction |
    registerErrorAction |
    loginAction |
    loginSuccessAction |
    loginErrorAction |
    checkAuthAction |
    checkAuthSuccessAction |
    checkAuthErrorAction |
    logoutAction
