import React from "react";
import test from '../assets/testtwo.jpg'
import styles from "../styles/AboutMe.module.css"

function AboutMe() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_me_container}>
        <h2>My Story</h2>
        <img src={test} height="500px" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          rerum maiores delectus optio. Nesciunt voluptatibus excepturi esse
          repellat. Exercitationem ab impedit doloribus voluptate labore?
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
