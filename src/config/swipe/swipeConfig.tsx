import { useRef } from "react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

export const useAutoplayProgress = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    _swiper: SwiperType,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return { progressCircle, progressContent, onAutoplayTimeLeft };
};

export const createSwiperConfig = (
  onAutoplayTimeLeft: (
    swiper: SwiperType,
    time: number,
    progress: number
  ) => void
) => ({
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  effect: "fade",
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  onAutoplayTimeLeft: onAutoplayTimeLeft,
  className: "mySwiper",
});
