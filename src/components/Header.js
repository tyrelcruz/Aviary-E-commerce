import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/mysher_logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20); // Lower threshold for mobile
    };

    // Add passive listener for better mobile performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always show background on non-home pages
  const showBackground = location.pathname !== "/" || isScrolled;

  return (
    <header className={`header ${showBackground ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src={logo} alt="Mysher Aviary Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <span className="logo-title">MYSHER AVIARY</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/store" onClick={() => setIsMenuOpen(false)}>
                  Store
                </Link>
              </li>
              <li>
                <Link to="/videos" onClick={() => setIsMenuOpen(false)}>
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/birds" onClick={() => setIsMenuOpen(false)}>
                  Birds
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              {/* Action Buttons in Mobile Menu */}
              <li className="mobile-actions">
                <Link
                  to="/birds"
                  className="btn btn-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="mobile-actions">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create an Appointment
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Buttons - Desktop Only */}
          <div className="header-actions desktop-only">
            <a href="#search" className="search-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </a>
            <Link to="/birds" className="btn btn-link">
              About Us
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Create an Appointment
            </Link>
          </div>

          {/* Search Button - Mobile Only */}
          <div className="header-actions mobile-only">
            <a href="#search" className="search-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
