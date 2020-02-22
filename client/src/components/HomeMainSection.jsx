import React, { useEffect, useState } from "react";
import "../styles/Home/HomeMainSection.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";

function HomeMainSection(props) {
    const history = useHistory();
    const handleClick = () => {
        history.push("/browse");
    };

    return (
        <section className="home-text-section">
            <h1 className="home-h1">Staying Connected Matters.</h1>
            <p className="home-p">
                Keeping inmates and their loved ones connected during their time
                apart.
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
                <button className="browse-all-button" onClick={handleClick}>
                    Browse all states
                </button>
            </div>
        </section>
    );
}

export default HomeMainSection;
