import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Customer1 from "../../assets/customer-1.avif";
import Customer2 from "../../assets/customer-2.jpg";
import Customer3 from "../../assets/customer-3.jpg";
import Customer4 from "../../assets/customer-4.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chinwe Okafor",
      message:
        "Working with Lawrence was a fantastic experience. His writing captured our brand voice perfectly and elevated our online presence.",
      image: Customer1,
      rating: 5
    },
    {
      name: "Tunde Adebayo",
      message:
        "Professional, creative, and always on time. His attention to detail and storytelling approach made our campaigns more impactful.",
      image: Customer2,
      rating: 4
    },
    {
      name: "Aisha Bello",
      message:
        "His research and adaptability are unmatched. Every project exceeded expectations and connected deeply with our audience.",
      image: Customer3,
      rating: 5
    },
     {
      name: "Vin Joseph",
      message:
        "Great book that was recommended to me.Was eager to know more and sat for ages as didn’t want to stop reading it. So much information that I will be taking it with me so I remember the recommendations of restaurants, activities etc.I have spent months researching for the trip and there was a lot more in this book that I couldn’t learn from the internet and the Facebook groups I have joined.So happy I purchased this book.",
      image: Customer4,
      rating: 5
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
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <p className="testimonial-message">"{testimonial.message}"</p>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`star ${i < testimonial.rating ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
