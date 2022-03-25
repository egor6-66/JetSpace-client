export enum ActionsTypes {
    SET_THEME = 'SET_THEME',
}

interface setTheme {type: ActionsTypes.SET_THEME,payload: string}

export type Actions =
    setTheme



