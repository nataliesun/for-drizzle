import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import NavBar from '../NavBar/NavBar'
import LandingPage from '../../routes/LandingPage/LandingPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

class App extends React.Component {
  state = {
    error: null
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App__header">
          <NavBar />
        </header> */}
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
  
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
