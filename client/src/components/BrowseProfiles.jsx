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
     gender: "Female",
     photos: ["https://i.imgur.com/NEc5Mb1.jpg"]
   },
   {
     name: "Lisa Lacomp",
     age: 31,
     location: "San Jose, California",
     gender: "Female",
     photos: ["https://imgur.com/DLZXW1J.jpg"]
   },
   {
     name: "Franny Frider",
     age: 44,
     location: "Columbus, Ohio",
     gender: "Female",
     photos: ["https://i.imgur.com/SxotJpl.jpg"]
   },
   {
     name: "Lex Aliceson",
     age: 54,
     location: "Austin, Texas",
     gender: "Female",
     photos: ["https://i.imgur.com/cUxkE6r.jpg"]
   },
   {
     name: "Julia Campbell",
     age: 21,
     location: "Miami, Florida",
     gender: "Female",
     photos: ["https://i.imgur.com/R0IpXPi.jpg"]
   },
   {
     name: "Courtney Wisemen",
     age: 19,
     location: "Brooklyn, New York",
     gender: "Female",
     photos: ["https://i.imgur.com/2pZwaEc.jpg"]
   },
   {
     name: "Jessica Callter",
     age: 22,
     location: "Boise, Idaho",
     gender: "Female",
     photos: ["https://i.imgur.com/JWTe2xk.jpg"]
   },
   {
     name: "Lana Lokta",
     age: 28,
     location: "Santa Barbara, California",
     gender: "Female",
     photos: ["https://i.imgur.com/dJd2Rja.jpg"]
   },
   {
     name: "Emily Daniels",
     age: 20,
     location: "Santa Cruz, California",
     gender: "Female",
     photos: ["https://i.imgur.com/JoAShsi.jpg"]
   },
   {
     name: "Alex Seymore",
     age: 24,
     location: "Santa Rosa, California",
     gender: "Male",
     photos: ["https://i.imgur.com/BQfXkEw.jpg"]
   },
   {
     name: "John Lacomp",
     age: 31,
     location: "San Jose, California",
     gender: "Male",
     photos: ["https://i.imgur.com/SVAeq9U.jpg"]
   },
   {
     name: "Brad Frider",
     age: 44,
     location: "Columbus, Ohio",
     gender: "Male",
     photos: ["https://i.imgur.com/we76AIL.jpg"]
   },
   {
     name: "Jimmy Lacktack",
     age: 54,
     location: "Austin, Texas",
     gender: "Male",
     photos: ["https://i.imgur.com/P9MHOqJ.jpg"]
   },
   {
     name: "Cooper Campbell",
     age: 21,
     location: "Miami, Florida",
     gender: "Male",
     photos: ["https://i.imgur.com/QqBA3QI.jpg"]
   },
   {
     name: "Jared Wisemen",
     age: 19,
     location: "Brooklyn, New York",
     gender: "Male",
     photos: ["https://i.imgur.com/wBVZ9Aw.jpg"]
   },
   {
     name: "Carter Callter",
     age: 22,
     location: "Boise, Idaho",
     gender: "Male",
     photos: ["https://i.imgur.com/H22xbOJ.jpg"]
   },
   {
     name: "Lana Lokta",
     age: 28,
     location: "Santa Barbara, California",
     gender: "Female",
     photos: ["https://i.imgur.com/3PzIvCm.jpg"]
   },
   {
     name: "Emily Daniels",
     age: 20,
     location: "Santa Cruz, California",
     gender: "Female",
     photos: ["https://i.imgur.com/4bLOI2K.jpg"]
   }
 ];


const mapData = () => {
  let data = profiles.map(profile => {
    return (
      <div className="profile-card">
        <div className="profile-media">
          <img
            className="profile-media"
            src={profile.photos[0]}
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