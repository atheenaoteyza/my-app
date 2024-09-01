import { FeaturedProduct } from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  return (
    <main>
      <Hero></Hero>
      <FeaturedProduct></FeaturedProduct>
      <Testimonials></Testimonials>
      <Faq></Faq>
    </main>
  );
};
