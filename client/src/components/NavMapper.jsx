import React from 'react';
import NavButton from './NavButton';


const NavMapper = ({ buttons, links, buttonActions }) => {

  let linksHTML, buttonsHTML = '';

  if (links) {
    let conditionalStyle = {};

    if (links && !buttons) {
      conditionalStyle = {marginRight: 0, marginLeft: 28};
    }

    linksHTML = links.map((link, index) => {
      return (
        <a className="nav-link" style={conditionalStyle} key={index}>
          {link}
        </a>
      );
    })
   } else {
    linksHTML = <div></div>
  }

  if (buttons) {
    buttonsHTML = buttons.map((button, index) => {
      const buttonAction = buttonActions[index];

      return (
        <NavButton text={button} key={index} onClick={buttonAction} />
      );
    })
  } else {
    buttonsHTML = <div></div>
  }

  const navGroup = () => {
    let conditionalStyle = {};

    if (!(buttons && links)) {
      conditionalStyle = {justifyContent: 'flex-end'};
    }

    return (
      <div className="nav-group" style={conditionalStyle}>
        {linksHTML}
        {buttonsHTML}
      </div>
    )
  }

  return (
    <>
      {navGroup()}
    </>
  )
}

export default NavMapper;