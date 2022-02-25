import {applyMiddleware, combineReducers, createStore} from "redux";
import {AuthReducer} from "./auth/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {OtherReducer} from "./other/reducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    other: OtherReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>
