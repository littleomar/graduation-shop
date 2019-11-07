import React from 'react';
import styles from './content.module.css';
import banner from '../../statics/kcbanner.jpg.png';

function content() {
  return (
    <div className={styles.all}>
      <div className={styles.head}><img src={banner}/></div>
      <div className={styles.tittle}>多元化成长课程体系</div>
      <div className={styles.tab}>
        <div className={styles.tabtext}>
          <p className={styles.tabTextCn}>育乐</p>
          <p className={styles.tabTextEn}>play</p>
        </div>
        <div className={styles.tabtext}>
          <p className={styles.tabTextCn}>音乐</p>
          <p className={styles.tabTextEn}>Music</p>
        </div>
        <div className={styles.tabtext}>
          <p className={styles.tabTextCn}>艺术</p>
          <p className={styles.tabTextEn}>Art</p>
        </div>
        <div className={styles.tabtext}>
          <p className={styles.tabTextCn}>学校技能</p>
          <p className={styles.tabTextEn}>Art-School Steps</p>
        </div>
        <div className={styles.tabtext}>
          <p className={styles.tabTextCn}>生活技能</p>
          <p className={styles.tabTextEn}>Life Skills</p>
        </div>
        <div className={styles.tabtext}>
          <p className={styles.tabTextCn}>环球宝贝</p>
          <p className={styles.tabTextEn}>Global Kids</p>
        </div>
      </div>
      <div className={styles.tabcontent}>
        <div className={styles.tabcontenttop}>育乐 Play</div>
        <div className={styles.tabcontentlefta}></div>
        <div className={styles.tabcontentleftb}></div>
        <div className={styles.tabcontentright}></div>
      </div>
    </div>
  );
}
export default content;