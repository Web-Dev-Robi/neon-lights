import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


export default function Slider({ images }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}>
			{images.map((image, id) => (
				<SwiperSlide key={id}>
					<img
						style={{
							height: "300px",
							width: "fit-content",
							margin: "0 auto",
							display: 'flex'
						}}
						src={image.image}
						alt={image.title}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
