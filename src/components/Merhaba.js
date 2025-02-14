
import React, { Component } from 'react';

class Merhaba extends Component {
    render() {
      return (
        <div>
          <h1>Hello, class bileşen    {this.props.name}!</h1>
        </div>
      );
    }
  }
  
  export default Merhaba;