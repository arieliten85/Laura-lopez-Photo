import { AboutSection } from "../components/aboutSection/AboutSection";
import { CategorySection } from "../components/categorySection/CategorySection";

import { GalerySection } from "../components/gallerySection/GallerySection";
import { PreContactSection } from "../components/preContactSection/PreContactSection";
import { Testimonials } from "../components/testimonialSection/TestimonialSection";
import { ImagesSliderHome } from "../apis/ApiSliders";
import { Slider } from "../components/slider/Slider";

export const Home = () => {
  return (
    <>
      <Slider ImagesSlider={ImagesSliderHome} />
      <AboutSection />
      <GalerySection />
      <CategorySection />
      <Testimonials />
      <PreContactSection />
    </>
  );
};
