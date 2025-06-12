import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styleModules/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContent}>
        <Link to="/" className={styles.logoWrapper}>
          Go <span className={styles.logoHighlight}>Mov.</span>
        </Link>
        <div className={`${styles.buttonsWrapper} ${styles.desktopMenu}`}>
          <Link to="/about" className={styles.btn}>
            O nas
          </Link>
          <Link to="/contact" className={styles.btn}>
            Kontakt
          </Link>
          <Link to="/movie-app" className={styles.btn}>
            Aplikacja
          </Link>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/about" className={styles.mobileBtn} onClick={toggleMenu}>
            O nas
          </Link>
          <Link to="/contact" className={styles.mobileBtn} onClick={toggleMenu}>
            Kontakt
          </Link>
          <Link
            to="/movie-app"
            className={styles.mobileBtn}
            onClick={toggleMenu}
          >
            Aplikacja
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
