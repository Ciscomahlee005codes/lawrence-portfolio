import React from "react";
import { FaPenNib, FaFeatherAlt, FaCameraRetro, FaLightbulb,FaBullhorn, FaSearch, FaComments } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import "./Services.css";

const Services = () => {
  const services = [
  {
    icon: <FaPenNib />,
    title: "Creative Content Writing",
    description:
      "I produce engaging, well-researched, and audience-focused content that informs, entertains, and inspires. From in-depth articles and blog posts to newsletters and online features, I adapt my writing style to suit the tone, voice, and goals of each project, ensuring clarity and connection with readers."
  },
  {
    icon: <FaFeatherAlt />,
    title: "Ghost Writing",
    description:
      "I help individuals and businesses bring their ideas, stories, and expertise to life through discreet ghostwriting services. Whether it’s a book, speech, memoir, or long-form article, I preserve the client’s unique voice while delivering polished, professional content."
  },
  {
    icon: <FaBullhorn />, 
    title: "Copywriting for Brands & Businesses",
    description:
      "I create persuasive, conversion-driven copy that strengthens brand identity and drives results. This includes website copy, product descriptions, sales pages, email campaigns, and other marketing materials designed to engage audiences and inspire action."
  },
  {
    icon: <FaCameraRetro />,
    title: "Editing & Content Refinement",
    description:
      "I offer professional editing and content enhancement services, ensuring every piece is clear, error-free, and aligned with the intended message. From light proofreading to in-depth rewrites, I refine content for maximum impact and readability."
  },
  {
    icon: <FaSearch />,
    title: "Research",
    description:
      "I conduct thorough and reliable research to provide accurate information, unique insights, and valuable context that enriches every piece of writing. My research ensures depth, credibility, and originality in all content."
  },
  {
    icon: <FaComments />,
    title: "Communication Skills",
    description:
      "Strong communication lies at the heart of my writing process. I collaborate closely with clients to understand their vision and deliver content that aligns with their goals, ensuring transparency, clarity, and effective storytelling."
  },
  {
    icon: <GiCommercialAirplane />,
    title: "Travel & Guidebook Writing",
    description:
      "I write destination-specific travel guides that combine practical advice with engaging storytelling, providing readers with reliable information and immersive cultural insights. These guides are crafted to be trusted companions for travelers exploring new places."
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













