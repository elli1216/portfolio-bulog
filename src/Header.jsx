import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="background-div">
        <h1 className="header-title" >OG Bulog</h1>
        <div className={`nav-list ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a className="nav-link" href="">Home</a></li>
            <li><a className="nav-link" href="">About</a></li>
            <li><a className="nav-link" href="">Services</a></li>
            <li><a className="nav-link-btn" href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </header>
  );
}

export default Header;