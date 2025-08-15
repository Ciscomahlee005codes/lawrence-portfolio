import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // ✅ Add Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Navigation styles
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
  {
    name: "Chinwe Okafor",
    message:
      "Working with Amaobi was a fantastic experience. His writing captured our brand voice perfectly and elevated our online presence.",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Tunde Adebayo",
    message:
      "Professional, creative, and always on time. His attention to detail and storytelling approach made our campaigns more impactful.",
    image: "https://i.pravatar.cc/150?img=20"
  },
  {
    name: "Aisha Bello",
    message:
      "His research and adaptability are unmatched. Every project exceeded expectations and connected deeply with our audience.",
    image: "https://i.pravatar.cc/150?img=28"
  }
];


  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <span className="section-title">Testimonials</span>
        <div className="underline">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]} // ✅ Added Navigation
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // ✅ Enable navigation arrows
        autoplay={{ delay: 4000 }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <p className="testimonial-message">"{testimonial.message}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
