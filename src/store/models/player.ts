export enum ActionsTypes {
    SET_PLAYING = 'SET_PLAYING',
}


interface setPlayingAction {type: ActionsTypes.SET_PLAYING,payload: boolean}


export type Actions =
    setPlayingAction
    ;

