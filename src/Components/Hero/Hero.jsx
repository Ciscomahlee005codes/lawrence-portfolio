import React from "react";
import { ReactTyped } from "react-typed"; 
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home" data-aos="fade-down">
      <div className="hero-container">
        

        {/* Content */}
        <div className="hero-content">
          <h2 style={{color: "gold"}}><span style={{color: "goldenrod"}}>Hello</span>, My name is Lawrence Amaobi Ajaegbu</h2>

          {/* Typed Animation */}
          <div className="job">
            I am a
            <ReactTyped
              strings={[
                "Content Writer",
                "Creative Writer",
                "Ghost Writer",
                "Copy Writer"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
          <br />

          {/* Description */}
          <p>
            A versatile and passionate writer crafting words that inspire,
            inform, and connect — bringing ideas to life with creativity and
            precision.
          </p>

          {/* Social Icons */}
          <div className="socials">
            <a href="https://wa.link/u4uvt6" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp style={{color: "rgba(219, 216, 4, 1)"}}/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF style={{color: "rgba(219, 216, 4, 1)"}}/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{color: "rgba(219, 216, 4, 1)"}}/>
            </a>
            <a href="mailto:mobilitylawrence@gmail.com">
              <MdEmail style={{color: "rgba(219, 216, 4, 1)"}}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
