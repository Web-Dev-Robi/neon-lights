import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slider = ({ images }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar]}
			spaceBetween={50}
			slidesPerView="auto"
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}>
			{images.map((image, i) => (
				<SwiperSlide key={i}>
					<img
						src={image.image}
						alt={image.title}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
