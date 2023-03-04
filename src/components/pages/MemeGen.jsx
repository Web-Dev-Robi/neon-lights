import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function MemeGen() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<div className={styles.image}>
							<img
								className={styles.image_image}
								src="https://i.ibb.co/TcFcPrb/meme.png"
								alt="meme generator"
								loading="lazy"
							/>
						</div>
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
