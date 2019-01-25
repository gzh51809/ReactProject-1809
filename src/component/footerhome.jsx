
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';

import Home from './home/home.jsx';
import Guan from './guan/guan.jsx';
import Cart from './cart/cart.jsx';
import Mine from './mine/mine.jsx';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden:false
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ }}>
       {pageText}
       
          {/* onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }} */}
      </div>
    );
  }
 

  render() {
    return (
      <div style={{position:'fixed',bottom:'0',left:'0',right:'0',width:'100%',height:'100%'}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            onClick={this.handclick}
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
            }}><Icon type="home" /></div>
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
            }}><Icon type="home" /></div>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(<Home></Home>)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
               }}
              ><Icon type="global" /></div>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
              }}
              ><Icon type="global" /></div>
            }
            title="电器馆"
            key="guan"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(<Guan></Guan>)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
               }}><Icon type="shopping-cart" /> </div>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
               }}><Icon type="shopping-cart" /></div>
            }
            title="购物车"
            key="cart"
            badge={'0'}
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent(<Cart></Cart>)}
          </TabBar.Item>
          <TabBar.Item
            icon={ <div style={{
              width: '22px',
              height: '22px',
             }}><Icon type="user"></Icon></div> }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
             }}><Icon type="user"></Icon></div> }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent(<Mine></Mine>)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default TabBarExample;
