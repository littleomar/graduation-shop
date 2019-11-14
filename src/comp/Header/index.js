import React from 'react';
import { Steps, Button, message } from 'antd';
import axios from 'axios';
import styles from './header.module.css';
import xc from '../../statics/xc.jpg';
import footimg from '../../statics/ppjsf.jpeg';
import happy from '../../statics/1976happy.png';
import q from '../../statics/1976year.png';

const { Step } = Steps;

const steps = [
  {
    title: '1976年',
    content: '1976年 琼·伯恩丝在美国三藩市创建了第一家Gymboree金宝贝早教中心，为0-5岁家庭服务，倡导亲子共同参与课程。',
    img: happy,
  },
  {
    title: '1996年',
    content: '1996年 Gymboree金宝贝不断丰富设计线。很快，适合运动、上课、派对、郊游等等不同场合的Gymboree童装穿在了美国孩子身上。',
  },
  {
    title: '2000年',
    content: '2000年 GymboreePlay&Music金宝贝出现于孩子成长的多个场合，并开始逐步走向国际舞台，在全球不同国家和地区开设早教中心和童装门店。 Gymboree不仅仅是一个早期教育和童装的品牌，也代表了一种幸福童年成长生活方式。',
  },
  {
    title: '2003年',
    content: '2003年，Gymboree Play&Music金宝贝早教走进中国，在上海成立第一家金宝贝早教中心，从此打开中国早期教育新篇章。',
  },
  {
    title: '2012年',
    content: '2012年 Gymboree金宝贝童装隆重进驻中国，同年9月，Gymboree童装天猫商城官方旗舰店上线。',
  },
  {
    title: '2014年',
    content: '2014年6月 GymboreePlay&Music金宝贝正式推出升级版的专属家庭育儿成长品牌 – 金宝贝 私·享·汇 (ParK Gymboree)，全球首家落户于北京蓝色港湾。',
  },
  {
    title: '2018年',
    content: '截至2018年，Gymboree Play&Music金宝贝在全球已经开设了700多家早教中心，遍及全球41个国家和地区；在中国，金宝贝开设了逾400家早教中心，覆盖140多个城市。',
  },
];

class Index extends React.Component  {
  // constructor() {
  //   super();
  //   this.state = {
  //     brandContent: [],
  //   };
  // }
  // async componentDidMount() {
  //   this.setState({
  //     brandContent: (await axios.get(`http://ccimm.top:8000/brandContent`)).data,
  //   })
  // }
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      brandContent: [{}],
    };
  }
  async componentDidMount() {
    this.setState({
      brandContent: (await axios.get(`http://ccimm.top:8000/brandContent`)).data,
    });
  }
  onChange = current => {
    this.setState({ current });
  };
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  initial(){
    const current = this.state.current = 0;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return(
    <div className={styles.population}>
      <div className={styles.main}>
        <div className={styles.maintitle}>
          世界的金宝贝
          <img  className={styles.mainimg} src={xc}/>
        </div>
        <div className={styles.maintext}>
                <span>
                   金宝贝成立于1976年，已经发展成为儿童成长方式引导者，涵盖早教课程、家庭教育和游戏玩乐。
                   金宝贝倡导人本和科学的育儿观，坚持Follow kids lead，践行3S育儿发展理念，
                   指导父母跟随孩子的步伐，共同成长
                </span>
        </div>
      </div>
      <div className={styles.contentdata}>
        <div className={styles.contenttext}>中国金宝贝一路成长</div>
        <div>
          <Steps current={current} style={{marginBottom: 8 }} onChange={this.onChange}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">
            <div className={styles.contentformat}>
              <div className={styles.contentformatimg}><img src={this.state.brandContent[current].imgLeft} /></div>
              <div className={styles.contentformattitle}>{this.state.brandContent[current].tiTle}</div>
              <div className={styles.contentformattext}>{this.state.brandContent[current].text}</div>
              <div className={styles.contentformatimg2}><img src={this.state.brandContent[current].imgRight} alt=""/></div>
            </div>
          </div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('每天，全球有数万户家庭享受着GymboreePlay&Music金宝贝的快乐育儿教学。')}>
                Done
              </Button>
            )}
              {current > 0 && (
              <Button style={{ marginLeft: 380 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 400 }} onClick={() => this.initial()}>
                initial
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.footcontent}>
        <div className={styles.footleft}>
          <img  className={styles.footimg} src={footimg}/>
        </div>
        <div className={styles.footright}>
              <span className={styles.foottext}>
                    经过近40年的变迁和发展，金宝贝已经从早教专家，
                  发展成为儿童成长方式的引导者，涵盖早教课程、父母课堂和游戏玩乐。
                  金宝贝始终用心了解孩子，教会爸爸妈妈们，如何让孩子成为孩子，和孩子共同成长！
              </span>
        </div>
      </div>
    </div>
  )
  }


}

export default Index;
