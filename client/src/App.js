import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import EnterApp from "./components/EnterSite/EnterApp";
import BrowseProfiles from "./components/BrowseProfiles";
import InmateProfile from "./components/InmateProfile";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./components/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/browse" component={BrowseProfiles} />
          <PrivateRoute exact path="/profile/:id" component={InmateProfile} />
          <Route exact path="/login" component={EnterApp} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
