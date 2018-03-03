import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./index.less";
class Header extends Component {

    constructor(props, context) {
        super(props, context)
        this.handleClick =  this.handleClick.bind(this)
        this.state = {
            backUrl: ''
        }
    }

    handleClick(){
        if (this.props.backUrl) {
            this.setState({
                backUrl : this.props.backUrl
            })
        } else {
            window.history.back()
        }
    }

    render() {
        return this.state.backUrl ? <Redirect to={this.state.backUrl}/>: (
            <div className="common-header">
                <span onClick={this.handleClick} >
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

export default Header;