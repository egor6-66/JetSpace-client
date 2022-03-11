import {bindActionCreators} from "redux";
import {useDispatch } from "react-redux";


import * as AuthActions from "./auth/actions";
import * as ThemeActions from './theme/actions'

export const useActions = () => {
    const dispatch = useDispatch()

    const actions = {
        ...AuthActions,
        ...ThemeActions
    }

    return bindActionCreators(actions, dispatch)
};
