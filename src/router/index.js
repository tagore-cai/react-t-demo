import React, { Component } from 'react';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import Home from "../pages/Home";
import City from "../pages/City";
import WorkLists from "../pages/WorkLists";
class rootRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} ></Route>
                    <Route path="/workLists" component={WorkLists} ></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="*" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default rootRouter;