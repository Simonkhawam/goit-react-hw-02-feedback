import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
export default Notification;
