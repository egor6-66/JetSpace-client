import {CurrentUserModels} from "../models";
import {IUser} from "../../models/user-model";


const initialState: IUser = {
    id: '',
    email: '',
    name: '',
    lastName: '',
    avatar: '',
    likeCounter: '',
    dislikeCounter: '',
    subscriptions: [],
    subscribers: [],
    theme: '',
    instagram: '',
    facebook: '',
    twitter: '',
    spotify: '',
    telegram: '',
    github: '',
    soundCloud: '',
    youTube: '',
    isActivated: false,
}

export const currentUserReducer = (state = initialState, action: CurrentUserModels.Actions ): IUser => {
    switch (action.type) {

        case CurrentUserModels.ActionsTypes.GER_USER:
            return {...state,  ...action.payload}

        default :
            return state
    }
};
