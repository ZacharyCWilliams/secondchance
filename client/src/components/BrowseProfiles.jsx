import React from "react";
import NavBar from "../containers/NavBar"
import MainContainer from "../containers/MainContainer"
import "../styles/Browse/BrowseProfiles.css"
import { render } from "react-dom";

 const profiles = [
   {
     name: "Sammy Seymore",
     age: 24,
     location: "Santa Rosa, California",
     gender: "Female"
   },
   {
     name: "Lisa Lacomp",
     age: 31,
     location: "San Jose, California",
     gender: "Female"
   },
   {
     name: "Franny Frider",
     age: 44,
     location: "Columbus, Ohio",
     gender: "Female"
   },
   {
     name: "Lex Aliceson",
     age: 54,
     location: "Austin, Texas",
     gender: "Female"
   },
   {
     name: "Julia Campbell",
     age: 21,
     location: "Miami, Florida",
     gender: "Female"
   },
   {
     name: "Courtney Wisemen",
     age: 19,
     location: "Brooklyn, New York",
     gender: "Female"
   },
   {
     name: "Jessica Callter",
     age: 22,
     location: "Boise, Idaho",
     gender: "Female"
   },
   {
     name: "Lana Lokta",
     age: 28,
     location: "Santa Barbara, California",
     gender: "Female"
   },
   {
     name: "Emily Daniels",
     age: 20,
     location: "Santa Cruz, California",
     gender: "Female"
   },
   {
     name: "Sammy Seymore",
     age: 24,
     location: "Santa Rosa, California",
     gender: "Female"
   },
   {
     name: "Lisa Lacomp",
     age: 31,
     location: "San Jose, California",
     gender: "Female"
   },
   {
     name: "Franny Frider",
     age: 44,
     location: "Columbus, Ohio",
     gender: "Female"
   },
   {
     name: "Lex Aliceson",
     age: 54,
     location: "Austin, Texas",
     gender: "Female"
   },
   {
     name: "Julia Campbell",
     age: 21,
     location: "Miami, Florida",
     gender: "Female"
   },
   {
     name: "Courtney Wisemen",
     age: 19,
     location: "Brooklyn, New York",
     gender: "Female"
   },
   {
     name: "Jessica Callter",
     age: 22,
     location: "Boise, Idaho",
     gender: "Female"
   },
   {
     name: "Lana Lokta",
     age: 28,
     location: "Santa Barbara, California",
     gender: "Female"
   },
   {
     name: "Emily Daniels",
     age: 20,
     location: "Santa Cruz, California",
     gender: "Female"
   }
 ];


const mapData = () => {
  let data = profiles.map(profile => {
    return (
      <div className="profile-card">
        <div className="profile-media">
          <img
            className="profile-media"
            src="https://i.imgur.com/d2nMapp.jpg"
            alt="profile-hero-thumb"
          />
        </div>
        <div className="profile-info-section">
          <li className="profile-li profile-name">
            {profile.name}, {profile.age}
          </li>
          <li className="profile-li">{profile.location}</li>
          <li className="profile-li profile-gender">{profile.gender}</li>
        </div>
      </div>
    );
  });

  return data;
}


function BrowseProfiles() {

   const handleLogIn = () => {
    console.log('log in handled');
  }

  const handleSignUp = () => {
    console.log('Sign up handled');
  }

  return (
    <div className="browse-profiles-container">
      <div className="home-container">
        <div className="home-main-div">
          <>
          <div className="sticky-navbar-container">
            <NavBar
              links={["Filter", "About"]}
              buttons={["Log In", "Sign Up"]}
              buttonStyles={["light", "dark"]}
              buttonActions={[handleLogIn, handleSignUp]}
            />
          </div>
            <div className="location-text-container">
              <div className="location-text">
                <h2>All inmates, United States</h2>
              </div>
            </div>
            <ul className="browse-profiles-container">{mapData()}</ul>
          </>
        </div>
      </div>
    </div>
  );
}

export default BrowseProfiles;