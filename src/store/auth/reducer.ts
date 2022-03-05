import {AuthAction, AuthActionTypes, AuthState,} from "./models";
import {OtherAction, OtherActionTypes} from "../other/models";

const initialState: AuthState = {
    isAuth: false,
    user: {},
    loading: false,
    error: null,
}

export const AuthReducer = (state = initialState, action: AuthAction | OtherAction): AuthState => {
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
                loading: false,
            };
        case AuthActionTypes.LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case AuthActionTypes.CHECK_AUTH:
            return {
                ...state,
                loading: true
            };
        case AuthActionTypes.CHECK_AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.payload,
                loading: false,
            };
        case AuthActionTypes.CHECK_AUTH_ERROR:
            return {
                ...state,
                isAuth: false,
                error: action.payload,
                loading: false,
            }
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                isAuth: false,
                user: {},
            }

        case OtherActionTypes.SET_THEME:
            return {
                ...state,
                user: {
                    ...state.user,
                    theme: action.payload
                }
            }
        default :
            return state
    }
};
