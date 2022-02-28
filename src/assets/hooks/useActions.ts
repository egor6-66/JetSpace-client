import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AuthAction from "../../store/auth/actions";
import * as OtherAction from '../../store/other/actions'


export const useActions = () => {
    const dispatch = useDispatch()

    const actions = {...AuthAction, ...OtherAction}

    return bindActionCreators(actions, dispatch)
};
