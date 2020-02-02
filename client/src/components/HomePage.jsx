import React from "react";
import "../styles/HomePage.css";

function HomePage() {

  return (
    <div className="home-container">
      <div className="home-main-div">
        <nav className="home-navbar">
          <div className="home-title-container">
            <h1 className="home-title">ThePenPal</h1>
          </div>
          <div className="navlink-section">
            <div className="button-group">
              <button className="button-light">Login</button>
              <button className="button-dark">Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;
