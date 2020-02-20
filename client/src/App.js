import React, { Component } from 'react';
import HomePage from "./containers/HomePage";
import './App.css';
import BrowseProfiles from "./components/BrowseProfiles";
import Inmate from './components/Profiles/Inmate'
import CitizenForm from './components/Profiles/CitizenForm'
import EnterSite from './components/EnterSite/EnterSite';
import { Switch, Route, Redirect } from "react-router-dom";

class NotFound extends Component {
  render() {
    return(
      <div><h1>404, Page Not Found</h1></div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App light-mode">
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
            <Route exact path="/citizen/form">
              <CitizenForm />
            </Route>
            <Route exact path="/enter">
              <EnterSite />
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;