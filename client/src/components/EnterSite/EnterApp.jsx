import React, { Component, useEffect, useState } from "react";
import HomeMainCSS from "../../styles/Home/HomeMainSection.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Modal from "../../components/Modal";
import "../../styles/EnterSite/mode.css";
import { withRouter } from "react-router-dom";
import NavBar from "../../containers/NavBar";

class EnterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignUp: false,
            showLogIn: false
        };
    }

    componentDidMount() {
        let token = localStorage.getItem("token");
        token && this.props.history && this.props.history.push("/home");
    }

    //closes modals
    handleExitClick = e => {
        if (e.target.name === "Sign Up") {
            const { showSignUp } = this.state;
            this.setState({ showSignUp: !showSignUp });
        }

        if (e.target.name === "Log In") {
            const { showLogIn } = this.state;
            this.setState({ showLogIn: !showLogIn });
        }
    };

    //displays modals
    handleLogIn = () => {
        const { showLogIn } = this.state;
        this.setState({ showLogIn: !showLogIn });
    };

    handleSignUp = () => {
        const { showSignUp } = this.state;
        this.setState({ showSignUp: !showSignUp });
    };

    render() {
        const { showSignUp, showLogIn } = this.state;
        return (
            <div>
                <div className="enter-app-nav-container">
                    <section className="enter-app-nav-bar">
                        <NavBar
                            title={"Second Chance"}
                            links={["", ""]}
                            buttons={["Log In", "Sign Up"]}
                            buttonStyles={["light", "dark"]}
                            buttonActions={[
                                this.handleLogIn,
                                this.handleSignUp
                            ]}
                        />
                    </section>
                </div>
                <section className="home-text-section">
                    {showSignUp ? (
                        <Modal
                            title="Sign Up"
                            fields={["username", "email", "password"]}
                            onClick={this.handleExitClick}
                        />
                    ) : (
                        showLogIn && (
                            <Modal
                                title="Log In"
                                fields={["email", "password"]}
                                onClick={this.handleExitClick}
                            />
                        )
                    )}
                    <h1 className="home-h1">Staying Connected Matters.</h1>
                    <p className="home-p">
                        Keeping inmates and their loved ones connected during
                        their time apart.
                    </p>

                    <form className="home-form">
                        <div className="search-container">
                            <div className="location-icon">
                                <LocationOnIcon />
                            </div>
                            <div>
                                <input
                                    onClick={this.handleSignUp}
                                    placeholder="Enter State..."
                                    className="search-bar"
                                    type="text"
                                />
                            </div>
                            <div>
                                <div
                                    onClick={this.handleSignUp}
                                    className="home-submit-button"
                                >
                                    <ArrowForwardIosIcon
                                        style={{
                                            fontSize: "14px",
                                            paddingTop: "20px"
                                        }}
                                    >
                                        ArrowForwardIosIcon
                                    </ArrowForwardIosIcon>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="button-flex-container">
                        <button
                            onClick={this.handleSignUp}
                            className="browse-all-button browser"
                        >
                            Browse all states
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(EnterApp);
