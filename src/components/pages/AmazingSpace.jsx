import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import amazing from '../assets/webp/amazingspace.webp'
import amazingavif from "../assets/avif/amazingspace.avif";
import amazingsmallavif from "../assets/avif/amazingspacesmall.avif";

function AmazingSpace() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<picture className={styles.image}>
							<source
								srcset={amazingavif}
								type="image/avif"
							/>
							<source
								srcset={amazingsmallavif}
								media="(min-width: 40em)"
							/>
							<img
								className={styles.image_image}
								src={amazing}
								alt="amazing space travel"
								loading="lazy"
							/>
						</picture>
						<div className={styles.title}>
							<a href="https://amazing-spacetime.netlify.app">
								Amazing Space
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								Otherworldly views, uncompromising service,
								unparallelled luxury. This is Amazing Space, the
								world's first, and finest, space adventure
								company. With private and group voyages
								embarking weekly, you can book your tickets in
								advance or on the fly.
							</p>
						</div>
						<div className={styles.project_nav}>
							<p>Next Project:</p>
							<div className={styles.pagination}>
								<Link to="/green">❮</Link>
								<Link to="/memegen">❯</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AmazingSpace;
