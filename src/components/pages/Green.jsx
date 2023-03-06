import styles from "../styles/Projects.module.css";
import { Link } from "react-router-dom";
import greenparty from "../assets/webp/greenparty.webp";
import greenpartyavif from "../assets/avif/greenparty.avif";

function Green() {
	return (
		<div>
			<div>
				<div className={styles.container}>
					<div className={styles.flex_container}>
						<picture className={styles.image}>
							<source
								srcset={greenpartyavif}
								type="image/avif"
							/>
							<img
								className={styles.image_image}
								src={greenparty}
								alt="GUlsah Green Party Member"
								loading="lazy"
							/>
						</picture>
						<div className={styles.title}>
							<a href="https://gulsah-bayar.vercel.app">
								Gülşah Bayar
							</a>
						</div>
						<div className={styles.project_info}>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Eaque, optio ab pariatur illo
								eius quidem quae earum velit? Architecto iste,
								non repellendus reprehenderit illo quia enim
								officia numquam deleniti dolor vero odit quis
								beatae officiis eum ipsa praesentium cum
								corrupti ex doloremque! Cum esse minus
								praesentium distinctio tempore adipisci omnis
								alias, architecto harum culpa consequatur soluta
								dolore quaerat iusto exercitationem labore modi?
								Ipsum nobis dolore pariatur repellendus suscipit
								odit architecto!
							</p>
						</div>
						<div className={styles.project_nav}>
							<p>Next Project:</p>
							<div className={styles.pagination}>
								<Link to="/github">❮</Link>
								<Link to="/amazingspace">❯</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Green;
