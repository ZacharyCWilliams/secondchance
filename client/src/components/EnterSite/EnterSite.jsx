import React, { Component } from "react";
import Mode from "../../styles/EnterSite/mode.css";
import App from "../../styles/Home/HomePage.css";

class EnterSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            mode: true,
            buttonText: "Dark Mode"
        };
    }

    displayMenu = () => {
        const { showMenu } = this.state;
        this.setState({ showMenu: true });
    };

    hideMenu = () => {
        const { showMenu } = this.state;
        this.setState({ showMenu: false });
    };

    mode = () => {
        const { mode, buttonText } = this.state;
        this.setState({ mode: !mode });
        if (buttonText === "Dark Mode") {
            this.setState({ buttonText: "Light Mode" });
        } else {
            this.setState({ buttonText: "Dark Mode" });
        }
    };

    render() {
        const { showMenu } = this.state;
        console.log(showMenu);
        return (
            <div
                className={this.state.mode ? "App light-mode" : "App dark-mode"}
            >
                <div className="enter-site-holder">
                    <div className="enter-site-container">
                        <div>
                            <div>
                                <h1 className="enter-site-nav">
                                    Second Chance
                                </h1>
                            </div>
                            <div className="button-container">
                                <div className="light-toggle"></div>
                                <div className="dark-toggle"></div>
                                <button
                                    className="toggle-button"
                                    className={
                                        this.state.mode
                                            ? "button-light-m"
                                            : "button-dark-m"
                                    }
                                    onClick={this.mode}
                                >
                                    {this.state.buttonText}
                                </button>
                            </div>
                        </div>
                        <div className="flex-container-enter-site">
                            <div className="flex-box-enter">
                                <div className="enter-site-flex">
                                    {/* <div> */}
                                    <h1 className="enter-site-h1">
                                        Staying Connected Matters
                                    </h1>
                                    {/* </div> */}
                                    <p className="enter-site-p">
                                        Second Chance is a platform aimed at
                                        improving our justice system. We're
                                        driving down the recidivism rate by
                                        keeping inmates and their loved ones
                                        connected during their time apart.
                                    </p>
                                    {/* <button
                    onMouseEnter={this.displayMenu}
                    onMouseLeave={this.hideMenu}>
                      Enter Site
                    </button> */}
                                    {/* {showMenu &&
                  <div className="hover-menu">
                    <div clasName="citizen-menu">
                      {/* <img src="" alt=""/> */}
                                    {/* <button className="login">Login</button>
                      <button className="signup">Signup</button>
                    </div>
                    <div className="inmate-menu">
                      {/* <img src="" alt="" /> */}
                                    {/* <button className="login">Login</button>
                      <button className="signup">Signup</button>
                    </div>
                  </div>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnterSite;
