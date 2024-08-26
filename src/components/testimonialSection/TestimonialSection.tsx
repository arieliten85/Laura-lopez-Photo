import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./testimonialSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiMessageCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { testimonials } from "./apiTestimoni";
import { SwiperConfigTestimoni } from "../../config/swipe/swipeConfig";

export const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">¿Qué opinan de mí?</h2>
        <p className="testimonial-subtitle">
          Sin duda, la parte más gratificante de mi trabajo. Sentirme apreciada
          como fotógrafa y como persona es el combustible que me hace seguir
          trabajando como mi primer día.
        </p>
      </div>
      <Swiper {...SwiperConfigTestimoni}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-swiper-slide">
            <div className="testimonial-slide">
              <FiMessageCircle className="testimonial-icon" />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="testimonial-star" />
                ))}
              </div>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
