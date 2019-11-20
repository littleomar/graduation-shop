import React from 'react';
import style from './win.module.css';
import { Table } from 'antd';
import axios from "axios";
import { Pagination } from 'antd';

class Win extends React.Component{
  constructor() {
    super();
    this.state = {
      contentUser: [],
    };
  }
  async componentDidMount() {
    this.setState({
      contentUser: (await axios.get(`http://ccimm.top:8000/contentUser`)).data,
    });
  }

  render() {
    return(
      <div className={style.all}>
        <Table dataSource={this.state.contentUser}>
          <Table.Column title="地址" dataIndex="address" />
          <Table.Column title="宝宝昵称" dataIndex="name" />
          <Table.Column title="家长电话" dataIndex="telphone"/>
          <Table.Column title="宝贝生日" dataIndex="birthday"/>

        </Table>
      </div>
    )
}
}

export default Win;