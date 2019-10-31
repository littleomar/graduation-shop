import React from 'react';
import styles from './header.module.css';
import xc from '../../statics/xc.jpg';
import footimg from '../../statics/ppjsf.jpeg';



function MyHeader() {
  console.log(styles.myHeader);
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
          </div>
          <div className={styles.footcontent}>
            <div className={styles.footleft}>
                <img  className={styles.footimg} src={footimg}/>
            </div>
            <div className={styles.footright}>
              <span>
                  经过近40年的变迁和发展，金宝贝已经从早教专家，
                  发展成为儿童成长方式的引导者，涵盖早教课程、父母课堂和游戏玩乐。
                  金宝贝始终用心了解孩子，教会爸爸妈妈们，如何让孩子成为孩子，和孩子共同成长！
              </span>
            </div>
          </div>
        </div>
    )
}

export default MyHeader;
