import styles from "../styles/Projects.module.css";
import amazingwebp from '../assets/webp/amazingspace.webp'
import amazingsmall from '../assets/webp/amazingspacesmall.webp'
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
								srcset={amazingwebp}
								type="image/webp"
							/>
							<source
								srcset={amazingsmall}
								media="(min-width: 25em)"
								type="image/webp"
							/>
							<source
								srcset={amazingsmallavif}
								media="(min-width: 25em)"
								type="image/avif"
							/>
							<img
								className={styles.image_image}
								src={amazingavif}
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default AmazingSpace;
