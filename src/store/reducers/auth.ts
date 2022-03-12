import {AuthModels} from "../models";


const initialState: AuthModels.IState = {
    isAuth: false,
    loading: false,
    error: null,
}

export const AuthReducer = (state = initialState, action: AuthModels.Actions): AuthModels.IState => {
    switch (action.type) {
        case AuthModels.ActionsTypes.REGISTER_USER:
            return {...state, loading: true};

        case AuthModels.ActionsTypes.REGISTER_USER_SUCCESS:
            return {...state, isAuth: true, loading: false};

        case AuthModels.ActionsTypes.REGISTER_USER_ERROR:
            return {...state, error: action.payload, loading: false};

        case AuthModels.ActionsTypes.LOGIN_USER:
            return {...state, loading: true};

        case AuthModels.ActionsTypes.LOGIN_USER_SUCCESS:
            return {...state, isAuth: true, loading: false,};

        case AuthModels.ActionsTypes.LOGIN_USER_ERROR:
            return {...state, error: action.payload, loading: false,};

        case AuthModels.ActionsTypes.CHECK_AUTH:
            return {...state, loading: true};

        case AuthModels.ActionsTypes.CHECK_AUTH_SUCCESS:
            return {...state, isAuth: true, loading: false,};

        case AuthModels.ActionsTypes.CHECK_AUTH_ERROR:
            return {...state, isAuth: false, error: action.payload, loading: false}

        case AuthModels.ActionsTypes.LOGOUT:
            return {...state, isAuth: false,}

        default :
            return state
    }
};
