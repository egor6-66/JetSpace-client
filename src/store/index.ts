import {applyMiddleware, combineReducers, createStore} from "redux";
import { TypedUseSelectorHook, useSelector} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";


const rootReducer = combineReducers({...reducers});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

