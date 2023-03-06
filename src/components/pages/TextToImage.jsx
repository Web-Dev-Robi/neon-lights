import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import texttoimageai from "../assets/webp/texttoimageai.webp";
import texttoimageaiavif from "../assets/avif/texttoimageai.avif";

function TextToImage() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<picture className={styles.image}>
							<source
								srcset={texttoimageaiavif}
								type="image/avif"
							/>
							<img
								className={styles.image_image}
								src={texttoimageai}
								alt="text to img generator"
								loading="lazy"
							/>
						</picture>
						<div className={styles.title}>
							<a href="https://openai-text-to-image-reactv2.vercel.app">
								OpenAi Text to Image Generator
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								Users can input a text description into the
								application, and the DALL-E API will generate an
								image that corresponds to the description. The
								generated image is then displayed in the web
								application for the user to view and download.
							</p>
							<p>
								Overall, this web application makes it easy for
								users to generate high-quality images from text
								descriptions without needing to have any
								experience with machine learning or image
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

export default TextToImage;
