import {Dispatch} from "redux";
import {PlayerModels} from '../models'


export const setPlaying = (playing: boolean) => (dispatch: Dispatch<PlayerModels.Actions>) =>{
    dispatch({type: PlayerModels.ActionsTypes.SET_PLAYING, payload: playing})
}

