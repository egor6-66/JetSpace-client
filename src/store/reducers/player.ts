import {PlayerModels} from "../models";


import {IPlayer} from "../../models/player-model";

const initialState: IPlayer  = {
    playing: false
}

export const PlayerReducer = (state = initialState, action: PlayerModels.Actions): IPlayer => {
    switch (action.type) {
        case PlayerModels.ActionsTypes.SET_PLAYING:
            return {
                ...state,
                playing: action.payload
            };
        default :
            return state
    }
};
