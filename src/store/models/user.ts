export enum ActionsTypes {
    SET_THEME = 'SET_THEME',
}

interface setThemeAction {type: ActionsTypes.SET_THEME,payload: string}

export type Actions =
    setThemeAction


