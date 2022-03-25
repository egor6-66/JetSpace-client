import {VoiceAssistModels} from "../models"
import {IVoiceAssist} from "../../models/voice-assist";


const initialState: IVoiceAssist = {
    isActivated: false,
    name: '',
    voiceResponse: '',
}

export const VoiceAssistReducer = (state = initialState, action: VoiceAssistModels.Actions): IVoiceAssist => {
    switch (action.type) {

        case VoiceAssistModels.ActionsTypes.SET_ACTIVE_VOICE_ASSIST:
            return {...state, isActivated: action.payload};

        case VoiceAssistModels.ActionsTypes.SET_PARAMS_SETTINGS:
            return {...state,  ...action.payload};

        case VoiceAssistModels.ActionsTypes.SET_VOICE_RESPONSE:
            return {...state, voiceResponse: action.payload};


        default :
            return state
    }
};
