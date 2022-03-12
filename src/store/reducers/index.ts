import {AuthReducer} from "./auth";
import {PlayerReducer} from "./player";
import {UserReducer} from "./user";


const reducers = {
    auth: AuthReducer,
    user: UserReducer,
    player: PlayerReducer,
}

export default reducers