import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import meme from "../assets/webp/meme.webp";
import memeavif from "../assets/avif/meme.avif";
import memesmallavif from "../assets/avif/memesmall.avif";

function MemeGen() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<picture className={styles.image}>
							<source
								srcset={memeavif}
								type="image/avif"
							/>
							<source
								srcset={memesmallavif}
								media="(min-width: 40em)"
							/>
							<img
								className={styles.image_image}
								src={meme}
								alt="meme generator"
								loading="lazy"
							/>
						</picture>
						<div className={styles.title}>
							<a href="https://memefunv2.netlify.app">
								Meme Generator
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								A little web app where you can make and save
								custom memes. Just enter text in the 3 inputs
								and save it to desktop, mobile, or tablet.
								Created in React.
							</p>
						</div>
						<div className={styles.project_nav}>
							<p>Next Project:</p>
							<div className={styles.pagination}>
								<Link to="/amazingspace">❮</Link>
								<Link to="/weather">❯</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MemeGen;
