import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImgCarousel.scss";

function ImgCarousel({ images }) {
  return (
    <Swiper navigation modules={[Navigation]} className="carousel">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="carousel__img"
            src={image.src}
            alt={`screenshot ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImgCarousel;
