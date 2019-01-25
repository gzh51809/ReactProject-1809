import React, { Component } from 'react';




import TabBarExample from './component/footerhome.jsx';


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
       <TabBarExample/>
      </div>
    );
  } 
}

export default App;
