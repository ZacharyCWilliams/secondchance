import React, { Component } from "react";
import "../styles/HomePage.css";
import NavBar from "./NavBar";

class HomePage extends Component {
  handleLogIn() {
    console.log('log in handled');
  }

  handleSignUp() {
    console.log('Sign up handled');
  }

  render(){
    return (
      <div className="home-container">
        <div className="home-main-div">
          <NavBar buttons={['Log In', 'Sign Up']} links={['About','Donate', 'Contact']} buttonActions={[this.handleLogIn, this.handleSignUp]} />
        </div>
      </div>
    );
  }
}

export default HomePage;
