import { Slider } from "../../images/slider.js";
import images from "../../images/images.json";

function PhotoAlbum() {
	return (
		<Slider images={images.images} />
	);
}

export default PhotoAlbum;
