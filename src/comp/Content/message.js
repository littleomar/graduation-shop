import React, {Fragment} from "react";
import { Carousel } from "antd";
import Content1 from './jy1.js';
import MessageStyles from './message.module.css'
import banner1 from '../../statics/banner1.png'
import banner2 from '../../statics/banner2.png'
import AppStyles from "../../App.module.css";

class Message extends React.Component {

  render() {
    return (
      <Fragment>
        <Carousel className={MessageStyles.carousel} autoplay>
          <div className={MessageStyles.imgWrapper}>
            <img className={AppStyles.banner1} src={banner1} alt=""/>
          </div>
          <div className={MessageStyles.imgWrapper}>
            <img className={AppStyles.banner2} src={banner2} alt=""/>
          </div>
        </Carousel>
        <div className={MessageStyles.babyTitle}>
          我们有最优秀，最全面的教育机构
        </div>
        <div className={MessageStyles.babyWrapper}>
          <div className={MessageStyles.babyItem}>
            <Content1 />
          </div>
          <div className={MessageStyles.babyItem}>2</div>
          <div className={MessageStyles.babyItem}>3</div>
        </div>
      </Fragment>
    )
  }
}


export default Message;
