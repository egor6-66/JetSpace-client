export enum ThemeActionTypes {
    SET_THEME = 'SET_THEME',
}

interface setThemeAction {type: ThemeActionTypes.SET_THEME,payload: string}

export type ThemeAction = setThemeAction


