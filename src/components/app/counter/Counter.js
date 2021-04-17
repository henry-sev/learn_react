import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {number: 0};
    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
  }

  increaseNumber() {
    this.setState({number: this.state.number + 1});
  }

  decreaseNumber() {
    this.setState({number: this.state.number - 1});
  }
  // 和html页面写法的区别：
  //   1. class => className
  //   2. onclick => onClick
  render() {
    return (
      <div className="container">
        <h1>计数器</h1>
        <h2 id="counter">{this.state.number}</h2>
        <div>
          <button className="btn" onClick={this.increaseNumber}>
            增加
          </button>
          <button className="btn" onClick={this.decreaseNumber}>
            减少
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

