import {ISounds} from "../../models/sounds-model";

export enum ActionsTypes {
    SET_PLAYING = 'SET_PLAYING',
    SET_SOUND_VOLUME = 'SET_SOUND_VOLUME',
    SET_VOICE_MESSAGE_VOLUME = 'SET_VOICE_MESSAGE_VOLUME',
    SET_SOUNDS_LIST = 'SET_SOUNDS_LIST',
    SET_IS_VISIBLE_SOUND_MODAL = 'SET_IS_VISIBLE_SOUND_MODAL',
    SET_LOCATION = 'SET_LOCATION',
}


interface setPlayingAction {type: ActionsTypes.SET_PLAYING,payload: boolean}
interface setSoundVolume {type: ActionsTypes.SET_SOUND_VOLUME,payload: number}
interface setVoiceMessageVolume {type: ActionsTypes.SET_VOICE_MESSAGE_VOLUME,payload: number}
interface setSoundsList {type: ActionsTypes.SET_SOUNDS_LIST,payload: ISounds}
interface setIsVisibleSoundModal {type: ActionsTypes.SET_IS_VISIBLE_SOUND_MODAL,payload: boolean}
interface setLocation {type: ActionsTypes.SET_LOCATION,payload: string}

export type Actions =
    setPlayingAction |
    setIsVisibleSoundModal |
    setSoundVolume |
    setVoiceMessageVolume |
    setSoundsList |
    setLocation
    ;

