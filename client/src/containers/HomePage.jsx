import React, { Component } from "react";

//styles
import "../styles/Home/HomePage.css";

//components
import NavBar from "./NavBar";
import HomeMainSection from "../components/HomeMainSection";
import Modal from "../components/Modal";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    handleSignOut = () => {
        localStorage.removeItem("token");
        this.props.history.push("/login");
    };

    render() {
        return (
            <>
                <div className="home-container">
                    <div className="home-main-div">
                        <NavBar
                            title={"Second Chance"}
                            links={["About", "Donate", "Contact"]}
                            buttons={["Sign Out"]}
                            buttonStyles={["light", "dark"]}
                            buttonActions={[this.handleSignOut]}
                        />
                        <HomeMainSection />
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(HomePage);
