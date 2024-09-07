import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, Company XYZ",
    image: "https://via.placeholder.com/100",
    feedback:
      "The booking process was incredibly smooth and the room was perfect for our needs.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Manager, ABC Inc.",
    image: "https://via.placeholder.com/100",
    feedback:
      "Great experience! Easy to book, and the customer support was outstanding.",
  },
  {
    id: 3,
    name: "Emily Clark",
    role: "Founder, StartUp Hub",
    image: "https://via.placeholder.com/100",
    feedback:
      "Loved the seamless process and the options available. Will definitely use it again!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          What Our Customers Say
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center mt-12">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-gray-600 max-w-md">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
