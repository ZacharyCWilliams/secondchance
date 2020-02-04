import React from 'react';

const NavButton = ({text, index, onClick}) => {
  const handleClick = onClick;
  return (
  <button className="button-light" key={index} onClick={handleClick}>
    {text}
  </button>
  )
}


export default NavButton;
