import React, { useEffect, useState } from "react";
import "../styles/Home/HomeMainSection.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";

function HomeMainSection(props) {
    const [locationSearchInput, setLocationSearchInput] = useState("");
    const history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        if (e.target.name === "browse-button") {
            history.push({
                pathname: "/browse",
                state: { input: "all" }
            });
        }

        if (
            e.target.name === "state-search-button" &&
            locationSearchInput &&
            locationSearchInput !== " "
        ) {
            history.push({
                pathname: "/browse",
                state: { input: locationSearchInput }
            });
        } else if (e.target.name === "state-search-button") {
            //make this trigger an error modal later
            alert("Please provide valid state input");
        }
    };

    const handleChange = e => {
        setLocationSearchInput(e.target.value);
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
                            value={locationSearchInput}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button
                            name="state-search-button"
                            className="home-submit-button"
                            onClick={handleClick}
                        >
                            <ArrowForwardIosIcon style={{ fontSize: "14px" }}>
                                ArrowForwardIosIcon
                            </ArrowForwardIosIcon>
                        </button>
                    </div>
                </div>
            </form>
            <div className="button-flex-container">
                <button
                    name="browse-button"
                    className="browse-all-button"
                    onClick={handleClick}
                >
                    Browse all states
                </button>
            </div>
        </section>
    );
}

export default HomeMainSection;
