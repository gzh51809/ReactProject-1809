import React, { Component } from 'react';

// 引入ant-design-Ui
import { Menu, Icon } from 'antd';


// import {Home,Guan,Cart,Mine} from './component/';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      menu:[
        {
          text:'首页',
          name:'home',
          path:'/home',
          icon:'home'
        },{
          text:'电器馆',
          name:'guan',
          path:'/guan',
          icon:'home'
        },{
          text:'世纪购',
          name:'shiji',
          path:'/shiji',
          icon:'home'
        },{
          text:'购物车',
          name:'cart',
          path:'/cart',
          icon:'cart'
        },{
          text:'我的',
          name:'mine',
          path:'/mine',
          icon:'mine'
        }],
      current:'/home'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({item,key,keypath}){
    this.setState({
      current:key
    });
  }
  
  render() {
    return (
      <div className="App">
        <ul className="homelist">
          {this.state.menu.map(item=>{
            return <li>{item.text}</li>
          })}
          
        </ul>
      </div>
    );
  } 
}

export default App;
