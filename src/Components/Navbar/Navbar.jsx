import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Change navbar background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">Moojo Writes.</div>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop-menu">
          <li><a href="#home" className={activeLink === '#home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about-me" className={activeLink === '#about-me' ? 'active' : ''}>About Me</a></li>
          <li><a href="#services" className={activeLink === '#services' ? 'active' : ''}>Services</a></li>
          <li><a href="#projects" className={activeLink === '#projects' ? 'active' : ''}>My Projects</a></li>
          <li><a href="#testimonials" className={activeLink === '#testimonials' ? 'active' : ''}>Testimonials</a></li>
          <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>☰</div>

        {/* Mobile Menu */}
        <ul className={`nav-links mobile-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={toggleMenu}>Home</a></li>
          <li><a href="#about-me" className={activeLink === '#about-me' ? 'active' : ''} onClick={toggleMenu}>About Me</a></li>
          <li><a href="#services" className={activeLink === '#services' ? 'active' : ''} onClick={toggleMenu}>Services</a></li>
          <li><a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={toggleMenu}>My Projects</a></li>
          <li><a href="#testimonials" className={activeLink === '#testimonials' ? 'active' : ''} onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
