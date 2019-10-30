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
  const copyArr = [
    {
      title: '关于我们',
      content: [
        {
          text: '全球网络',
          url: 'www.baidu.com'
        },
        {
          text: '品牌介绍',
          url: 'www.baidu.com'
        },
        {
          text: '课程介绍',
          url: 'www.baidu.com'
        }
      ]
    },
    {
      title: '关于我们',
      content: [
        {
          text: '全球网络',
          url: 'www.baidu.com'
        },
        {
          text: '品牌介绍',
          url: 'www.baidu.com'
        },
        {
          text: '课程介绍',
          url: 'www.baidu.com'
        }
      ]
    },
    {
      title: '关于我们',
      content: [
        {
          text: '全球网络',
          url: 'www.baidu.com'
        },
        {
          text: '品牌介绍',
          url: 'www.baidu.com'
        },
        {
          text: '课程介绍',
          url: 'www.baidu.com'
        }
      ]
    }
  ];
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
          <div className={AppStyles.footerWrapper}>
            <div className={AppStyles.footerLeft}>
              {
                copyArr.map(item => (
                  <dl className={AppStyles.crItem}>
                    <dt className={AppStyles.crTitle}>{item.title}</dt>
                    {
                      item.content.map(subItem => (
                        <dd className={AppStyles.crText}><a href={subItem.url}>{subItem.text}</a></dd>
                      ))
                    }
                  </dl>
                ))
              }

            </div>
            <div className={AppStyles.footerRight}>二维码</div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
