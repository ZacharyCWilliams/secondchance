import React, { useState } from "react";
import "../../styles/EnterSite/mode.css";
import "../../styles/Home/HomePage.css";
import PlaceHolderLogo from "../../assets/logo.png";

const EnterSite = () => {
    const [mode, setMode] = useState(true);
    const toggleMode = () => setMode(!mode);
    const buttonText = mode ? "Dark Mode" : "Light Mode";
    const modeClass = mode ? "light-mode" : "dark-mode";

    return (
        <div className={`App ${modeClass}`}>
            <div className="enter-site-holder">
                <div className="enter-site-container">
                    <div>
                        <div>
                            <img src={PlaceHolderLogo} alt="placeholder logo" />
                            <h1 className="enter-site-nav">SC</h1>
                        </div>
                        <div className="button-container">
                            <button
                                className={mode ? "button-light-m" : "button-dark-m"}
                                onClick={toggleMode}
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                    <div className="flex-container-enter-site">
                        <div className="flex-box-enter">
                            <div className="enter-site-flex">
                                <h1 className="enter-site-h1">
                                    Staying Connected Matters
                                </h1>
                                <p className="enter-site-p">
                                    Second Chance is a platform aimed at
                                    improving our justice system. We're
                                    driving down the recidivism rate by
                                    keeping inmates and their loved ones
                                    connected during their time apart.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterSite;
