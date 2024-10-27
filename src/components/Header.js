import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const smoothScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu if in mobile view
  };

  return (
    <motion.header
      className="main-header"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
    >
      <nav className="nav main-nav">
        {/* Logo Section */}
        <div className="logo" onClick={() => smoothScroll('home')}>
          <img src="/images/g.png" alt="Logo" className="logo-image" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? 'open' : ''}>
          <li><button className="link" onClick={() => smoothScroll('home')}>Home</button></li>
          <li><button className="link" onClick={() => smoothScroll('skills')}>Skills</button></li>
          <li><button className="link" onClick={() => smoothScroll('projects')}>Projects</button></li>
          <li><button className="link" onClick={() => smoothScroll('contact')}>Contact</button></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
