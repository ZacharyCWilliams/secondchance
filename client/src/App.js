import React, { Component, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";

import EnterApp from "./components/EnterSite/EnterApp";

// class LoginPage extends React.Component {
//     state = {
//         redirectToReferrer: false,
//         email: "",
//         password: ""
//     };

//     login = (email, password) => {
//         let boola = false;

//         if (email === "email" && password === "password") {
//             boola = true;
//         }

//         //check auth here from server
//         if (boola) {
//             auth.authenticate(() => {
//                 this.setState(() => ({
//                     redirectToReferrer: true
//                 }));
//             });
//         }
//     };

//     onSubmit = e => {
//         e.preventDefault();
//         this.login(this.state.email, this.state.password);
//     };

//     componentDidMount() {
//         this.login();
//     }

//     handleChange = e => {
//         e.target.name === "email"
//             ? this.setState({ email: e.target.value })
//             : this.setState({ password: e.target.value });
//     };

//     render() {
//         const { redirectToReferrer, email, password } = this.state;
//         console.log(auth.isAuthenticated);
//         if (redirectToReferrer === true) {
//             return <Redirect to="/home" />;
//         }

//         return (
//             <>
//                 <ul>
//                     {/*  /home is proteected routed */}
//                     <li>
//                         <Link to="/home"> Home Page</Link>
//                     </li>
//                 </ul>
//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder="type email"
//                             value={email}
//                             onChange={this.handleChange}
//                         />
//                         <input
//                             type="text"
//                             name="password"
//                             placeholder="type password"
//                             value={password}
//                             onChange={this.handleChange}
//                         />
//                         <input type="submit" value="Submit" />
//                     </form>

//                     <p>You must log in to view the page</p>
//                 </div>
//             </>
//         );
//     }
// }

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
