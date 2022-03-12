import {bindActionCreators} from "redux";
import {useDispatch } from "react-redux";


import * as AuthActions from "./auth";
import * as UserActions from './user'
import * as PlayerActions from './player'


export const useActions = () => {
    const dispatch = useDispatch()

    const actions = {
        ...AuthActions,
        ...UserActions,
        ...PlayerActions
    }

    return bindActionCreators(actions, dispatch)
};
