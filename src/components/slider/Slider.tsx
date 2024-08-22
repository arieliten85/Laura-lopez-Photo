import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImagesHome } from "../../apis/ApiSliders";
import {
  createSwiperConfig,
  useAutoplayProgress,
} from "../../config/swipe/swipeConfig";
import { AutoplayProgress } from "../../config/swipe/utils/swipeUtils";

export const Slider = () => {
  const { progressCircle, progressContent, onAutoplayTimeLeft } =
    useAutoplayProgress();

  return (
    <>
      <Swiper {...createSwiperConfig(onAutoplayTimeLeft)}>
        {ImagesHome.map((item) => (
          <SwiperSlide key="slide-1" className="swiper-slide">
            <div className="slide-content">
              <img src={item.img} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
        <AutoplayProgress
          progressCircleRef={progressCircle}
          progressContentRef={progressContent}
        />
      </Swiper>
    </>
  );
};
