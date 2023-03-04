import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function Weather() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<div className={styles.image}>
							<img
								className={styles.image_image}
								src="https://i.ibb.co/gPTDXzs/weather.png"
								alt="weather web app"
								loading="lazy"
							/>
						</div>
						<div className={styles.title}>
							<h2>
								<a href="https://weathertest-app.vercel.app">
									Global & Local Weather App
								</a>
							</h2>
						</div>
						<div className={styles.project_info}>
							<p>
								Duel Weather App that displays local weather and the ability to find weather on any place on earth.
								Created in React.
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
