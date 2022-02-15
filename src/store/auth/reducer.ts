import {
    AuthState,
    AuthActionTypes,
    AuthAction,
} from "./models";

const initialState: AuthState = {
    isAuth: false,
    user: {},
    successRegister: false,
    successLogin: false,
    loading: false,
    error: null,
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.REGISTER_USER:
            return {
                ...state,
                loading: true
            };
        case AuthActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.payload,
                successRegister: true,
                loading: false,
            };
        case AuthActionTypes.REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case AuthActionTypes.LOGIN_USER:
            return {
                ...state,
                loading: true
            };
        case AuthActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.payload,
                successLogin: true,
                loading: false,
            };
        case AuthActionTypes.LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                isAuth: false,
                user: {},
            }
        default :
            return state
    }
};
