import {Dispatch} from "redux";
import {PlayerModels} from '../models'
import {ISounds} from "../../models/sounds-model";


export const setPlaying = (playing: boolean) => (dispatch: Dispatch<PlayerModels.Actions>) =>{
    dispatch({type: PlayerModels.ActionsTypes.SET_PLAYING, payload: playing})
}

export const setIsVisibleSoundModal = (playing: boolean) => (dispatch: Dispatch<PlayerModels.Actions>) =>{
    dispatch({type: PlayerModels.ActionsTypes.SET_IS_VISIBLE_SOUND_MODAL, payload: playing})
}

export const setLocation = (playing: string) => (dispatch: Dispatch<PlayerModels.Actions>) =>{
    dispatch({type: PlayerModels.ActionsTypes.SET_LOCATION, payload: playing})
}

export const setVolume = (playing: number) => (dispatch: Dispatch<PlayerModels.Actions>) =>{
    dispatch({type: PlayerModels.ActionsTypes.SET_VOLUME, payload: playing})
}

export const setSoundsList = (playing: ISounds) => (dispatch: Dispatch<PlayerModels.Actions>) =>{
    dispatch({type: PlayerModels.ActionsTypes.SET_SOUNDS_LIST, payload: playing})
}
