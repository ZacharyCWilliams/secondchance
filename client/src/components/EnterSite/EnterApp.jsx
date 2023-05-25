import "../../styles/EnterSite/mode.css";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { withRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const EnterApp = (props) => {
    const [modalState, setModalState] = useState({
        showSignUp: false,
        showLogIn: false
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && props.history) {
            props.history.push("/home");
        }
    }, [props.history]);

    const handleModalToggle = (modalName) => {
        setModalState((prevState) => ({
            ...prevState,
            [modalName]: !prevState[modalName]
        }));
    };

    const { showSignUp, showLogIn } = modalState;

    return (
        <div>
            <div className="enter-app-nav-container">
            <NavBar />
            </div>
            <div className="diagonal-div"></div>
            <h1 className="sc-logo">SC</h1>
            <section className="home-text-section">
                {showSignUp && (
                    <Modal
                        title="Sign Up"
                        fields={["username", "email", "password"]}
                        onClick={() => handleModalToggle("showSignUp")}
                    />
                )}
                {showLogIn && (
                    <Modal
                        title="Log In"
                        fields={["email", "password"]}
                        onClick={() => handleModalToggle("showLogIn")}
                    />
                )}
                <h1 className="home-h1">
                    <span>Empowering people</span> through education, rehabilitation, and love.
                </h1>
                <p className="tagline">
                    Transforming lives by giving people a <span>Second Chance.</span>
                </p>

                
            </section>
        </div>
    );
};

export default withRouter(EnterApp);
