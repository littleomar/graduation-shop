import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

import InBox from './comp/Content/message.js'
import About from './comp/Content/about.js'
import MyHeader from "./comp/Header/index.js";
// import InBox from "./comp/Content/inbox.js";
import AppStyles from './App.module.css'
import logoImg from './statics/logo.png';
import codea from './statics/footer_code1.jpg';
import codeb from './statics/footer_code2.jpg';
import ig from './statics/beian.png';


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
              <Menu.Item key="3"><Link to='/inbox'>首页</Link></Menu.Item>
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
        <div className={AppStyles.footer}>
          <div className={AppStyles.main_width}>
              <div className={AppStyles.codea}>
               <img src={codea}/>
               <span>官方微信服务号</span>
              </div>
                <div>
                  <ul className={AppStyles.sub}>
                    <li>
                      关于我们
                      <ul>
                        <li>11</li>
                      </ul>
                    </li>
                    <li>
                      联系我们
                      <ul>
                        <li>22</li>
                      </ul>
                    </li>
                    <li>
                     用户须知
                      <ul>
                        <li>33</li>
                      </ul>
                   </li>
                  </ul>
                </div>
               <div className={AppStyles.codee}>
                  <img src={codeb}/>
                  <span>官方微信订阅号</span>
               </div>
            <div className={AppStyles.copyright}>
              "金宝贝(天津)教育信息咨询有限公司上海分公司"<br/>
              <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402005955">
                <img className={AppStyles.ig} src={ig}/>"泸工网安备  31010402005955号"
              </a>
              <span className={AppStyles.j}>泸ICP备12016779号-9</span>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
