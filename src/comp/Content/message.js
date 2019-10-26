import React, {Fragment} from "react";
import { Carousel } from "antd";
import MessageStyles from './message.module.css'
import banner1 from '../../statics/banner1.png'
import banner2 from '../../statics/banner2.png'
import AppStyles from "../../App.module.css";
import headImg1 from '../../statics/zd1.png';
import decImg1 from '../../statics/1.png';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
        mockData: [
          {
            title: '专业的指导老师',
            content: '每一名指导老师都经过专业培训，德智体美劳全面教育。 每一名指导老师都有着懂宝宝，关心宝宝的心。 让每一位孩子都可以得到最细致，最温暖，最贴心的爱护。 保证让每一位宝宝都可以健健康康，快快乐乐的成长。',
            headImg: headImg1,
            decImg: decImg1,
          },
          {
            title: '专业的指导老师',
            content: '每一名指导老师都经过专业培训，德智体美劳全面教育。 每一名指导老师都有着懂宝宝，关心宝宝的心。 让每一位孩子都可以得到最细致，最温暖，最贴心的爱护。 保证让每一位宝宝都可以健健康康，快快乐乐的成长。',
            headImg: headImg1,
            decImg: decImg1,
          },
          {
            title: '专业的指导老师',
            content: '每一名指导老师都经过专业培训，德智体美劳全面教育。 每一名指导老师都有着懂宝宝，关心宝宝的心。 让每一位孩子都可以得到最细致，最温暖，最贴心的爱护。 保证让每一位宝宝都可以健健康康，快快乐乐的成长。',
            headImg: headImg1,
            decImg: decImg1,
          },
        ]
    }
  }

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
          {
            this.state.mockData.map(item =>
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
          我们有最优秀，最全面的教育机构
        </div>
        <div className = {[MessageStyles.babyWrapper]}>
          <div className = {`${MessageStyles.babyItem} ${MessageStyles.shapeItem}`}>
            <div className={MessageStyles.diamond}>aaaa</div>
            <div className = {MessageStyles.shapeContent}>
              <p>b</p>
              <p>b</p>
              <p>b</p>
              <p>b</p>
              <p>b</p>
              <p>b</p>
              <p>b</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}


export default Message;
