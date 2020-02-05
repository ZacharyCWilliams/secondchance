import React from "react";
import "../styles/Home/HomeMainSection.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function HomeMainSection() {

  return (
    <section className="home-text-section">
      <h1 className="home-h1">
        Build a connection with those who need it most.
      </h1>
      <p className="home-p">
        ThePenPal, your go to place for messaging inmates
      </p>
      <form className="home-form">
        <input placeholder="&#xF002; Search" className="search-bar" type="text" />
        {/* <input className="home-submit-button" type="submit" value={'<'} />
        <Icon>star</Icon> */}
        <button className="home-submit-button"> <ArrowForwardIosIcon style={{ fontSize: '12px' }}>ArrowForwardIosIcon </ArrowForwardIosIcon ></button>
      </form>
      <div className="button-flex-container">
        <button className="browse-all-button">Browse all states</button>
      </div>
    </section>
  );
}

export default HomeMainSection;
