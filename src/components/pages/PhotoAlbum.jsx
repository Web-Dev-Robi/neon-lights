import  Slider  from "../../images/Slider";
import images from "../../images/images.json";
import { Swiper } from "swiper/react";
import styles from '../styles/PhotoAlbum.module.css'

export default function PhotoAlbum() {
	return (
		<Swiper>
			<div className={styles.container}>
				<Slider images={images.images} />
			</div>
		</Swiper>
	);
}

