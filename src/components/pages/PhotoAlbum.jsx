import Slider from "../../images/Slider";
import images from "../../images/images.json";
import { Swiper } from "swiper/react";
import styles from "../styles/PhotoAlbum.module.css";

export default function PhotoAlbum() {
	return (
		<Swiper>
			<div className={styles.container}>
				<h2 className={styles.heading}>Photo Album</h2>
				<Slider images={images.images} />
				<p>
					Every now and again I get a feeling to take a photo and
					these are the results
				</p>
			</div>
		</Swiper>
	);
}
