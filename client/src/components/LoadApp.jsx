import React, { Component } from 'react';
import HomePage from "../containers/HomePage";
import '../App.css';
import BrowseProfiles from "./BrowseProfiles";
import Inmate from './Profiles/Inmate'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

class LoadApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <HomePage />
        <Router>
          <Switch>
            {/* <Route exact path="/home/homepage">
              <HomePage />
            </Route> */}
            <Route exact path="/home/browse">
              <BrowseProfiles />
            </Route>
            {/* will need to change this route */}
            <Route exact path="/home/inmate/profile">
              <Inmate />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default LoadApp;