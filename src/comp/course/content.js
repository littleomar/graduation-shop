import React from 'react';
import styles from './content.module.css';
import banner from '../../statics/kcbanner.jpg.png';
import axios from "axios";
import MessageStyles from "../Content/message.module.css";
import AppStyles from "../../App.module.css";
import {Carousel} from "antd";
import { Collapse } from 'antd';

const { Panel } = Collapse;

class content extends React.Component {
  constructor() {
    super();
    this.state = {
      tabTitle: [],
      tabContent: [],
      showContent: {}
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      tabTitle: (await axios.get(`http://ccimm.top:8000/tabTitle`)).data,//请求接口数据
      tabContent: (await axios.get(`http://ccimm.top:8000/tabContent`)).data,
    });

    this.setState({
      showContent: this.state.tabContent[0]
    })

  }



  render() {
    return (
      <div className={styles.all}>
        <div className={styles.head}><img src={banner}/></div>
        <div className={styles.tittle}>多元化成长课程体系</div>
        <div className={styles.tab}>
          {
            this.state.tabTitle.map((item, index) =>
                <div className={styles.tabtext} onClick={() => {this.setState({showContent: this.state.tabContent[index]})}}>{item.cnName}<br/>{item.enName}</div>
            )
          }
        </div>
        <div className={styles.tabcontent}>
          <div className={styles.tabcontenttop}><img src={this.state.showContent.ico}/>{this.state.showContent.tabTop}</div>
          <div className={styles.tabcontentlefta}>
            <img src={this.state.showContent.tabLefta}/>
          </div>
          <div className={styles.tabcontentleftb}>
            <div className={styles.tabcontenttta}>{this.state.showContent.tabText}</div>
            <div className={styles.tabcontentttb}>{this.state.showContent.tabLeftb}</div>
          </div>
          <div className={styles.tabcontentright}>
            <img src={this.state.showContent.tabRight}/>
          </div>
        </div>
        <div className={styles.Ftitle}>成长与学习规划</div>
        <div className={styles.Ftext}>根据宝宝的月龄特点，金宝贝为孩子制定了7个阶段的成长学习计划，
          并将通过核心课程与特色课程，让每个阶段的孩子都能发挥潜能、快乐成长</div>
        <div className={styles.Folded}>
          <Collapse accordion>
            <Panel  className={styles.color1} header="Level 1" key="1">
              <div className={styles.Foldedtext}>
                <span className={styles.Foldedtexta1}>0-6个月:</span>
                <span className={styles.Foldedtexta2}>Play</span>
              </div>
            </Panel>
            <Panel className={styles.color2} header="Level 2" key="2">
              <span className={styles.Foldedtextb1}>6-10个月:</span>
              <span className={styles.Foldedtextb2}>Play</span>
              <span className={styles.Foldedtextb2}>Music</span>
            </Panel>
            <Panel className={styles.color3} header="Level 3" key="3">
              <span className={styles.Foldedtextc1}>10-16个月:</span>
              <span className={styles.Foldedtextc2}>Play</span>
              <span className={styles.Foldedtextc2}>Music</span>
            </Panel>
            <Panel className={styles.color4} header="Level 4" key="4">
              <span className={styles.Foldedtextd1}>16-22个月:</span>
              <span className={styles.Foldedtextd2}>Play</span>
              <span className={styles.Foldedtextd2}>Music</span>
              <span className={styles.Foldedtextd2}>Art</span>
            </Panel>
            <Panel className={styles.color5} header="Level 5" key="5">
              <span className={styles.Foldedtexte1}>16-22个月:</span>
              <span className={styles.Foldedtexte2}>Play</span>
              <span className={styles.Foldedtexte2}>Music</span>
              <span className={styles.Foldedtexte2}>Art</span>
              <span className={styles.Foldedtexte2}>Life Skills</span>
            </Panel>
            <Panel className={styles.color6} header="Level 6" key="6">
              <span className={styles.Foldedtextf1}>16-22个月:</span>
              <span className={styles.Foldedtextf2}>Play</span>
              <span className={styles.Foldedtextf2}>Music</span>
              <span className={styles.Foldedtextf2}>Art</span>
              <span className={styles.Foldedtextf2}>Life Skills</span>
              <span className={styles.Foldedtextf2}>Global Kids</span>
              <span className={styles.Foldedtextf2}>Pre-school Steps</span>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default content;
