export enum OtherActionTypes {
    SET_THEME = 'SET_THEME',
}


interface setThemeAction {type: OtherActionTypes.SET_THEME,payload: string}


export type OtherAction =
    setThemeAction
    ;

