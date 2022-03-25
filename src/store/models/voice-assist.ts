export enum ActionsTypes {
    SET_ACTIVE_VOICE_ASSIST = 'SET_ACTIVE_VOICE_ASSIST',
    SET_PARAMS_SETTINGS = 'SET_PARAMS_SETTINGS',
    SET_VOICE_RESPONSE = 'SET_VOICE_RESPONSE',
}

interface setVoiceAssist {type: ActionsTypes.SET_ACTIVE_VOICE_ASSIST,payload: boolean}
interface setParamsSettings {type: ActionsTypes.SET_PARAMS_SETTINGS,payload: any}
interface setVoiceResponse {type: ActionsTypes.SET_VOICE_RESPONSE,payload: string}

export type Actions =
    setVoiceAssist |
    setParamsSettings |
    setVoiceResponse


