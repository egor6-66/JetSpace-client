import {AuthReducer} from "./auth";
import {PlayerReducer} from "./player";
import {UserReducer} from "./user";
import {CurrentUserReducer} from "./current-user";
import {VoiceAssistReducer} from './voice-assist';


const reducers = {
    auth: AuthReducer,
    user: UserReducer,
    currentUser: CurrentUserReducer,
    player: PlayerReducer,
    voiceAssist: VoiceAssistReducer,
}

export default reducers