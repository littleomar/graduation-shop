import React, {Fragment} from "react";
import { Carousel } from "antd";
import MessageStyles from './message.module.css'

class Message extends React.Component {

  render() {
    return (
      <Fragment>
        <Carousel className={MessageStyles.carousel} autoplay>
          <div className={MessageStyles.imgWrapper}>
            <img src="http://img.mukewang.com/5d8c9af600011f4c18720764.jpg" alt=""/>
          </div>
          <div className={MessageStyles.imgWrapper}>
            <img src="http://img.mukewang.com/5d8d6d8c0001523518720764.jpg" alt=""/>
          </div>
          <div className={MessageStyles.imgWrapper}>
            <img src="http://img.mukewang.com/5da52155000159d118720764.jpg" alt=""/>
          </div>
        </Carousel>
        <div className={MessageStyles.babyTitle}>
          引导宝贝尽情探索的课程
        </div>
        <div className={MessageStyles.babyWrapper}>
          <div className={MessageStyles.babyItem}>1</div>
          <div className={MessageStyles.babyItem}>2</div>
          <div className={MessageStyles.babyItem}>3</div>
        </div>
      </Fragment>
    )
  }
}


export default Message;
