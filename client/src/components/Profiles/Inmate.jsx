import React from "react";
import NavBar from "../../containers/NavBar"
import MainContainer from "../../containers/MainContainer"
import "../../styles/Browse/BrowseProfiles.css"
import { render } from "react-dom";


function Inmate() {

  // const profile = {
  //   name: "Sammy Seymore",
  //   age: 24,
  //   location: "Santa Rosa, California",
  //   gender: "Female",
  //   photos: ["https://i.imgur.com/NEc5Mb1.jpg"]
  // };

  const handleLogIn = () => {
    console.log('log in handled');
  }

  const handleSignUp = () => {
    console.log('Sign up handled');
  }

  return (
    <div className="browse-profiles-container">
      <div className="home-container">
        <NavBar
          links={["Filter", "About"]}
          buttons={["Log In", "Sign Up"]}
          buttonStyles={["light", "dark"]}
          buttonActions={[handleLogIn, handleSignUp]}
        />
        
      </div>
    </div>
  );
}

export default Inmate;