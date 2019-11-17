import React from "react";
import style from './inbox.module.css';
import axios from "axios";
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
    };
  }//初始化数据，后台赋值
  async componentDidMount() {
    this.setState({
      classContent: (await axios.get(`http://ccimm.top:8000/classContent`)).data,
    });
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
