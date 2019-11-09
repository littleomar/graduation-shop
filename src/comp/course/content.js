import React from 'react';
import styles from './content.module.css';
import banner from '../../statics/kcbanner.jpg.png';
import axios from "axios";
import MessageStyles from "../Content/message.module.css";
import AppStyles from "../../App.module.css";
import {Carousel} from "antd";

class content extends React.Component {
  constructor() {
    super();
    this.state = {
      tabTitle: [],
    };
    this.state ={
      tabContent: [],
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      tabTitle: (await axios.get(`http://ccimm.top:8000/tabTitle`)).data,//请求接口数据
    })
    this.setState({
      tabContent: (await axios.get(`http://ccimm.top:8000/tabContent`)).data,
    })
  }



  render() {
    return (
      <div className={styles.all}>
        <div className={styles.head}><img src={banner}/></div>
        <div className={styles.tittle}>多元化成长课程体系</div>
        <div className={styles.tab}>
          {
            this.state.tabTitle.map(item =>
                <div className={styles.tabtext}>{item.cnName}<br/>{item.enName}</div>
            )
          }
        </div>
        <div className={styles.tabcontent}>
          <div className={styles.tabcontenttop}>育乐 Play</div>
          <div className={styles.tabcontentlefta}></div>
          <div className={styles.tabcontentleftb}></div>
          <div className={styles.tabcontentright}></div>
        </div>
      </div>
    );
  }
}
export default content;