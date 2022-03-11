// import {AuthAction, AuthActionTypes, AuthState,} from "./models";
// import {OtherAction, OtherActionTypes} from "../theme/models";

import {IPlayer} from "../../models/player-models";

const initialState: IPlayer  = {
    playing: false
}
//
// export const AuthReducer = (state = initialState, action: AuthAction | OtherAction): AuthState => {
//     switch (action.type) {
//         case AuthActionTypes.REGISTER_USER:
//             return {
//                 ...state,
//                 loading: true
//             };
//         default :
//             return state
//     }
// };
