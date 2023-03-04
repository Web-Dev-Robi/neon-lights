import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function AmazingSpace() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<div className={styles.image}>
							<img
								className={styles.image_image}
								src="https://i.ibb.co/dgqnjxn/amazing.png"
								alt="text to jpg website"
								loading="lazy"
							/>
						</div>
						<div className={styles.title}>
							<h2>
								<a href="https://amazing-spacetime.netlify.app">
									Amazing Space
								</a>
							</h2>
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
