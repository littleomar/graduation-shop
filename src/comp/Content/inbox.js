import React from "react";
import style from './inbox.module.css';
import axios from "axios";


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
      </div>
    );
  }
}


export default InBox;
