import {Dispatch} from "redux";
import {OtherAction, OtherActionTypes} from "./models";


export const setTheme = (theme: string) => (dispatch: Dispatch<OtherAction>) =>{
    dispatch({type: OtherActionTypes.SET_THEME, payload: theme})
}

