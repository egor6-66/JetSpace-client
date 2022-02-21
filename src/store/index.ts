import { applyMiddleware, combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    auth: AuthReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>
