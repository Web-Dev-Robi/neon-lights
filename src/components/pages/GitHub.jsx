import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import gittwo from "../assets/webp/gittwo.webp";
import gittwoavif from "../assets/avif/gittwo.avif";
import gittwosmallavif from "../assets/avif/gittwosmall.avif";

function GitHub() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<picture className={styles.image}>
							<source
								srcset={gittwoavif}
								type="image/avif"
							/>
							<source
								srcset={gittwosmallavif}
								media="(min-width: 40em)"
							/>
							<img
								className={styles.image_image}
								src={gittwo}
								alt="GitHub Finder"
								loading="lazy"
							/>
						</picture>
						<div className={styles.title}>
							<a href="https://git-hub-finder-vite.vercel.app/">
								GitHub Finder
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								This website allows you to search for GitHub
								users by entering their username into a search
								bar. Upon submitting the username, the website
								displays the user's profile picture, bio,
								location, and number of followers and following.
								Additionally, the website displays a list of the
								user's public repositories with details like the
								repository name, description, and the number of
								stars and forks.
							</p>
							<p>
								The website provides a simple and convenient way
								to quickly search for GitHub users and view
								their public repositories. Built in Vite.
							</p>
						</div>
						<div className={styles.project_nav}>
							<p>Next Project:</p>
							<div className={styles.pagination}>
								<Link to="/texttoimage">❮</Link>
								<Link to="/green">❯</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GitHub;
