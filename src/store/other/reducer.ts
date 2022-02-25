import {
    OtherAction,
    OtherActionTypes,
    OtherState
} from "./models";


export const initialState: OtherState = {
    notifications: [],
}

export const OtherReducer = (state = initialState, action: OtherAction): OtherState => {
    switch (action.type) {
        case OtherActionTypes.GET_NOTIFICATION:
            return {
                ...state,
                notifications: [action.payload, ...state.notifications],
            };
        case OtherActionTypes.CLEAR_NOTIFICATION:
            return {
                ...state,
                notifications: [],
            };
        default :
            return state
    }
};
