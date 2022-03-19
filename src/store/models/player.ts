export enum ActionsTypes {
    SET_PLAYING = 'SET_PLAYING',
    SET_VOLUME = 'SET_VOLUME',
    SET_IS_VISIBLE_SOUND_MODAL = 'SET_IS_VISIBLE_SOUND_MODAL',
}


interface setPlayingAction {type: ActionsTypes.SET_PLAYING,payload: boolean}
interface setVolume {type: ActionsTypes.SET_VOLUME,payload: number}
interface setIsVisibleSoundModal {type: ActionsTypes.SET_IS_VISIBLE_SOUND_MODAL,payload: boolean}


export type Actions =
    setPlayingAction |
    setIsVisibleSoundModal |
    setVolume
    ;

