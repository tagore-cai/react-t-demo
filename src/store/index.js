import { createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import reduxLog from "redux-log";
import userInfo from "../reducers/userInfo";

const createRootStore = ()=> {
    let store = createStore(
        combineReducers({
            userInfo
        }),
        applyMiddleware(reduxLog,thunk),
        window.devToolsExtension ? window.devToolsExtension() : f=>f
    )
    return store
}

export default createRootStore;