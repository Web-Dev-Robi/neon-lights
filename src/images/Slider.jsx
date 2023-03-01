import React from "react";
import {Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import styles from "../components/styles/Slider.module.css";

export default function Slider({ images }) {
	return (
		<Swiper
			className={styles.swiper_container}
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			grabCursor={true}
			slidesPerView={"auto"}
			centeredSlides={true}
			navigation
			pagination={{ clickable: true, dynamicBullets: true }}
			scrollbar={{ draggable: true }}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}>
			{images.map((image, id) => (
				<SwiperSlide
					key={id}
					className={styles.swiper_slide}>
					<img
						className={styles.carousel}
						src={image.image}
						alt={image.title}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
