import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RootRouter from './router';
import { Provider } from "react-redux";
import createRootStore from "./store";
import Loading from "./pages/Loading";
import "./static/css/index.less";

const store = createRootStore()
const render = (Component)=>{
    ReactDOM.render(
        <Provider store={store}>
            <Loading>
                <Component></Component>
            </Loading>
        </Provider>,
        document.getElementById('root')
    )
}
render(RootRouter)
registerServiceWorker();
