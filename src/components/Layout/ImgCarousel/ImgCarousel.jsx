import Carousel from "react-bootstrap/Carousel";
import "./ImgCarousel.scss";

function ImgCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={1000}>
          <img
            className="carousel__img"
            src={image.src}
            alt={`screenshot ${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImgCarousel;
