import {Dispatch} from "redux";
import {UserModels} from '../models'


export const setTheme = (theme: string) => (dispatch: Dispatch<UserModels.Actions>) =>{
    dispatch({type: UserModels.ActionsTypes.SET_THEME, payload: theme})
}
