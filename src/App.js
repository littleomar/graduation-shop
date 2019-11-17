import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Route, Link, BrowserRouter, Switch, Index } from 'react-router-dom'

import InBox from './comp/Content/message.js'
import About from './comp/Content/about.js'
import MyHeader from "./comp/Header/index.js";
import InBoxa from "./comp/Content/inbox.js";
import Course from './comp/course/content';
import Tea from './comp/Teacher/index.js';
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
          text: '品牌介绍',
          url: 'www.baidu.com'
        },
        {
          text: '课程介绍',
          url: 'www.baidu.com'
        },
        {
          text: '指导老师',
          url: 'www.baidu.com'
        },
        {
          text: '教室教具',
          url: 'www.baidu.com'
        }
      ]
    },
    {
      title: '联系我们',
      content: [
        {
          text: '加盟合作',
          url: 'www.baidu.com'
        },
        {
          text: '工作机会',
          url: 'www.baidu.com'
        }
      ]
    },
    {
      title: '用户须知',
      content: [
        {
          text: '隐私协议',
          url: 'www.baidu.com'
        },
        {
          text: '中心查询',
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
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item className={AppStyles.menuItem2}>
                <div className={AppStyles.logo}>
                  <img className={AppStyles.logoImg} src={logoImg} alt="aaa"/>
                </div>
              </Menu.Item>
              <Menu.Item key="1" className={AppStyles.menuItem1}><Link to='/'>首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/about'>品牌介绍</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/inbox'>课程介绍</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/teacher'>指导老师</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/class'>教室教具</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/query'>中心查询</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/win'>加盟合作</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className={AppStyles.content}>
            <Switch>
              <Route exact path="/">
                <InBox />
              </Route>
              <Route path="/about">
                <MyHeader />
              </Route>
              <Route path="/inbox">
                <Course />
              </Route>
              <Route path="/teacher">
                <Tea />
              </Route>
              <Route path="/class">
                <InBoxa />
              </Route>
              <Route path="/query">
                <div>2222</div>
              </Route>
              <Route path="/win">
                <div>2</div>
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
            <div className={AppStyles.footerRight}>
              <img src={codea}/>
              <span>官方微信订阅号</span>
            </div>
            <div className={AppStyles.footerteltex}>
              <span>客服热线</span><br/>
              021-5456 9020
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
