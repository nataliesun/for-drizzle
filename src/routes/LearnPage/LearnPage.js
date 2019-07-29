import React, { Component } from 'react';
import firmware from '../../assets/undraw_Firmware_jw6u.svg'
class LearnPage extends Component {
  render() {
    return (
      <div className="LearnPage">
        <img src={firmware} alt="firmware" style={{ height: "30vh" }} />
        <figcaption style={{ margin: "4vh" }}>Coming soon!</figcaption>
      </div>
    );
  }
}

export default LearnPage;