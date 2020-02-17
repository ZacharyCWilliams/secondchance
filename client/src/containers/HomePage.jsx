import React, { Component } from "react";

//styles
import "../styles/Home/HomePage.css";

//components
import NavBar from "./NavBar";
import HomeMainSection from "../components/HomeMainSection";
import Modal from "../components/Modal";


class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
  }

  handleLogIn() {
    console.log('log in handled');
  }

  handleExitClick() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  handleSignUp() {
    console.log('sign up');
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;
    return (
      <>
        <div className="home-container">
          <div className="home-main-div">
            {showModal ? <Modal onClick={this.handleExitClick} /> : <></>}
            <NavBar
              links={['About', 'Donate', 'Contact']}
              buttons={['Log In', 'Sign Up']}
              buttonStyles={['light', 'dark']}
              buttonActions={[this.handleLogIn, this.handleSignUp]}
            />
            <HomeMainSection />
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
