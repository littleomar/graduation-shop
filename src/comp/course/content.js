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
      </div>
    );
  }
}
export default content;
