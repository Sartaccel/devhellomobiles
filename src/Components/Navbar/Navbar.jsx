import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <a className="navbar-brand text-white fw-bold" href="#">
            <img src="./images/logo.png" alt="logo" className="nav-logo" />
          </a>

          {/* Toggle / Close Button */}
          <button
            className="navbar-toggler"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <span className="close-icon">×</span>
            ) : (
              <span className="navbar-toggler-icon-custom"></span>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse justify-content-end d-none d-lg-block">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
              <li className="nav-item"><a href="/products" className="nav-link">Our Products</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu: DROPS FROM UNDER NAVBAR */}
      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <ul className="mobile-nav-list">
          <li><a href="/" onClick={() => setMobileOpen(false)}>Home</a></li>
          <hr />
          <li><a href="/about" onClick={() => setMobileOpen(false)}>About Us</a></li>
          <hr />
          <li><a href="/products" onClick={() => setMobileOpen(false)}>Our Products</a></li>
          <hr />
          <li><a href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
