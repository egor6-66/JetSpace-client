import {Dispatch} from "redux";
import {CurrentUserModels} from '../models'


export const getUser = (data: any) => (dispatch: Dispatch<CurrentUserModels.Actions>) =>{
    dispatch({type: CurrentUserModels.ActionsTypes.GER_USER, payload: data})
}

