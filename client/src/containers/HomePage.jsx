import React, { Component } from "react";

//styles
import "../styles/Home/HomePage.css";

//components
import NavBar from "./NavBar";
import HomeMainSection from "../components/HomeMainSection";
import Modal from "../components/Modal";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    handleLogIn = () => {
        console.log("log in handled");
    };

    handleExitClick = () => {
        const { showModal } = this.state;
        this.setState({ showModal: !showModal });
    };

    handleSignUp = () => {
        console.log("sign up");
        const { showModal } = this.state;
        this.setState({ showModal: !showModal });
    };

    render() {
        const { showModal } = this.state;
        return (
            <>
                <div className="home-container">
                    <div className="home-main-div">
                        {showModal ? (
                            <Modal onClick={this.handleExitClick} />
                        ) : (
                            <></>
                        )}
                        <NavBar
                            title={"Second Chance"}
                            links={["About", "Donate", "Contact"]}
                            buttons={["Sign Out"]}
                            buttonStyles={["light", "dark"]}
                            buttonActions={[
                                this.handleLogIn,
                                this.handleSignUp
                            ]}
                        />
                        <HomeMainSection />
                    </div>
                </div>
            </>
        );
    }
}
export default HomePage;
