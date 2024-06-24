
import React, { useState } from 'react';
import './header.css';
import headerlogo from  '../assets/icons/almndheade.png'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={headerlogo} style={{width:"150px"}} alt="" />
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/full-stack">Full-Stack</a></li>
        <li><a href="/front-end">Front-End</a></li>
        <li><a href="/back-end">Back-End</a></li>
        <li><a href="/mobile-application">Mobile Application</a></li>
        <li><a href="/graphic-design">Graphic Design</a></li>
        <li><a href="/manual-testing">Manual Testing</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <div className="navbar-buttons">
        <button className="free-workshop">Free Workshop</button>
        <button className="enroll-now">Enroll Now</button>
      </div>
      </ul>
      
    </nav></>
  );
};

export default Header;