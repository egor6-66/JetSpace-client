import {Dispatch} from "redux";
import {CurrentUserModels} from '../models'


export const getUser = (data: any) => (dispatch: Dispatch<CurrentUserModels.Actions>) =>{
    dispatch({type: CurrentUserModels.ActionsTypes.GER_USER, payload: data})
}

export const addLike = () => (dispatch: Dispatch<CurrentUserModels.Actions>) =>{
    dispatch({type: CurrentUserModels.ActionsTypes.ADD_LIKE})
}

export const addDislike = () => (dispatch: Dispatch<CurrentUserModels.Actions>) =>{
    dispatch({type: CurrentUserModels.ActionsTypes.ADD_DISLIKE})
}

export const removeLike = () => (dispatch: Dispatch<CurrentUserModels.Actions>) =>{
    dispatch({type: CurrentUserModels.ActionsTypes.REMOVE_LIKE})
}

export const removeDislike = () => (dispatch: Dispatch<CurrentUserModels.Actions>) =>{
    dispatch({type: CurrentUserModels.ActionsTypes.REMOVE_DISLIKE})
}
