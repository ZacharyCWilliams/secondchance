import React, { Component } from 'react';
import HomePage from "./containers/HomePage";
import './App.css';
import BrowseProfiles from "./components/BrowseProfiles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// async function fetchUsers() {
//   try {
//     const res = await fetch('/api/hello');
//     const json = await res.json();
//     console.log( json );
//   }
//   catch (error) { console.log(error) }
// };

class App extends Component {
  constructor(props) {
    super(props)
  }

  fetchUsers = () => {
    fetch('/api')
      .then(res => res.json())
      .then(results => console.log(results));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/browse">
              <BrowseProfiles />
            </Route>
            {/* will need to change this route */}
            <Route exact path="/inmate/profile">
              <BrowseProfiles />  
              {/* <Inmate /> */}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
