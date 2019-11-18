import React from 'react';
import style from './theQuery.module.css';
import { Cascader } from 'antd';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';

const options = [
  {
    value: 'beijing',
    label: '北京',
    children: [
      {
        value: 'BJa',
        label: '金宝贝北京望京中心',
      },
      {
        value: 'BJb',
        label: '金宝贝北京财富中心',
      },
      {
        value: 'BJc',
        label: '金宝贝北京中关村中心',
      },
      {
        value: 'BJd',
        label: '金宝贝北京通州万达中心',
      },
      {
        value: 'BJd',
        label: '金宝贝北京宣外中心',
      },
      {
        value: 'BJe',
        label: '金宝贝北京翠微中心',
      },
      {
        value: 'BJf',
        label: '金宝贝北京顺义中心',
      },
      {
        value: 'BJg',
        label: '金宝贝北京东城中心',
      },
      {
        value: 'BJh',
        label: '金宝贝北京回龙观中心',
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'SHa',
        label: '金宝贝上海中环百联中心',
      },
      {
        value: 'SHb',
        label: '金宝贝上海普陀金沙和美广场中心',
      },
      {
        value: 'SHc',
        label: '金宝贝上海奉贤南桥中心',
      },
      {
        value: 'SHd',
        label: '金宝贝上海虹口星星堂中心',
      },
      {
        value: 'SHe',
        label: '金宝贝上海浦东唐镇恒生万鹂广场中心',
      },
      {
        value: 'SHf',
        label: '金宝贝上海闵行莘庄春申中心',
      },
      {
        value: 'SHg',
        label: '金宝贝上海普陀新邻天地中心',
      },
      {
        value: 'SHh',
        label: '金宝贝上海杨浦中原城市广场中心',
      },
      {
        value: 'SHi',
        label: '金宝贝上海青浦合生新天地中心',
      },
    ],
  },
  {
    value: 'chongqing',
    label: '重庆',
    children: [
      {
        value: 'CQa',
        label: '金宝贝重庆渝北新光里中心',
      },
      {
        value: 'CQb',
        label: '金宝贝重庆大坪时代天街中心',
      },
      {
        value: 'CQc',
        label: '金宝贝重庆南坪协信中心',
      },
      {
        value: 'CQd',
        label: '金宝贝重庆万州万达中心',
      },
      {
        value: 'CQe',
        label: '金宝贝重庆沙坪坝立海中心',
      },
      {
        value: 'CQf',
        label: '金宝贝重庆渝北爱琴海中心',
      },
      {
        value: 'CQg',
        label: '金宝贝重庆龙湖U城天街中心',
      },
      {
        value: 'CQh',
        label: '金宝贝重庆龙湖源著中心',
      },
    ],
  },
  {
    value: 'guangzhou',
    label: '广州',
    children: [
      {
        value: 'GZa',
        label: '金宝贝广州天河北中心',
      },
      {
        value: 'GZb',
        label: '金宝贝广州越秀东山口中心',
      },
      {
        value: 'GZc',
        label: '金宝贝广州番禺万达中心',
      },
      {
        value: 'GZd',
        label: '金宝贝广州海珠滨江中心',
      },
      {
        value: 'GZe',
        label: '金宝贝广州天河公园中心',
      },
      {
        value: 'GZf',
        label: '金宝贝广州荔湾西城都荟中心',
      },
      {
        value: 'GZg',
        label: '金宝贝广州花都中心',
      },
    ],
  },
  {
    value: 'hangzhou',
    label: '杭州',
    children: [
      {
        value: 'HZa',
        label: '金宝贝杭州西湖中心',
      },
      {
        value: 'HZb',
        label: '金宝贝杭州萧山旺角城新天地中心',
      },
      {
        value: 'HZc',
        label: '金宝贝杭州滨江宝龙城中心',
      },
      {
        value: 'HZd',
        label: '金宝贝杭州钱江世纪公园中心',
      },
      {
        value: 'HZe',
        label: '金宝贝杭州天虹中心',
      },
      {
        value: 'HZf',
        label: '金宝贝杭州西湖银泰中心',
      },
      {
        value: 'HZg',
        label: '金宝贝杭州富阳宝龙广场中心',
      },
      {
        value: 'HZh',
        label: '金宝贝杭州城西银泰中心',
      },
      {
        value: 'HZi',
        label: '金宝贝杭州新天地中心',
      },
    ],
  },
  {
    value: 'shenzhen',
    label: '深圳',
    children: [
      {
        value: 'SZa',
        label: '金宝贝深圳罗湖中心',
      },
      {
        value: 'SZb',
        label: '金宝贝深圳福田深国投中心',
      },
      {
        value: 'SZc',
        label: '金宝贝深圳南山深圳湾中心',
      },
      {
        value: 'SZd',
        label: '金宝贝深圳龙岗中心',
      },
      {
        value: 'SZe',
        label: '金宝贝深圳南山花园城中心',
      },
      {
        value: 'SZf',
        label: '金宝贝深圳龙华中心',
      },
      {
        value: 'SZg',
        label: '金宝贝深圳富通城中心',
      },
      {
        value: 'SZh',
        label: '金宝贝深圳福田益田中心',
      },
      {
        value: 'SZi',
        label: '金宝贝深圳喜荟城中心',
      },
      {
        value: 'SZJ',
        label: '金宝贝深圳宝安壹方城中心',
      },
      {
        value: 'SZK',
        label: '金宝贝深圳罗湖百仕达中心',
      },
    ],
  },
  {
    value: 'chengdou',
    label: '成都',
    children: [
      {
        value: 'CDa',
        label: '金宝贝成都龙湖滨江中心',
      },
      {
        value: 'CDb',
        label: '金宝贝成都鹏瑞利中心',
      },
      {
        value: 'CDc',
        label: '金宝贝成都仁和新城中心',
      },
      {
        value: 'CDd',
        label: '金宝贝成都龙湖时代天街中心',
      },
      {
        value: 'CDe',
        label: '金宝贝成都凯德金牛中心',
      },
      {
        value: 'CDf',
        label: '金宝贝成都世豪中心',
      },
      {
        value: 'CDg',
        label: '金宝贝成都财富又一城中心',
      },
      {
        value: 'CDh',
        label: '金宝贝成都优品道中心',
      },
    ],
  },
];

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(value,date, dateString) {
  console.log(value,date, dateString);
}

class theQuery extends React.Component{
  render() {
    return(
      <div className={style.all}>
        <div className={style.head}>
          <div className={style.headRight}>
            <div className={style.headtitle}>免费预约 早教试听</div>
            <div>
              <span className={style.headtext}>附件中心:</span>
              <Cascader className={style.region} options={options} onChange={onChange} changeOnSelect />
            </div>
            <div>
              <span className={style.headtext}>宝宝昵称:</span>
              <Input  className={style.headnameinput} placeholder="BaBy Name:" />
            </div>
            <div>
              <span className={style.headtext}>家长手机:</span>
              <Input  className={style.headnameinput} placeholder="Parents phone:" />
            </div>
            <div>
              <span className={style.headtext}>宝宝生日:</span>
              <DatePicker  className={style.headnameinput} onChange={onChange} />
            </div>
            <div>
              <Button type="primary" className={style.b}>点击提交</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default theQuery;