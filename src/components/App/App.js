import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from '../NavBar/NavBar'
import LandingPage from '../../routes/LandingPage/LandingPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutPage from '../../routes/AboutPage/AboutPage';
import LearnPage from '../../routes/LearnPage/LearnPage';

class App extends React.Component {
  state = {
    error: null,
    navOpen: false
  }
  onNavClick = (ev) => {
    this.setState({ navOpen: !this.state.navOpen })
  }



  render() {
    const { navOpen } = this.state;
    const mainClasses = navOpen ? "main-nav-shift" : '';
    return (
      <div className="App">
        <NavBar hidden={!navOpen} handleNavClose={this.onNavClick} />
        <main className={mainClasses}>
          <header className="App__header">
            <h1><FontAwesomeIcon icon="tint" className="fa-tint" /> ForDrizzle</h1>
            <FontAwesomeIcon icon="bars" className="fa-bars" onClick={(ev) => this.onNavClick(ev)} />
          </header>

          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/about'} component={AboutPage} />
            <Route path={'/learn'} component={LearnPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
