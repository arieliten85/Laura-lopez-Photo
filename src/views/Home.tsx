import { AboutSection } from "../components/aboutSection/AboutSection";
import { CategorySection } from "../components/categorySection/CategorySection";
import { FooterSection } from "../components/footerSection/FooterSection";
import { GalerySection } from "../components/gallerySection/GallerySection";
import { PreContactSection } from "../components/preContactSection/PreContactSection";
import { Testimonials } from "../components/testimonialSection/TestimonialSection";

export const Home = () => {
  return (
    <>
      <AboutSection />
      <GalerySection />
      <CategorySection />
      <Testimonials />
      <PreContactSection />
      <FooterSection />
    </>
  );
};
