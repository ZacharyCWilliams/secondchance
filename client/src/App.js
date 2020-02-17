import React, { Component } from 'react';
import HomePage from "./containers/HomePage";
import './App.css';
import BrowseProfiles from "./components/BrowseProfiles";
import Inmate from './components/Profiles/Inmate'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/browse">
              <BrowseProfiles />
            </Route>
            {/* will need to change this route */}
            <Route exact path="/inmate/profile">
              <Inmate />
            </Route>
          </Switch>

      </div>
    );
  }
}

export default App;