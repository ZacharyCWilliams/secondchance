import React, { Component, useEffect, useState } from "react";
import HomeMainCSS from "../../styles/Home/HomeMainSection.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Modal from '../../components/Modal'

class EnterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
      showLogIn: false
    };
  }

  handleLogIn = () => {
    console.log("log in handled");
  }

  handleExitClick = () => {
    const { showSignUp } = this.state;
    this.setState({ showSignUp: !showSignUp });
  }

  handleSignUp = () => {
    console.log("sign up");
    const { showSignUp } = this.state;
    this.setState({ showSignUp: !showSignUp });
    console.log(this.state)
  }

  render() {

    const { showSignUp } = this.state;
    return (
      <div>
        <div className="enter-app-nav-container">
          <section className="enter-app-nav-bar">
            <h2 className="enter-app-h2">Second Chance</h2>

            <div className="enter-app-button-container">
              <button className="enter-app-button enter-app-mode">
                Dark Mode
              </button>
              <button className="enter-app-button enter-app-login">
                LOG IN
              </button>
              <button
                onClick={this.handleSignUp}
                className="enter-app-button enter-app-signup"
              >
                SIGN UP
              </button>
            </div>
          </section>
        </div>
        <section className="home-text-section">
          {showSignUp ? <Modal onClick={this.handleExitClick} /> : <></>}
          <h1 className="home-h1">
            Build a connection with those who need it most.
          </h1>
          <p className="home-p">
            ThePenPal, your go to place for messaging inmates
          </p>
          <form className="home-form">
            <div className="search-container">
              <div className="location-icon">
                <LocationOnIcon />
              </div>
              <div>
                <input
                  onClick={this.handleSignUp}
                  placeholder="Enter State..."
                  className="search-bar"
                  type="text"
                />
              </div>
              <div>
                <button className="home-submit-button">
                  <ArrowForwardIosIcon style={{ fontSize: "14px" }}>
                    ArrowForwardIosIcon
                  </ArrowForwardIosIcon>
                </button>
              </div>
            </div>
          </form>
          <div className="button-flex-container">
            <button onClick={this.handleSignUp} className="browse-all-button browser">
              Browse all states
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default EnterApp;
