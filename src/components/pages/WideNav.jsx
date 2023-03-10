import React from "react";
import { Link } from "react-router-dom";
import { SiCircle } from "react-icons/si";
import styles from "../styles/WideNav.module.css";

function WideNav() {
	return (
		<div className={styles.wide_nav}>
			<div className={styles.container}>
				<div className={styles.nav_container}>
					<div className={styles.nav_left}>
						<div className={styles.circle}>
							<SiCircle />
						</div>
						<Link to="/">Brian Cordisco</Link>
					</div>
					<div className={styles.nav_right}>
						<a
							href="https://github.com/Web-Dev-Robi"
							className={styles.git}>
							GitHub
						</a>
						<a
							href="https://twitter.com/Web_Dev_Robi"
							className={styles.twitter}>
							Twitter
						</a>
						<a
							href="https://www.linkedin.com/in/brian-cordisco-500250205/"
							className={styles.linkedin}>
							Linkedin
						</a>
						<Link
							to="/cv"
							className={styles.cv}>
							CV
						</Link>
						<div className={styles.nav_buttons}>
							<div className={styles.circle}>
								<SiCircle />
							</div>
							<Link
								to="/"
								className={styles.home_button}>
								Home
							</Link>
							<Link
								to="/aboutme"
								className={styles.about_button}>
								About
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WideNav;
