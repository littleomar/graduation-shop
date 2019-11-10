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
      tabContent: [],
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      tabTitle: (await axios.get(`http://ccimm.top:8000/tabTitle`)).data,//请求接口数据
      tabContent: (await axios.get(`http://ccimm.top:8000/tabContent`)).data,
    });
 console.log(this.state.tabTitle);
    console.log(this.state.Content);
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
          {
            this.state.tabContent.map(item =>
              <div className={styles.tabcontenttop}>{item.tabTop}</div>
            )
          }
          <div className={styles.tabcontentlefta}>
            { this.state.tabContent.map(item =>
                <div className={styles.tabcontenttop}>{item.tabLefta}</div>
            )
            }
          </div>
          <div className={styles.tabcontentleftb}>
            { this.state.tabContent.map(item =>
              <div className={styles.tabcontenttop}>{item.tabLeftb}</div>
            )
            }
          </div>
          <div className={styles.tabcontentright}>
            { this.state.tabContent.map(item =>
              <div className={styles.tabcontenttop}>{item.tabRight}</div>
            )
            }
          </div>
        </div>
      </div>
    );
  }
}
export default content;