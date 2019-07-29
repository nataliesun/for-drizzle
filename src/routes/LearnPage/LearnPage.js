import React, { Component } from 'react';
import firmware from '../../assets/undraw_Firmware_jw6u.svg';

import './LearnPage.scss';

class LearnPage extends Component {
  render() {
    return (
      <div className="LearnPage">
        <img src={firmware} alt="firmware" />
        <figcaption>Coming soon!</figcaption>
      </div>
    );
  }
}

export default LearnPage;