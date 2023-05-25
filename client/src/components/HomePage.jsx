import React, { Component } from "react";

//styles
import "../styles/Home/HomePage.css";

//components
import NavBar from "./NavBar/NavBar";
import HomeMainSection from "./HomeMainSection";
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
                        <HomeMainSection />
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(HomePage);
