import React from "react";
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillProfile,
	AiFillHome,
} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<div className={styles.nav_container}></div>
			<div className={styles.icon_bar}>
				<Link
					to="/"
					className={styles.active}
					href="#">
					<AiFillHome className={styles.icon} />
				</Link>
				<a href="https://github.com/Web-Dev-Robi">
					<AiFillGithub className={styles.icon} />
				</a>
				<a href="https://twitter.com/Web_Dev_Robi">
					<AiFillTwitterCircle className={styles.icon} />
				</a>
				<a href="https://www.linkedin.com/in/brian-cordisco-500250205/">
					<AiFillLinkedin className={styles.icon} />
				</a>
				<Link to="/cv">
					<AiFillProfile className={styles.icon} />
				</Link>
				<Link to="aboutme">
					<SiAboutdotme className={styles.icon} />
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
