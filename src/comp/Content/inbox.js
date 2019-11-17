import React from "react";
import style from './inbox.module.css';
import axios from "axios";
import MessageStyles from "./message.module.css";



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
          <div className={style.footcontent}>
              <div className={style.foottitle}>
                育乐教室
                <br/>
                Recreational classroom
              </div>
            <div className={style.footWrapper}>
              {
                this.state.classContent.map(item => (
                  <div className={style.footimg}>
                    <div>
                      <img src={this.state.classContent.aImg}/>
                      <img src={this.state.classContent.bImg}/>
                      <img src={this.state.classContent.cImg}/>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default InBox;
