import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImagesHome } from "../../apis/ApiSliders";
import { SwiperConfigSlider } from "../../config/swipe/swipeConfig";

export const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper {...SwiperConfigSlider}>
        {ImagesHome.map((item, index) => (
          <SwiperSlide key={index} className="slider-swiper-slide">
            <div className="image-content">
              <img src={item.img} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
