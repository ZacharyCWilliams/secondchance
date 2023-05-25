import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import "../styles/InmateProfile/InmateProfile.css";

const InmateProfile = ({ location }) => {
    const { profile: inmate } = location.state;
    const history = useHistory();
    const [profile, setProfile] = useState(inmate);
    const image = profile.photos[0];

    const backToBrowse = () => {
        history.goBack();
    };
    return (
        <div className="inmate-container">
            <div className="inmate-main-div">
                <div className="profile-main">
                    <div className="profile-header-section">
                        <div className="profile-name-age-location">
                            <div
                                style={{
                                    display: "flex"
                                }}
                            >
                                <h1>{profile.name}</h1>
                                <p style={{ padding: "10px" }}>{profile.age}</p>
                            </div>

                            <p>Santa Cruz, {profile.location}</p>
                        </div>
                        <div className="profile-message-button-container">
                            <button>Message</button>
                        </div>
                    </div>

                    <div className="photo-section">
                        <div id="default-photo" className="profile-photo">
                            <img
                                style={{
                                    display: "inline-block",
                                    borderRadius: "50%"
                                }}
                                width="100%"
                                src={image}
                            ></img>
                        </div>
                        <div id="other-photo" className="profile-photo">
                            <img
                                style={{
                                    display: "inline-block",
                                    borderRadius: "50%"
                                }}
                                width="100%"
                                src={image}
                            ></img>
                        </div>
                        <div id="other-photo" className="profile-photo">
                            <img
                                style={{
                                    display: "inline-block",
                                    borderRadius: "50%"
                                }}
                                width="100%"
                                src={image}
                            ></img>
                        </div>
                        <div id="other-photo" className="profile-photo">
                            <img
                                style={{
                                    display: "inline-block",
                                    borderRadius: "50%"
                                }}
                                width="100%"
                                src={image}
                            ></img>
                        </div>
                    </div>
                    <div className="info-section">
                        <h2 className="about-header">About {profile.name} </h2>
                        <p className="about-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem ea beatae repellat quidem, dolorum est
                            molestias tempora doloribus quae ullam tenetur
                            aspernatur recusandae minima ut et accusantium odio
                            cumque eligendi. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolorem ea beatae
                            repellat quidem, dolorum est molestias tempora
                            doloribus quae ullam tenetur aspernatur recusandae
                            minima ut et accusantium odio cumque eligendi.
                        </p>
                    </div>
                    <div className="interests-section">
                        <h3 className="interests-header">Interests</h3>
                        <div className="interests-span-container">
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>

                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                            <span>Soccer</span>
                        </div>
                    </div>
                    <div className="goals-section">
                        <h3 className="goals-title">Goals</h3>
                        <div className="goals-container">
                            <div className="goal">
                                <h3 className="goal-header">
                                    When I get out I want to
                                </h3>
                            </div>
                            <div className="goal">
                                <h3 className="goal-header">
                                    Places I want to visit
                                </h3>
                            </div>
                            <div className="goal">
                                <h3 className="goal-header">
                                    Where I see myself in 10 years
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="inc-information">
                        <h2 className="inc-header">
                            Incarceration Information{" "}
                        </h2>
                        <div className="inc-list-items-div">
                            <ul>
                                <li>Earliest Release Date: N/A</li>
                                <li>Latest Release Date: N/A</li>
                                <li>Incarcerated Since: 2016</li>
                                <li>
                                    Incarcerated For: Robbery | Case Details
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InmateProfile;
