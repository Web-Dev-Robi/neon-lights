import React from "react";
import inquizable from "../assets/inquizable.png";
import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flex_container}>
          <div className={styles.image}>
            <img
              className={styles.image_image}
              src={inquizable}
              alt="inquizable.com website"
            />
          </div>
          <div className={styles.title}>
            <h2>
              <a href="https://www.inquizable.com/">Inquizable</a>
            </h2>
          </div>
          <div className={styles.project_info}>
            <p>
              Inquizable is a website that offers a variety of trivia and quiz
              games for users to play and compete with others from around the
              world. The site covers a broad range of topics, including sports,
              science, history, geography, pop culture, and more.
            </p>
            <p>
              The site's interface is clean and user-friendly, and the quizzes
              are engaging and challenging. Users can play on any device,
              including desktop, tablet, and mobile devices.
            </p>
          </div>
          <div className={styles.project_nav}>
            <p>Next Project:</p>
            <div className={styles.pagination}>
              <Link>❮</Link>
              <Link to="/texttoimage">❯</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
