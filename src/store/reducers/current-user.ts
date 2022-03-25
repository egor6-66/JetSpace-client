import {CurrentUserModels} from "../models";
import {ICurrentUser} from "../../models/current-user";


const initialState: ICurrentUser = {
    id: '',
    email: '',
    name: '',
    lastName: '',
    avatar: '',
    likeCounter: '0',
    dislikeCounter: '0',
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
}

export const CurrentUserReducer = (state = initialState, action: CurrentUserModels.Actions): ICurrentUser => {
    switch (action.type) {
        case CurrentUserModels.ActionsTypes.GER_USER:
            return {...state, ...action.payload}

        case CurrentUserModels.ActionsTypes.ADD_LIKE:
            return {
                ...state, likeCounter: (+state.likeCounter + 1).toString()}

        case CurrentUserModels.ActionsTypes.ADD_DISLIKE:
            return {
                ...state, dislikeCounter: (+state.dislikeCounter + 1).toString()}

        case CurrentUserModels.ActionsTypes.REMOVE_LIKE:
            return {...state, likeCounter: (+state.likeCounter - 1).toString(),}

        case CurrentUserModels.ActionsTypes.REMOVE_DISLIKE:
            return {...state, dislikeCounter: (+state.dislikeCounter - 1).toString(),}

        default :
            return state
    }
};
