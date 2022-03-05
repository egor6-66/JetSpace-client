import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AuthActions from "../../store/auth/actions";
import * as OtherActions from '../../store/other/actions'


export const useActions = () => {
    const dispatch = useDispatch()

    const actions = {...AuthActions, ...OtherActions}

    return bindActionCreators(actions, dispatch)
};
