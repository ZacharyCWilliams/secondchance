import React, { Component, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";
import EnterApp from "./components/EnterSite/EnterApp";
import BrowseProfiles from "./components/BrowseProfiles";

const localStorageKey = localStorage.getItem("token");

export const auth = {
    isAuthenticated: localStorageKey ? true : false,
    authenticate() {
        this.isAuthenticated = true;
        console.log("authenticated successfully");
    },
    signout() {
        this.isAuthenticated = false;
        // setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

function App() {
    return (
        <div className="App">
            <Switch>
                <PrivateRoute exact path="/home" component={HomePage} />
                <PrivateRoute exact path="/browse" component={BrowseProfiles} />
                <Route exact path="/login" component={EnterApp} />

                {auth.isAuthorized ? (
                    <Redirect to="/home" />
                ) : (
                    <Redirect to="/login" />
                )}
            </Switch>
        </div>
    );
}

export default App;
