export enum PlayerActionTypes {
    SET_PLAYING = 'SET_PLAYING',
}


interface setPlayingAction {type: PlayerActionTypes.SET_PLAYING,payload: boolean}


export type PlayerAction =
    setPlayingAction
    ;

