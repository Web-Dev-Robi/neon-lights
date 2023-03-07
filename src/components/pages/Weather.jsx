import styles from "../styles/Projects.module.css";
import weatherwebp from "../assets/webp/weather.webp";
import weathersmall from "../assets/webp/weathersmall.webp";
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
								srcset={weathersmall}
								media="(min-width: 25em)"
								type="image/webp"
							/>
							<source
								srcset={weatherwebp}
								type="image/webp"
							/>
							<source
								srcset={weathersmallavif}
								media="(min-width: 25em)"
							/>
							<img
								className={styles.image_image}
								src={weatheravif}
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;
