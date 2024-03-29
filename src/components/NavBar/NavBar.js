import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavBar.scss';

class NavBar extends Component {




  render() {
    const navClasses = this.props.hidden ? "side-bar hidden" : "side-bar";
    return (
      <>
        <div className={navClasses}>
          <span onClick={this.props.handleNavClose}><FontAwesomeIcon icon="times" /></span>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/learn"><FontAwesomeIcon icon="chalkboard" /> Learn</NavLink></li>
            <li><a href="https://github.com/nataliesun/for-drizzle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="code-branch" /> Github</a></li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;