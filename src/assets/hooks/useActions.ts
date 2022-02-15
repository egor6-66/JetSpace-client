import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthAction  from "../../store/auth/actions";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthAction, dispatch)
};
