import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

import InBox from './comp/Content/message.js'
import About from './comp/Content/about.js'
import MyHeader from "./comp/Header/index.js";
// import InBox from "./comp/Content/inbox.js";
import AppStyles from './App.module.css'
import logoImg from './statics/logo.png'


const { Header, Content } = Layout;

// 主页
function App() {
  return (
      <BrowserRouter>
        <Layout className="layout">
          <Header className={AppStyles.header}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item className={AppStyles.menuItem2}>
                <div className={AppStyles.logo}>
                  <img className={AppStyles.logoImg} src={logoImg} alt="aaa"/>
                </div>
              </Menu.Item>
              <Menu.Item key="1" className={AppStyles.menuItem1}><Link to='/'>nav 1</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/about'>about</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/inbox'>inbox</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className={AppStyles.content}>
            <Switch>
              <Route path="/about">
                <MyHeader />
              </Route>
              <Route path="/inbox">
                <InBox />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <div className={AppStyles.hello}> aaaaaaa</div>
      </BrowserRouter>
  );
}

export default App;
