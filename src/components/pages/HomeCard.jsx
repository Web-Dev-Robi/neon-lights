import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/HomeCard.module.css'

function HomeCard() {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.title_caption}>
          <h1 className={styles.caption}>
            "Crafting the Web, <br></br>One Pixel at a Time"
          </h1>
          <p className={styles.moto}>
            "Bringing your vision to life with passion and precision! As an avid
            web developer, I'm driven by a relentless passion for coding and a
            hunger to keep learning the latest technologies. Let's collaborate
            to create dynamic, innovative web solutions that are as unique as
            they are impressive."
          </p>
        </div>
        <Link to="/projects">
          <a href="" className={styles.neon_button}>
            Projects
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
