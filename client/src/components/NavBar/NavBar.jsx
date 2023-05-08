import React from "react";
import { withRouter } from "react-router-dom";
import NavButton from "../NavButton";
import "./NavBar.css";

const NavBar = ({ history, buttons, links, buttonActions, title }) => {
  const linksHTML = links
    ? links.map((link, index) => (
        <a className="nav-link" key={index} href="#">
          {link}
        </a>
      ))
    : null;

  const buttonsHTML = buttons
    ? buttons.map((button, index) => (
        <NavButton
          text={button}
          key={index}
          onClick={buttonActions[index]}
          style={{ marginLeft: "1rem" }}
        />
      ))
    : null;

  return (
    <nav className="navbar">
      <a className="brand" href="#" onClick={() => history.push("/home")}>
        {title}
      </a>
      <ul className="nav">
        {linksHTML}
        {buttonsHTML}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
