import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../styles/Browse/BrowseProfiles.css";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { profiles } from "./data";

const mapData = filtered => {
    let data = filtered.map(profile => {
        return (
            <div key={profile.id} c lassName="profile-card">
                <div className="profile-media">
                    <Link
                        to={{
                            pathname: `/profile/${profile.id}`,
                            state: { profile }
                        }}
                    >
                        <img
                            className="profile-media"
                            src={profile.photos[0]}
                            alt="profile-hero-thumb"
                        />
                    </Link>
                </div>
                <div className="profile-info-section">
                    <li className="profile-li profile-name">
                        {profile.name}, {profile.age}
                    </li>
                    <li className="profile-li">{profile.location}</li>
                    <li className="profile-li profile-gender">
                        {profile.gender}
                    </li>
                </div>
            </div>
        );
    });

    return data;
};

function BrowseProfiles(props) {
    const userInput = props.location.state.input;
    const [inmates, setInmates] = useState(profiles);
    const handleLogIn = () => {
        console.log("log in handled");
    };

    const handleSignUp = () => {
        console.log("Sign up handled");
    };

    useEffect(() => {
        const filteredRes = inmates.filter(inmate => {
            return inmate.location
                .toLowerCase()
                .includes(userInput.toLowerCase());
        });

        userInput !== "all" && setInmates(filteredRes);
    }, []);

    return (
        <div className="browse-profiles-container">
            <div className="home-container">
                <div className="home-main-div">
                    <>
                        <div className="sticky-navbar-container">
                            <NavBar
                                title={"Second Chance"}
                                links={["Profile", "Messages"]}
                                buttons={["Account"]}
                                buttonStyles={["light", "dark"]}
                                buttonActions={[handleLogIn, handleSignUp]}
                            />
                        </div>
                        <div className="location-text-container">
                            <div className="location-text">
                                <h2>
                                    All inmates,{" "}
                                    {userInput === "all"
                                        ? "United States"
                                        : userInput}
                                </h2>
                            </div>
                        </div>
                        <ul className="browse-profiles-container">
                            {inmates.length > 0 ? (
                                mapData(inmates)
                            ) : (
                                <h2>No inmates in {userInput} found </h2>
                            )}
                        </ul>
                    </>
                </div>
            </div>
        </div>
    );
}

export default BrowseProfiles;
