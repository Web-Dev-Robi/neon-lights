import React from "react";
import testproject from "../assets/testproject.jpg";
import styles from "../styles/Projects.module.css";

function Projects() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flex_container}>
          <div className={styles.image}>
            <img src={testproject} alt="" />
          </div>
          <div className={styles.title}>
            <h2>Hello Title</h2>
          </div>
          <div className={styles.project_info}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit
              perspiciatis mollitia debitis fugit alias pariatur doloremque
              neque hic quibusdam! Dolorum minus excepturi in, aliquam mollitia
              quasi cum, dignissimos nihil corporis nam, qui consequuntur.
              Dolores quam eum, doloremque at neque ipsa quo nam voluptate
              fugiat aspernatur ad vero porro voluptates?
            </p>
          </div>
          <div className={styles.project_nav}>
            <p>Next Project:</p>
            <div class={styles.pagination}>
              <a href="#">❮</a>
              <a href="#">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
