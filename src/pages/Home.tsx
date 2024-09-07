import FeaturedRooms from "../components/Home Components/FeaturedRooms";
import Hero from "../components/Home Components/Hero";
import HowItWorks from "../components/Home Components/HowItWorks";
import Services from "../components/Home Components/Services";
import Testimonials from "../components/Home Components/Testimonials";
import WhyChooseUs from "../components/Home Components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedRooms />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
