import  Slider  from "../../images/Slider";
import images from "../../images/images.json";

function PhotoAlbum() {
	return (
		<Slider images={images.images} />
	);
}

export default PhotoAlbum;
