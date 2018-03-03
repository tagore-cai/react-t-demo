import React, { Component } from 'react';
import Header from "../../components/Header";
import CityList from "./CityList";
import "./index.less";

class CurrentCity extends Component {
    render() {
        return (
            <div className="current-city">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class City extends Component {

    render() {
        return (
            <div>
                <Header>请选择城市</Header>
                <CurrentCity title="北京"></CurrentCity>
                <CityList></CityList>
            </div>
        );
    }
}

export default City;