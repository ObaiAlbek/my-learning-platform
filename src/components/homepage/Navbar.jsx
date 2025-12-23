import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

function Navbar({ isLoggedIn, currentPath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Login Button verstecken auf Auth-Seiten
  const hideLoginButton = ["/login", "/register", "/forgot", "/new-password"].includes(currentPath);

  return (
    <nav>
      {/* Logo ist jetzt ein Link zur Startseite */}
      <Link to="/" className="logo" onClick={closeMenu} style={{ textDecoration: 'none' }}>
        DevBase
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
      </div>

      <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>Start</Link>
          </li>
          <li>
            <Link to="/html/intro" onClick={closeMenu}>HTML</Link>
          </li>
          <li>
            <Link to="/css/intro" onClick={closeMenu}>CSS</Link>
          </li>
          <li>
            <a href="https://obaialbek.42web.io/?i=1" className="nav-special" target="_blank" rel="noreferrer" onClick={closeMenu}>
              About me
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          {isLoggedIn ? (
            <button 
                className="btn btn-outline" 
                type="button" 
                onClick={() => { navigate("/profile"); closeMenu(); }}
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              👤 Profil
            </button>
          ) : (
            !hideLoginButton && (
              <button className="btn" type="button" onClick={() => { navigate("/login"); closeMenu(); }}>
                Login
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;