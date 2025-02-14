import React, { Component } from 'react';

class Counter extends Component {
  // State tanımlanıyor
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // State güncelleme metodu
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    );
  }
}

export default Counter;
