import React from "react";
import { Link } from "react-router-dom";
import { SiCircle } from "react-icons/si";
import styles from "../components/styles/MobileNav.module.css"


function WideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <div className={styles.nav_left}>
          <div className="left_circle">
            <SiCircle />
          </div>
          <Link to="/">
            <a href="">Brian Cordisco</a>
          </Link>
        </div>
        <div className={styles.nav_right}>
          <a href="" className={styles.git}>
            GitHub
          </a>
          <a href="" className={styles.twitter}>
            Twitter
          </a>
          <a href="" className={styles.linkedin}>
            Linkedin
          </a>
          <div className={styles.nav_buttons}>
            <div className="right-circle">
              <SiCircle />
            </div>
            <Link to="/" className={styles.home_button}>
              Home
            </Link>
            <Link to="/aboutme" className={styles.about_button}>
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WideNav;
