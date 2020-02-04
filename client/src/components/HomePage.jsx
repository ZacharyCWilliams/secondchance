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
        <section className="home-text-section">
          <h1 className="home-h1">
            Build a connection with those who need it most.
          </h1>
          <p className="home-p">
            ThePenPal, your go to place for messaging inmates
          </p>
          <form className="home-form">
            <input
              placeholder="Enter State.."
              className="search-bar"
              type="text"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
            <input className="home-submit-button" type="submit" value=">" />
          </form>
          <div className="button-flex-container">
            <button className="browse-all-button">Browse all states</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
