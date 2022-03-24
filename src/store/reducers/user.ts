import {AuthModels, UserModels} from "../models";
import {IUser} from "../../models/user-model";


const initialState: IUser = {
    id: '',
    email: '',
    name: '',
    lastName: '',
    theme: '',
    isActivated: false,
}

export const UserReducer = (state = initialState, action: AuthModels.Actions | UserModels.Actions): IUser => {
    switch (action.type) {

        case UserModels.ActionsTypes.SET_THEME:
            return {...state, theme: action.payload}

        case AuthModels.ActionsTypes.REGISTER_USER_SUCCESS:
            return {...state, ...action.payload};

        case AuthModels.ActionsTypes.LOGIN_USER_SUCCESS:
            return {...state, ...action.payload};

        case AuthModels.ActionsTypes.CHECK_AUTH_SUCCESS:
            return {...state, ...action.payload};

        default :
            return state
    }
};
