import React from "react";
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: '1976年',
    content: 'First-content',
  },
  {
    title: '1996年',
    content: 'Second-content',
  },
  {
    title: '2000年',
    content: 'Last-content',
  },
  {
    title: '2003年',
    content: 'Last-content',
  },
  {
    title: '2012年',
    content: 'Last-content',
  },
  {
    title: '2014年',
    content: 'Last-content',
  },
  {
    title: '2018年',
    content: 'Last-content',
  },
];

class InBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
          111
          {steps[current].content}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}


export default InBox;
