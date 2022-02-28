export enum OtherActionTypes {
    SET_THEME = 'SET_THEME',
}

export interface themeProps {
    theme: String
}

interface setThemeAction {type: OtherActionTypes.SET_THEME, payload: String}

export type OtherAction =
    setThemeAction ;

