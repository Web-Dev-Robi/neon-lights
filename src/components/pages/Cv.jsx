import styles from "../styles/Cv.module.css";
import cv from "../assets/webp/cv.webp";

function Cv() {
  return (
		<div className={styles.container}>
			<picture className={styles.image_container}>
				{/* <source
					srcset={cvavif}
					type="image/avif"
				/>
				<source
					srcset={cvsmallavif}
					media="(min-width: 40em)"
				/> */}
				<img
					className={styles.image_image}
					src={cv}
					alt="Brian Cordisco CV"
					loading="lazy"
				/>
			</picture>
		</div>
  );
}

export default Cv;
