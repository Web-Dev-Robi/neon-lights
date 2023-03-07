import styles from "../styles/Projects.module.css";
import inquizable from "../assets/webp/inquizable.webp";
import inquizableavif from "../assets/avif/inquizable.avif";
import inquizablesmallavif from "../assets/avif/inquizablesmall.avif";

function Inquizable() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.flex_container}>
					<picture className={styles.image}>
						<source
							srcset={inquizableavif}
							type="image/avif"
						/>
						<source
							srcset={inquizablesmallavif}
							media="(min-width: 25em)"
						/>
						<img
							className={styles.image_image}
							src={inquizable}
							alt="inquizable.com"
							loading="lazy"
						/>
					</picture>
					<div className={styles.title}>
						<a href="https://www.inquizable.com/">Inquizable</a>
					</div>
					<div className={styles.project_info}>
						<p>
							Inquizable is a website that offers a variety of
							trivia and quiz games for users to play and compete
							with others from around the world. The site covers a
							broad range of topics, including sports, science,
							history, geography, pop culture, and more.
						</p>
						<p>
							The site's interface is clean and user-friendly, and
							the quizzes are engaging and challenging. Users can
							play on any device, including desktop, tablet, and
							mobile devices.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Inquizable;
