import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Loading extends Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
          initDone: false
      }
  }
  componentDidMount(){
    setTimeout(()=>{
        this.setState({
          initDone:true
      })
    },1000)

  }
  render() {
    return (<div>{ this.state.initDone ? this.props.children : <p>加载中...</p>}</div>)
  }
}

export default Loading;





