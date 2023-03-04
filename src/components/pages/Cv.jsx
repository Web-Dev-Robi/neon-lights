import React from "react";
import cv from "../assets/Cv.png";
import styles from "../styles/Cv.module.css";

function Cv() {
  return (
    <div>
      <div className={styles.image_container}>
        <img src={cv} alt="Brian Cordisco CV/Resume" loading="lazy" />
      </div>
    </div>
  );
}

export default Cv;
