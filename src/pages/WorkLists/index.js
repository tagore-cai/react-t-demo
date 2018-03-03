import React, { Component } from 'react';
import Header from "../../components/Header";
import "./style.less";
class WorkLists extends Component {
    render() {
        return (
            <div class="work-list-wapper">
                <Header>职位列表</Header>
                <div>
                    <ul>
                        <li className="list-item clear-fix">
                            <img src="//static.lagou.com/i/image/M00/54/31/CgpEMll4bayAfOV7AAAeSuy3bJc944.jpg" alt=""/>
                            <div className="item-desc clear-fix">
                                <h2>啦啦啦啦</h2>
                                <p className="clear-fix desc">
                                    <span className="float-left">111</span>
                                    <span className="float-right">222</span>
                                </p>
                                <p>333</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default WorkLists;