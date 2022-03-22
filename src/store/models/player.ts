import {ISounds} from "../../models/sounds-model";

export enum ActionsTypes {
    SET_PLAYING = 'SET_PLAYING',
    SET_VOLUME = 'SET_VOLUME',
    SET_SOUNDS_LIST = 'SET_SOUNDS_LIST',
    SET_IS_VISIBLE_SOUND_MODAL = 'SET_IS_VISIBLE_SOUND_MODAL',
    SET_LOCATION = 'SET_LOCATION',
}


interface setPlayingAction {type: ActionsTypes.SET_PLAYING,payload: boolean}
interface setVolume {type: ActionsTypes.SET_VOLUME,payload: number}
interface setSoundsList {type: ActionsTypes.SET_SOUNDS_LIST,payload: ISounds}
interface setIsVisibleSoundModal {type: ActionsTypes.SET_IS_VISIBLE_SOUND_MODAL,payload: boolean}
interface setLocation {type: ActionsTypes.SET_LOCATION,payload: string}

export type Actions =
    setPlayingAction |
    setIsVisibleSoundModal |
    setVolume |
    setSoundsList |
    setLocation
    ;

