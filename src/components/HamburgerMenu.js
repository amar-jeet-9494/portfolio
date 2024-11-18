import React, { useState } from 'react';
// import './HamburgerMenu.css'; // Optional: If you want to add some CSS for styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2 className="logo-heading">Emrit Diyal</h2>
        </div>
        <div className="hamburger" id="hamburger" onClick={handleToggle}>
          <i className={`fas fa-bars hamburger-icon ${isOpen ? 'hidden' : ''}`}></i>
          <i className={`fas fa-times cross-icon ${isOpen ? '' : 'hidden'}`}></i>
        </div>
        <div className={`menu ${isOpen ? 'show' : 'hide'}`}>
          <ul className="menu-list">
            <li className="menu-list-items"><a className="links" href="#home">Home</a></li>
            <li className="menu-list-items"><a className="links" href="#portfolio">Portfolio</a></li>
            <li className="menu-list-items"><a className="links" href="#about">About</a></li>
            <li className="menu-list-items"><a className="links" href="#services">Services</a></li>
            <li className="menu-list-items"><a className="links" href="#contact">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HamburgerMenu;
