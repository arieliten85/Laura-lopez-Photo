import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperConfigSlider } from "../../config/swipe/swipeConfig";
import { HeadlineSliderProps } from "../../apis/ImagesHeadLineSlider";
import React from "react";

interface SliderProps {
  ImagesHeadLineSlider: HeadlineSliderProps[];
  filterName?: string;
}

export const Slider: React.FC<SliderProps> = ({
  ImagesHeadLineSlider,
  filterName,
}) => {
  return (
    <div className="slider-container">
      <Swiper {...SwiperConfigSlider}>
        {ImagesHeadLineSlider.filter((item) => item.section === filterName).map(
          (item, index) => (
            <SwiperSlide key={index} className="slider-swiper-slide">
              <div className="image-content">
                <img src={item.img} />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};
