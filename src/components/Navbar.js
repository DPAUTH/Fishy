import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import fishylogoblue from '../images/fishylogoblue.png';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar" >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div class='footer-logo'>
                    Fishy
                    </div>
          </Link>
          
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/causes" className="nav-links" onClick={closeMobileMenu}>
                Causes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/effects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Effects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/solutions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/fish-index"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Fish-Index
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
