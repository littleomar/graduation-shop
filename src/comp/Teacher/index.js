import React, {Fragment} from 'react';
import styles from './index.module.css';
import banner from '../../statics/zdbanner.png';
import t from '../../statics/zdlst.jpeg.png';
import t1 from '../../statics/zdlsintroduce1.png';
import t2 from '../../statics/zdlsintroduce2.png';
import t3 from '../../statics/zdlsintroduce3.png';
import dt from '../../statics/640.gif';
import art from '../../statics/zdlsArt.PNG';
import play from '../../statics/zdlsPlay.png';
import music from '../../statics/zdlsmusic.PNG';
import l7 from '../../statics/zdlsL7.PNG';
import foot from '../../statics/zdlsfoot.PNG';
import axios from "axios";


class index extends React.Component{
  constructor() {
    super();
    this.state = {
      teacherContent: [],
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      teacherContent: (await axios.get(`http://ccimm.top:8000/teacherContent`)).data,
    });
    console.log(this.state.teacherContent)
  }
  render() {
    return (
      <Fragment>
        <div className={styles.all}>
          <div className={styles.head}><img src={banner} /></div>
          <div className={styles.title}>您熟悉的金宝贝老师—carry老师蜕变记</div>
          <div className={styles.titext}>2015加入金宝贝 2016上海总部基础培训 从此开启了她在金宝贝的职业生涯！</div>
          <div className={styles.contentlefta}><img src={t}/></div>
          <div className={styles.contentleftb}>
              她是位特别爱笑，喜欢孩子，有爱心，有耐心，有责任心，温柔善良的老师，
              她会把每个孩子放在心上，经常和家长沟通育儿，深受小朋友和家长的喜爱。
              2016、2017、2018连续3年荣获最受欢迎指导师。
          </div>
          <div className={styles.contentleftc}>
             同时她也是一位非常认真努力的姑娘！
             通过她自己平时的努力， 2017连获2门上海总部leading证书！成为实力过硬的资深指导师！
             你奋斗的样子最美丽！Carry！
          </div>
          <div className={styles.contentleftd1}><img src={t1}/></div>
          <div className={styles.contentleftd2}><img src={t2}/><img src={t3}/></div>
          <div className={styles.ctall}>
              <div className={styles.cttop1}>接下来谈谈Carry老师的课程:</div>
              <div className={styles.cttop2}>
                她的课生动有趣，收放自如，有感染力，真实，不拖泥带水，创意无限，受到很多家长的表扬。
                她的课也是非常火爆得！
              </div>
            <div className={styles.cttop3}>
                <img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/>
                 <img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/><img src={dt}/>
            </div>
              <div className={styles.ctcontent}>
                <section className={styles.styall}>
                  <section className={styles.styc}>
                    <section className={styles.stya}>
                      <section className={styles.styb}>
                        <p className={styles.stytitle}>
                          <strong>
                            <span className={styles.styalltext}>Art 艺术课:</span>
                          </strong>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            喜欢她的艺术课，每次都能给孩子带来惊喜，你意想不到的材料都会出现在她的课堂上，
                            她总会把主题玩的很有创意，有个创意思维的老师还愁孩子没有创造力吗？
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            她每次认真钻研教案，吃透主题，花大量的时间去设计活动，购买材料。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            为了让孩子更理解主题，她会加入大量的生活元素，本来很难呈现的主题，她就可以以轻松易懂的方式get到
                          </span>
                        </p>
                        <p className={styles.styimg}>
                          <img src={art}/>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            真是太有意思了，孩子在她的艺术课上慢慢的自信，专注，很多孩子上其他的课也越来越好。
                          </span>
                        </p>
                      </section>
                    </section>
                  </section>
                </section>
                <section className={styles.styall}>
                  <section>
                    <section className={styles.stya}>
                      <section className={styles.styb}>
                        <p className={styles.stytitle}>
                          <strong>
                            <span className={styles.styalltext}>Play 育乐课:</span>
                          </strong>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            Carry的育乐课，ideas真是多呀，一个很普通很简单的设备都可以被她玩出来花样，哈哈哈，
                            比如本周springtime那个斜坡垫子，她会联想到春天里滑草地，受到上课家长们连连夸赞：老师真棒！
                          </span>
                        </p>
                       <p className={styles.styimg}>
                         <img src={play}/>
                       </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             孩子们也玩得非常开心，不断地来回重复，露出开心快乐的微笑。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             她上育乐课特别有感染力，爱笑，热情，大嗓门，跟着她上课一点都不感觉气氛会尴尬，因为她太喜欢笑了
                          </span>
                        </p>
                      </section>
                    </section>
                  </section>
                </section>
                <section className={styles.styall}>
                  <section>
                    <section className={styles.stya}>
                      <section className={styles.styb}>
                        <p className={styles.stytitle}>
                          <strong>
                            <span className={styles.styalltext}>Music 音乐课:</span>
                          </strong>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            她说：刚开始她上音乐课的时候特别紧张，害怕；
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             每天下班回家的路上她都会自己唱给自己听。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             在单位:经常会看到她在一个空教室里，放着音乐打节奏，卡节拍设计跳舞动作。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             慢慢的她成长起来了，有更多的想法融入到每个音乐主题里，去看她课的时候，满满的感觉真是棒！high到爆！
                            今年刚换新的Divas主题，她自己设计动作，很好的把家长的情绪带动到高潮，家长们特别享受。
                          </span>
                        </p>
                        <p className={styles.styimg}>
                          <img src={music}/>
                        </p>
                      </section>
                    </section>
                  </section>
                </section>
                <section className={styles.styall}>
                  <section>
                    <section className={styles.stya}>
                      <section className={styles.styb}>
                        <p className={styles.stytitle}>
                          <strong>
                            <span className={styles.styalltext}>L7独立课:</span>
                          </strong>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                            2018接手社交独立课L7，在年终总结上她最大的收获是带出一批超级棒的L7小朋友。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             Carry老师是位爱动脑筋的好老师，课堂上她会制造冲突，引导小朋友去解决问题。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             而且她是一位超级有耐心的老师，那么多调皮的孩子，分离焦虑的孩子在她课堂上，她都可以因材施教。
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             调皮的孩子更懂得规矩和秩序了；分离焦虑的孩子可以说：妈妈你出去吧，我要和老师一起上课！
                          </span>
                        </p>
                        <p className={styles.stytitletext}>
                          <span className={styles.styalltext}>
                             这也是她最自豪的地方！
                          </span>
                        </p>
                        <p className={styles.styimg}>
                          <img src={l7}/>
                        </p>
                      </section>
                    </section>
                  </section>
                </section>
                <section className={styles.styall}>
                  <section>
                    <section className={styles.stya}>
                      <section className={styles.styb}>
                        <p className={styles.styfoot}>
                          <strong>
                            <span className={styles.styfoottext}>有这么优秀的指导师</span>
                          </strong>
                        </p>
                        <p className={styles.styfoot}>
                          <strong>
                            <span className={styles.styfoottext}>快来找她上课吧!</span>
                          </strong>
                        </p>
                        <p className={styles.styimg}>
                          <img src={foot}/>
                        </p>
                      </section>
                    </section>
                  </section>
                </section>
              </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default index;