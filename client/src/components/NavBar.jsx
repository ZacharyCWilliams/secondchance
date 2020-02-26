import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//styles
import "../styles/NavBar/NavBar.css";

//components
import NavMapper from "./NavMapper";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.history.push("/home");
    };
    navigation() {
        const buttons = this.props.buttons;
        const links = this.props.links;
        const buttonActions = this.props.buttonActions;
        const buttonStyles = this.props.buttonStyles;

        return (
            <NavMapper
                buttons={buttons}
                links={links}
                buttonActions={buttonActions}
                buttonStyles={buttonStyles}
            />
        );
    }

    render() {
        return (
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="nav-title-container">
                        <a
                            onClick={this.handleClick}
                            style={{ cursor: "pointer" }}
                        >
                            <h1 className="nav-title">{this.props.title}</h1>
                        </a>
                    </div>
                    <div className="nav-links">{this.navigation()}</div>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);
