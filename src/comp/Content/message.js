import React, {Fragment} from "react";
import { Carousel } from "antd";
import axios from 'axios';//前端用于请求接口封装的包
import MessageStyles from './message.module.css'
import AppStyles from "../../App.module.css";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      babyData: [],
      banner: [],
      shapeData: [],
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      banner: (await axios.get(`http://ccimm.top:8000/banner`)).data,
      babyData: (await axios.get(`http://ccimm.top:8000/baby`)).data,
      shapeData: (await axios.get(`http://ccimm.top:8000/shape`)).data,//请求接口数据
    })
  }

  render() {
    return (
      <Fragment>
        <Carousel className={MessageStyles.carousel} autoplay>
          {
            this.state.banner.map(item => (
              <div className={MessageStyles.imgWrapper}>
                <img className={AppStyles.banner1} src={item} alt=""/>
              </div>
            ))
          }
        </Carousel>
        <div className={MessageStyles.right_nav}>
          <ul className={MessageStyles.ule}>
            <li className={MessageStyles.audition} />
            <li className={MessageStyles.auditionb} />
            <li className={MessageStyles.auditionc} />
            <li className={MessageStyles.auditiond} />
          </ul>
        </div>
        <div className={MessageStyles.babyTitle}>
          我们有最优秀，最全面的教育机构
        </div>
        <div className={MessageStyles.babyWrapper}>
          {
            this.state.babyData.map(item =>
              <div className={MessageStyles.babyItem}>
                <div>
                  <img className={MessageStyles.headImg} src={item.headImg} alt=""/>
                </div>
                <div className={MessageStyles.titleWrapper}>
                  <img src={item.decImg} alt=""/>
                  <div className={MessageStyles.titleTxt}>{item.title}</div>
                </div>
                <div className = {MessageStyles.contentTxt}>{item.content}</div>
              </div>
            )
          }
        </div>
        <div className={MessageStyles.babyTitle}>
          我们有最贴心，细致的教育系统
        </div>
        <div className={MessageStyles.babyWrapper}>
          {
            this.state.shapeData.map(item => (
              <div className={`${MessageStyles.babyItem} ${MessageStyles.shapeItem}`}>
                <div className={MessageStyles.diamond}>
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))
          }
        </div>
        <div className={MessageStyles.babyWrapper}>
          {
            this.state.shapeData.map(item => (
              <div className={MessageStyles.shapeTxtItem}>
                <div className={MessageStyles.titlea}>{item.title}</div>
                <div className={MessageStyles.contenta}>{item.content}</div>
              </div>
            ))
          }
        </div>
      </Fragment>
    )
  }
}


export default Message;
