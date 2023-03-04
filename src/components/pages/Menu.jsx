import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillProfile,
  AiFillHome,
} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import styles from "../styles/Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {


  return (
		<div className={styles.sidebar_nav}>
			<div className={styles.clicked}>
				<Link to="/">
					<button>
						<AiFillHome className={styles.icon} />
					</button>
				</Link>
				<button>
					<a href="https://github.com/Web-Dev-Robi">
						<AiFillGithub className={styles.icon} />
					</a>
				</button>
				<button>
					<a href="https://twitter.com/Web_Dev_Robi">
						<AiFillTwitterCircle className={styles.icon} />
					</a>
				</button>
				<button>
					<a href="https://www.linkedin.com/in/brian-cordisco-500250205/">
						<AiFillLinkedin className={styles.icon} />
					</a>
				</button>
				<Link to="/cv">
					<button>
						<AiFillProfile className={styles.icon} />
					</button>
				</Link>
				<Link to="aboutme">
					<button>
						<SiAboutdotme className={styles.icon} />
					</button>
				</Link>
			</div>
		</div>
  );
}

export default Menu;
