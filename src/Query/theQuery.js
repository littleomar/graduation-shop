import React from 'react';
import style from './theQuery.module.css';
import { Cascader, message } from 'antd';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import axios from 'axios';
import moment from 'moment';
import conbanner from '../statics/default_banner.jpg';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

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

const optionsTable = {
  'beijing': {
    name: '北京',
    'BJa': '金宝贝北京望京中心',
    'BJb': '金宝贝北京财富中心',
    'BJc': '金宝贝北京中关村中心',
    'BJd': '金宝贝北京通州万达中心',
    'BJe': '金宝贝北京宣外中心',
    'BJf': '金宝贝北京翠微中心',
    'BJg': '金宝贝北京顺义中心',
    'BJh': '金宝贝北京东城中心',
    'BJi': '金宝贝北京回龙观中心',
  },
  'shanghai': {
    name: '上海',
    'SHa': '金宝贝上海中环百联中心',
    'SHb': '金宝贝上海普陀金沙和美广场中心',
    'SHc': '金宝贝上海奉贤南桥中心',
    'SHd': '金宝贝上海虹口星星堂中心',
    'SHe': '金宝贝上海浦东唐镇恒生万鹂广场中心',
    'SHf': '金宝贝上海闵行莘庄春申中心',
    'SHg': '金宝贝上海普陀新邻天地中心',
    'SHh': '金宝贝上海杨浦中原城市广场中心',
    'SHi': '金宝贝上海青浦合生新天地中心',
  },
  'chongqing': {
    name: '重庆',
    'CQa': '金宝贝重庆渝北新光里中心',
    'CQb': '金宝贝重庆大坪时代天街中心',
    'CQc': '金宝贝重庆南坪协信中心',
    'CQd': '金宝贝重庆万州万达中心',
    'CQe': '金宝贝重庆沙坪坝立海中心',
    'CQf': '金宝贝重庆渝北爱琴海中心',
    'CQg': '金宝贝重庆龙湖U城天街中心',
    'CQh': '金宝贝重庆龙湖源著中心',
  },
  'guangzhou': {
    name: '广州',
    'GZa': '金宝贝广州天河北中心',
    'GZb': '金宝贝广州越秀东山口中心',
    'GZc': '金宝贝广州番禺万达中心',
    'GZd': '金宝贝广州海珠滨江中心',
    'GZe': '金宝贝广州天河公园中心',
    'GZf': '金宝贝广州荔湾西城都荟中心',
    'GZg': '金宝贝广州花都中心',
  },
  'hangzhou': {
    name: '杭州',
    'HZa': '金宝贝杭州西湖中心',
    'HZb': '金宝贝杭州萧山旺角城新天地中心',
    'HZc': '金宝贝杭州滨江宝龙城中心',
    'HZd': '金宝贝杭州钱江世纪公园中心',
    'HZe': '金宝贝杭州天虹中心',
    'HZf': '金宝贝杭州西湖银泰中心',
    'HZg': '金宝贝杭州富阳宝龙广场中心',
    'HZh': '金宝贝杭州城西银泰中心',
    'HZi': '金宝贝杭州新天地中心',
  },
  'shenzhen': {
    name: '深圳',
    'SZa': '金宝贝深圳罗湖中心',
    'SZb': '金宝贝深圳福田深国投中心',
    'SZc': '金宝贝深圳南山深圳湾中心',
    'SZd': '金宝贝深圳龙岗中心',
    'SZe': '金宝贝深圳南山花园城中心',
    'SZf': '金宝贝深圳龙华中心',
    'SZg': '金宝贝深圳富通城中心',
    'SZh': '金宝贝深圳福田益田中心',
    'SZi': '金宝贝深圳喜荟城中心',
    'SZj': '金宝贝深圳宝安壹方城中心',
    'SZk': '金宝贝深圳罗湖百仕达中心',
  },
  'chengdu': {
    name: '成都',
    'CDa': '金宝贝成都龙湖滨江中心',
    'CDb': '金宝贝成都鹏瑞利中心',
    'CDc': '金宝贝成都仁和新城中心',
    'CDd': '金宝贝成都龙湖时代天街中心',
    'CDe': '金宝贝成都凯德金牛中心',
    'CDf': '金宝贝成都世豪中心',
    'CDg': '金宝贝成都财富又一城中心',
    'CDh': '金宝贝成都优品道中心',
  },
}



const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class theQuery extends React.Component{
  componentDidMount() {
    this.setState({
      formData: {
        address: '',
        name: '',
        telphone: void 0,
        birthday: '',
      }
    })
  }

  render() {

    return(
      <div className={style.all}>
        <div className={style.head}>
          <div className={style.headRight}>
            <div className={style.headtitle}>免费预约 早教试听</div>
            <div>
              <span className={style.headtext}>附件中心:</span>
              <Cascader placeholder='请选择' className={style.region} options={options} onChange={(value) => {
                let res = '';
                if (value.length === 2) {
                  res = optionsTable[value[0]].name + '/' + optionsTable[value[0]][value[1]];
                } else if (value.length === 1) {
                  res = optionsTable[value[0]].name
                } else{
                  return;
                }
                this.setState(preState => ({
                  formData: {
                    ...preState.formData,
                    address: res,
                  }
                }))
              }} changeOnSelect />
            </div>
            <div>
              <span className={style.headtext}>宝宝昵称:</span>
              <Input  className={style.headnameinput} placeholder="请输入宝宝昵称" onChange={(value) => {
                const res = value.target.value;
                this.setState((preState) => {
                  return {
                    formData: {
                      ...preState.formData,
                      name: res,
                    }
                  }
                })
              }} />
            </div>
            <div>
              <span className={style.headtext}>家长手机:</span>
              <Input  className={style.headnameinput} placeholder="请输入家长手机号" onChange={(value) => {
                const res = value.target.value;
                this.setState((preState) => {
                  return {
                    formData: {
                      ...preState.formData,
                      telphone: res,
                    }
                  }
                })
              }}  />
            </div>
            <div>
              <span className={style.headtext}>宝宝生日:</span>
              <DatePicker locale={locale} className={style.headnameinput} format="YYYY-MM-DD" onChange={(value) => {
                this.setState(preState => ({
                  formData: {
                    ...preState.formData,
                    birthday: value.format('YYYY-MM-DD'),
                  }
                }))
              }} placeholder='请选择宝宝的生日' />
            </div>
            <div>
              <Button type="primary" className={style.b} onClick={async () => {
                const res = (await axios.post('http://ccimm.top:8000/addUser', this.state.formData)).data;
                if (res.result === 'success') {
                  message.success('提交成功');
                }
              }}>点击提交</Button>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.contenttitle}>
            <span className={style.titlea}>全国早教中心 ></span>
          </div>
          <div className={style.contentimg}><img src={conbanner}/></div>
        </div>
      </div>
    )
  }
}

export default theQuery;
