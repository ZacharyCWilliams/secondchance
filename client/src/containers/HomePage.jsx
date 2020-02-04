import React, { Component } from "react";

//styles
import "../styles/Home/HomePage.css";

//components
import NavBar from "./NavBar";
import HomeMainSection from "../components/HomeMainSection";

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
          <HomeMainSection />
        </div>
      </div>
    );
  }
}


export default HomePage;


