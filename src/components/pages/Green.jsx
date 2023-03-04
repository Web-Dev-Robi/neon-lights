import green from "../assets/greenparty.png";
import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";

function Green() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<div className={styles.image}>
							<img
								className={styles.image_image}
								src={green}
								alt="Gülşah Bayar Bio"
								loading=" lazy"
							/>
						</div>
						<div className={styles.title}>
							<h2>
								<a href="https://gulsah-bayar.vercel.app">
									Gülşah Bayar
								</a>
							</h2>
						</div>
						<div className={styles.project_info}>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, optio ab pariatur illo eius quidem quae earum velit? Architecto iste, non repellendus reprehenderit illo quia enim officia numquam deleniti dolor vero odit quis beatae officiis eum ipsa praesentium cum corrupti ex doloremque! Cum esse minus praesentium distinctio tempore adipisci omnis alias, architecto harum culpa consequatur soluta dolore quaerat iusto exercitationem labore modi? Ipsum nobis dolore pariatur repellendus suscipit odit architecto!
							</p>
						</div>
						<div className={styles.project_nav}>
							<p>Next Project:</p>
							<div className={styles.pagination}>
								<Link to="/github">❮</Link>
								<Link to="/projects">❯</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Green;
