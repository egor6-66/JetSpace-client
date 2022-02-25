import {OtherAction, OtherActionTypes} from "./models";
import {Dispatch} from "redux";


export const getNotification = (data: any) => async (dispatch: Dispatch<OtherAction>) => {
    dispatch({type: OtherActionTypes.GET_NOTIFICATION, payload: data})
};

export const clearNotification = () => async (dispatch: Dispatch<OtherAction>) => {
    dispatch({type: OtherActionTypes.CLEAR_NOTIFICATION})
};

