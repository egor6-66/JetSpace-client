import {PlayerModels} from "../models";


import {IPlayer} from "../../models/player-model";

const initialState: IPlayer  = {
    playing: false,
    isVisibleSoundModal: false,
    location: null,
    soundVolume: 1,
    voiceMessageVolume: 1,
    sounds: null,
}

export const PlayerReducer = (state = initialState, action: PlayerModels.Actions): IPlayer => {
    switch (action.type) {
        case PlayerModels.ActionsTypes.SET_PLAYING:
            return {
                ...state,
                playing: action.payload
            };
        case PlayerModels.ActionsTypes.SET_SOUND_VOLUME:
            return {
                ...state,
                soundVolume: action.payload
            };
        case PlayerModels.ActionsTypes.SET_VOICE_MESSAGE_VOLUME:
            return {
                ...state,
                voiceMessageVolume: action.payload
            };
        case PlayerModels.ActionsTypes.SET_SOUNDS_LIST:
            return {
                ...state,
                sounds: action.payload
            };
        case PlayerModels.ActionsTypes.SET_IS_VISIBLE_SOUND_MODAL:
            return {
                ...state,
                isVisibleSoundModal: action.payload
            };
        case PlayerModels.ActionsTypes.SET_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        default :
            return state
    }
};
