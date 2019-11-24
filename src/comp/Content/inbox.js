import React from "react";
import style from './inbox.module.css';
import axios from "axios";
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css'
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
  </div>
);

class InBox extends React.Component {
  constructor() {
    super();
    this.state = {
      classContent: [],
      classImg: []
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      classContent: (await axios.get(`http://ccimm.top:8000/classContent`)).data,
      classImg: (await axios.get(`http://ccimm.top:8000/classImg`)).data,
    });

    new Swiper('.swiper-container', {
      loop : true,
      width: 1200,
      height: 300,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
    })
  }
  render() {
    return (
      <div className={style.all}>
        <div className={style.head}>
          {
            this.state.classContent.map(item =>(
              <img src={item.banner}/>
            ))
          }
        </div>
        <div className={style.headtitle}>
          我们的教具<br/>
          OUR TEACHING AIDS
        </div>
        <div className={style.aids}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                this.state.classImg.forEach( item => (
                  <div className="swiper-slide"><div className={style.swiperItem}><img src={item.img} alt=""/></div></div>
                ))
              }
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
            <div className={style.footall}>
              {
                this.state.classContent.map(item =>(
                  <div className={style.footcontent}>
                    <div className={style.foottitle}>{item.title}</div>
                    <div className={style.foottitle}>{item.titleb}</div>
                  <div className={style.footimg}>
                    <img src={item.aImg}/>
                  </div>
                    <div className={style.footimg}>
                      <img src={item.bImg}/>
                    </div>
                    <div className={style.footimg}>
                      <img src={item.cImg}/>
                    </div>
                </div>
                ))
              }
            </div>
      </div>
    );
  }
}


export default InBox;
