import React, {Fragment} from "react";
import { Carousel } from "antd";
import MessageStyles from './message.module.css'
import banner1 from '../../statics/banner1.png'
import banner2 from '../../statics/banner2.png'
import AppStyles from "../../App.module.css";
import headImg1 from '../../statics/zd.css.png';
import headImg2 from '../../statics/xx1.png';
import headImg3 from '../../statics/hj1.png';
import decImg1 from '../../statics/1.png';
import decImg2 from '../../statics/-2.png';
import decImg3 from '../../statics/3.png';
import xx1 from '../../statics/003.png';
import xx2 from '../../statics/005.png';
import xx3 from '../../statics/006.png';

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
            title: '快乐轻松的学习',
            content: '根据Play Value为孩子精心设计的教具，激发孩子自主探索和学习的兴趣。我们将通过与父母玩耍的方式，让孩子自己主动的探索学习，激发孩子的自信。通过舞蹈乐器的演奏，让孩子在音乐中加强对身体的控制和对动作的表达。',
            headImg: headImg2,
            decImg: decImg3,
          },
          {
            title: ' 温馨宽阔的空间',
            content: '配合金宝贝课程特别研发，我们为孩子打造森林、湖泊、火山、海洋等不同主题的教室设计，从孩子的视角出发，为孩子开启无限想象的空间。多元宽敞的空间，和经验丰富的指导师，让父母与孩子共享高质量的亲子时光。',
            headImg: headImg3,
            decImg: decImg2,
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
        <div className={MessageStyles.right_nav}>
          <ul className={MessageStyles.ule}>
            <li className={MessageStyles.audition}></li>
            <li className={MessageStyles.auditionb}></li>
            <li className={MessageStyles.auditionc}></li>
            <li className={MessageStyles.auditiond}></li>
          </ul>
        </div>
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
          我们有最贴心，细致的教育系统
        </div>
        <div className = {[MessageStyles.babyWrapper]}>
          <div className = {`${MessageStyles.babyItem} ${MessageStyles.shapeItem}`}>
            <div className={MessageStyles.diamond}>
              <img src={xx1} alt="" />
            </div>
          </div>
          <div className = {`${MessageStyles.babyItem} ${MessageStyles.shapeItem}`}>
            <div className={MessageStyles.diamond}>
              <img src={xx2} alt="" />
            </div>
          </div>
          <div className = {`${MessageStyles.babyItem} ${MessageStyles.shapeItem}`}>
            <div className={MessageStyles.diamond}>
              <img src={xx3} alt="" />
            </div>
          </div>
        </div>
        <div className={MessageStyles.babyWrapper}>
          <div className={MessageStyles.shapeTxtItem}>
            <div className={MessageStyles.titlea}>从0岁到到三岁</div>
            <div className={MessageStyles.contenta}>课程提供适龄游戏，帮助家长发现宝宝的兴趣，让宝宝在过程中不断探索自己的能力。</div>
          </div>
          <div className={MessageStyles.shapeTxtItem}>
            <div className={MessageStyles.titlea}>从6个月到五岁</div>
            <div className={MessageStyles.contenta}>20种音乐风格、乐器的使用，让家长掌握与孩子共同探索音乐的方式。</div>
          </div>
          <div className={MessageStyles.shapeTxtItem}>
            <div className={MessageStyles.titlea}>从18个月到5岁</div>
            <div className={MessageStyles.contenta}>别出心裁的艺术工具，丰富孩子对自我和环境的表达和探索提高孩子的表达力、专注力、审美能力。</div>
          </div>
        </div>
      </Fragment>
    )
  }
}


export default Message;
