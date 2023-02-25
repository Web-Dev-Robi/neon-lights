import text from "../assets/texttoimageai.png";
import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function TextToImage() {
  return (
    <div>
      <div>
        <div className={styles.container}>
          <div className={styles.flex_container}>
            <div className={styles.image}>
              <img
                className={styles.image_image}
                src={text}
                alt="text to image website"
                loading=" lazy"
              />
            </div>
            <div className={styles.title}>
              <h2>
                <a href="">OpenAi Text to Image Generator</a>
              </h2>
            </div>
            <div className={styles.project_info}>
              <p>
                Users can input a text description into the application, and the
                DALL-E API will generate an image that corresponds to the
                description. The generated image is then displayed in the web
                application for the user to view and download.
              </p>
              <p>
                Overall, this web application makes it easy for users to
                generate high-quality images from text descriptions without
                needing to have any experience with machine learning or image
                generation. Site Build in React.
              </p>
            </div>
            <div className={styles.project_nav}>
              <p>Next Project:</p>
              <div className={styles.pagination}>
                <Link to="/projects">❮</Link>
                <Link to="/github">❯</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextToImage