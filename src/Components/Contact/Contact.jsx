import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-title">Contact Me</span>
        <div className="underline">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind or just want to say hello?  
            Fill out the form and I’ll get back to you as soon as possible.
          </p>

          <div className="info-item">
            <strong>Email:</strong> <a href="mailto:mobilitylawrence@gmail.com">mobilitylawrence@gmail.com</a>
          </div>
          <div className="info-item">
            <strong>Phone:</strong> <a href="tel:+2349033031623">+234 903 3031 623</a>
          </div>
          <div className="info-item">
            <strong>Location:</strong> Lagos, Nigeria
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
