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
								src="https://i.ibb.co/GVzTcbt/weather.png"
								alt="weather web app"
								loading="lazy"
							/>
						</div>
						<div className={styles.title}>
							<a href="https://weathertest-app.vercel.app">
								Global & Local Weather App
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								Duel Weather App that displays local weather and
								the ability to find weather conditions anywhere on
								earth. Created in React.
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
