import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import LoadApp from './components/LoadApp';
||||||| merged common ancestors
import BrowseProfiles from "./components/BrowseProfiles";
import Inmate from './components/Profiles/Inmate'
import { Switch, Route, Redirect } from "react-router-dom";
=======
import EnterApp from './components/EnterSite/EnterApp'
import BrowseProfiles from "./components/BrowseProfiles";
import Inmate from './components/Profiles/Inmate'
import CitizenForm from './components/Profiles/CitizenForm'
import EnterSite from './components/EnterSite/EnterSite';
import { Switch, Route, Redirect } from "react-router-dom";
>>>>>>> dd127aefa7391ac342872139b6a5c420aa31f885

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    email: '',
    password: ''
  }

  login = (email, password) => {
    let boola = false;

    if (email === 'email' && password === 'password') {
      boola = true;
    }

    //check auth here from server
    if (boola) {
      auth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.login(this.state.email, this.state.password);
  }


  componentDidMount() {
    this.login();
  }


  handleChange = (e) => {
    e.target.name === "email"
      ? this.setState({ email: e.target.value })
      : this.setState({ password: e.target.value })
  }

  render() {
    const { redirectToReferrer, email, password } = this.state
    console.log(auth.isAuthenticated);
    if (redirectToReferrer === true) {
      return <Redirect to='/home' />
    }

    return (
<<<<<<< HEAD
      <>
        <ul>
          {/*  /home is proteected routed */}
          <li><Link to="/home"> Home Page</Link></li>
        </ul>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              name="email"
              placeholder="type email"
              value={email}
              onChange={this.handleChange}
            />
            <input type="text"
              name="password"
              placeholder="type password"
              value={password}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>

          <p>You must log in to view the page</p>

        </div>
      </>
    )
||||||| merged common ancestors
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
=======
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
            <Route exact path="/enter/app">
              <EnterApp />
            </Route>
          </Switch>
      </div>
    );
>>>>>>> dd127aefa7391ac342872139b6a5c420aa31f885
  }
}

// const HomePage = () => {
//   console.log(auth.isAuthenticated);
//   return <div>Real Application</div>
// }

const auth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute path='/home' component={LoadApp} />
        {auth.isAuthorized ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </Switch>
    </div>
  );
}


export default App;