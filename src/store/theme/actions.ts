import {Dispatch} from "redux";
import {ThemeAction, ThemeActionTypes} from "./models";


export const setTheme = (theme: string) => (dispatch: Dispatch<ThemeAction>) =>{
    dispatch({type: ThemeActionTypes.SET_THEME, payload: theme})
}

