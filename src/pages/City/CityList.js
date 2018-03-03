import React, { Component } from 'react';

class CityList extends Component {
    static cityList = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津',
    '重庆', '厦门', '武汉', '郑州'];
    render() {
        return (
            <div className="city-list-content">
                <h2>热门城市</h2>
                <ul>
                    {CityList.cityList.map((item,index)=>{
                        return (<li><span oncClick={this.props.onClick}>{item}</span></li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default CityList;