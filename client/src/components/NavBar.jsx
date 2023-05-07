import React from "react";
import { withRouter } from "react-router-dom";

import NavMapper from "./NavMapper";

import "../styles/NavBar/NavBar.css";

const NavBar = ({ history, buttons, links, buttonActions, buttonStyles, title }) => (
  <nav className="nav-container">
    <div className="nav-content">
      <div className="nav-title-container">
        <h1 className="nav-title" onClick={() => history.push("/home")} style={{ cursor: "pointer" }}>
          {title}
        </h1>
      </div>
      <div className="nav-links">
        <NavMapper buttons={buttons} links={links} buttonActions={buttonActions} buttonStyles={buttonStyles} />
      </div>
    </div>
  </nav>
);

export default withRouter(NavBar);
