import {AuthReducer} from "./auth";
import {PlayerReducer} from "./player";
import {UserReducer} from "./user";
import {currentUserReducer} from "./current-user";


const reducers = {
    auth: AuthReducer,
    user: UserReducer,
    currentUser: currentUserReducer,
    player: PlayerReducer,
}

export default reducers