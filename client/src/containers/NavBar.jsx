import React, { Component } from "react";
import '../styles/NavBar.css';

//components
import NavMapper from '../components/NavMapper';

class NavBar extends Component {
  constructor(props) {
    super(props);
  };

  navigation() {
    const buttons = this.props.buttons;
    const links = this.props.links;
    const buttonActions = this.props.buttonActions;

    return(
      <NavMapper buttons={buttons} links={links} buttonActions={buttonActions}/>
    );

  }

  render() {
    return (
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-title-container">
            <h1 className="nav-title">ThePenPal</h1>
          </div>
          <div className="nav-links">
            {this.navigation()}
          </div>
        </div>
      </nav>
    )
  }
}


export default NavBar;