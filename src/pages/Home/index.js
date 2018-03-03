import React, { Component } from 'react';
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./style.less";

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header>主页</Header>
                <Link to="/city">城市</Link>
                <Link to="/workLists">职位列表</Link>
            </div>
        );
    }
}

export default Home;