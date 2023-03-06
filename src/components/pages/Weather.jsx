import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import weather from "../assets/webp/weather.webp";
import weatheravif from "../assets/avif/weather.avif";
import weathersmallavif from "../assets/avif/weathersmall.avif";

function Weather() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<picture className={styles.image}>
							<source
								srcset={weatheravif}
								type="image/avif"
							/>
							<source
								srcset={weathersmallavif}
								media="(min-width: 40em)"
							/>
							<img
								className={styles.image_image}
								src={weather}
								alt="global and local weather"
								loading="lazy"
							/>
						</picture>
						<div className={styles.title}>
							<a href="https://weathertest-app.vercel.app">
								Global & Local Weather App
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								Duel Weather App that displays local weather and
								the ability to find weather conditions anywhere
								on earth. Created in React.
							</p>
						</div>
						<div className={styles.project_nav}>
							<p>Next Project:</p>
							<div className={styles.pagination}>
								<Link to="/memegen">❮</Link>
								<Link to="/projects">❯</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;
