import React from 'react';

const NavButton = ({text, index, onClick, style}) => {
  const handleClick = onClick;
  return (
  <button className={style} key={index} onClick={handleClick}>
    {text}
  </button>
  )
}

export default NavButton;
