import {Dispatch} from "redux";
import {VoiceAssistModels} from '../models'


export const setActiveVoiceAssist = (isActive: boolean) => (dispatch: Dispatch<VoiceAssistModels.Actions>) =>{
    dispatch({type: VoiceAssistModels.ActionsTypes.SET_ACTIVE_VOICE_ASSIST, payload: isActive})
}

export const setParamsSettings = (data: any) => (dispatch: Dispatch<VoiceAssistModels.Actions>) =>{
    dispatch({type: VoiceAssistModels.ActionsTypes.SET_PARAMS_SETTINGS, payload: data})
}

export const setVoiceResponse = (text: string) => (dispatch: Dispatch<VoiceAssistModels.Actions>) =>{
    dispatch({type: VoiceAssistModels.ActionsTypes.SET_VOICE_RESPONSE, payload: text})
}
