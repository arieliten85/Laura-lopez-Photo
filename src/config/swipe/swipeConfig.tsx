import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export const SwiperConfigSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 8000, disableOnInteraction: false },
  pagination: { clickable: true },
  effect: "fade",
  modules: [Autoplay, Pagination, Navigation, EffectFade],
};

export const SwiperConfigTestimoni = {
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { clickable: true },
  modules: [Autoplay, Pagination],
};
