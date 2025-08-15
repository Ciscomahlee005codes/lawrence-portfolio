import React from "react";
import { FaPenNib, FaFeatherAlt, FaCameraRetro, FaLightbulb, FaSearch, FaComments } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaPenNib />,
      title: "Creative Content Writing",
      description: "Crafting compelling blog posts, articles, and web content tailored to your audience."
    },
    {
      icon: <FaFeatherAlt />,
      title: "Ghost Writing",
      description: "Helping clients tell their stories while maintaining their unique voice."
    },
    {
      icon: <FaCameraRetro />,
      title: "Content Creation",
      description: "Producing engaging visual and written content for all platforms."
    },
    {
      icon: <FaSearch />,
      title: "Research",
      description: "Detailed, accurate research for articles, books, or reports."
    },
    {
      icon: <FaComments />,
      title: "Communication Skills",
      description: "Delivering clear, persuasive, and audience-focused communication."
    },
    {
      icon: <FaLightbulb />,
      title: "Idea Generation",
      description: "Generating creative ideas and strategies for impactful storytelling."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <span className="section-title">My Services</span>
        <div className="underline">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
