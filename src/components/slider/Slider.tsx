import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImagesSliderProps } from "../../apis/ApiSliders";
import { SwiperConfigSlider } from "../../config/swipe/swipeConfig";

interface SliderProps {
  ImagesSlider: ImagesSliderProps[];
}

export const Slider = ({ ImagesSlider }: SliderProps) => {
  return (
    <div className="slider-container">
      <Swiper {...SwiperConfigSlider}>
        {ImagesSlider.map((item, index) => (
          <SwiperSlide key={index} className="slider-swiper-slide">
            <div className="image-content">
              <img src={item.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
