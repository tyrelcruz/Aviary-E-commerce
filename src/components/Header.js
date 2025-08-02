import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/mysher_logo.svg";
import { useHeaderScroll, useHeaderBackground } from "../lib/useHeaderScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Use custom hook for scroll detection
  const isScrolled = useHeaderScroll(20);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Determine header styling based on current page and scroll state
  const shouldShowBackground = useHeaderBackground(
    location.pathname,
    isScrolled
  );

  const getHeaderClasses = () => {
    const baseClass = "header";
    return `${baseClass} ${shouldShowBackground ? "header-scrolled" : ""}`;
  };

  return (
    <header className={getHeaderClasses()}>
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
            <Link to="/birds" className="btn btn-link">
              About Us
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Create an Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
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
