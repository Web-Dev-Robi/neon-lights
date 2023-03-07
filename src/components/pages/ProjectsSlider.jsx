import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Inquizable from "./Inquizable";
import Green from "./Green";
import Weather from "./Weather";
import TextToImage from "./TextToImage";
import MemeGen from "./MemeGen";
import GitHub from "./GitHub";
import AmazingSpace from "./AmazingSpace";

function ProjectsSlider() {
	return (
		<Swiper
			// className={styles.swiper_container}
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			grabCursor={true}
			slidesPerView={"auto"}
			centeredSlides={true}
			navigation
			pagination={{ clickable: true, dynamicBullets: true }}
			scrollbar={{ draggable: true }}
			loop={true}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}>
			<SwiperSlide><Inquizable/></SwiperSlide>
			<SwiperSlide><Green/></SwiperSlide>
			<SwiperSlide><Weather/></SwiperSlide>
			<SwiperSlide><TextToImage/></SwiperSlide>
			<SwiperSlide><MemeGen/></SwiperSlide>
			<SwiperSlide><GitHub/></SwiperSlide>
			<SwiperSlide><AmazingSpace/></SwiperSlide>
		</Swiper>
	);
}

export default ProjectsSlider;
