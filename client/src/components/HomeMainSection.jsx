import React, {useEffect, useState} from "react";
import "../styles/Home/HomeMainSection.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function HomeMainSection(props) {

  return (
    <section className="home-text-section">
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
        <button className="browse-all-button">Browse all states</button>
      </div>
    </section>
  );
}

export default HomeMainSection;
