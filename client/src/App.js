import React, { Component } from 'react';
import HomePage from "./containers/HomePage";
import './App.css';
import BrowseProfiles from "./components/BrowseProfiles";
import Inmate from './components/Profiles/Inmate'
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
            <Route exact path="/not-found">
                <NotFound />
            </Route>
            <Redirect from="*" to="/not-found" />
          </Switch>

      </div>
    );
  }
}

export default App;