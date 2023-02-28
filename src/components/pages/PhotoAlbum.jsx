// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { imagesLoad } from "../../images/images";
// import bridge from "../../images/bridge.jpg";

function PhotoAlbum() {
	return (
		<Swiper
			modules={[Pagination, Mousewheel, Navigation, Scrollbar, A11y]}
			onSwiper={(swiper) => (window.swiper = swiper)}
			slidesPerView={3.5}
			threshold={2}
			spaceBetween={10}
			navigation
			scrollbar
			mousewheel={{
				forceToAxis: true,
				sensitivity: 0.1,
				releaseOnEdges: true,
			}}
			pagination={{ clickable: true }}>
			<SwiperSlide>
				<img
					src={imagesLoad.sky}
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src={imagesLoad.sun}
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src={imagesLoad.clouds}
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src={imagesLoad.one}
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src={imagesLoad.nightbridge}
					alt=""
				/>
			</SwiperSlide>
		</Swiper>
	);
}

export default PhotoAlbum;
