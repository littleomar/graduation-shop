import React from 'react';
import zd from '../../statics/zd1.png';
import ymcss from './contentd.module.css';
import t1 from '../../statics/1.png';

function jy1() {
  return (
    <div>
      <div>
        <img className={ymcss.gs} src={zd} alt=""/>
      </div>
      <div className={ymcss.tgs}>
        <img src={t1} alt=""/>
        <span className={ymcss.dwz}>专业的指导老师</span>
      </div>
      <div>
        <span className={ymcss.wz}>
          每一名指导老师都经过专业培训，德智体美劳全面教育。
          每一名指导老师都有着懂宝宝，关心宝宝的心。
          让每一位孩子都可以得到最细致，最温暖，最贴心的爱护。
          保证让每一位宝宝都可以健健康康，快快乐乐的成长。
        </span>
      </div>
    </div>
  )
}


export default jy1;