import git from "../assets/github.png";
import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function GitHub() {
  return (
    <div>
      <div>
        <div className={styles.container}>
          <div className={styles.flex_container}>
            <div className={styles.image}>
              <img
                className={styles.image_image}
                src={git}
                alt="https://git-hub-finder-vite.vercel.app/ website"
              />
            </div>
            <div className={styles.title}>
              <h2>
                <a href="https://git-hub-finder-vite.vercel.app/">
                  GitHub Finder
                </a>
              </h2>
            </div>
            <div className={styles.project_info}>
              <p>
                This website allows you to search for GitHub users by entering
                their username into a search bar. Upon submitting the username,
                the website displays the user's profile picture, bio, location,
                and number of followers and following. Additionally, the website
                displays a list of the user's public repositories with details
                like the repository name, description, and the number of stars
                and forks.
              </p>
              <p>
                The website provides a simple and convenient way to
                quickly search for GitHub users and view their public
                repositories. Built in Vite.
              </p>
            </div>
            <div className={styles.project_nav}>
              <p>Next Project:</p>
              <div className={styles.pagination}>
                <Link to="/texttoimage">❮</Link>
                <Link>❯</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHub