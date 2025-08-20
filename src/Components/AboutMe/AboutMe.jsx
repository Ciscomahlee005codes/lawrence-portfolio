import React from "react";
import "./AboutMe.css";
import ProfilePic from "../../assets/Amobi.jpg";
import CV from "../../assets/Lawrence-CV.pdf" 

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me" data-aos="zoom-in">
      <div className="about-header">
        <span className="about-title">About Me</span>
        <div className="underline">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="about-container">
        {/* Profile Image */}
        <div className="about-img">
          <img src={ProfilePic} alt="Amobi Lawrence" />
        </div>

        {/* Text Content */}
        <div className="about-content">
          <p> I’m Lawrence Amaobi Ajaegbu, a Creative Writer, Content Writer, Ghostwriter, and Copywriter. "The role of a writer is not to say what we can all say, but what we are unable to say." – Anaïs Nin. Those words capture the essence of why I write: to give form to the unspoken, to shape feelings and thoughts into something tangible. My background in philosophy sharpened my ability to see beneath the surface, and my passion for writing gave me the means to share those insights with the world. For me, every blank page is an invitation to uncover truth, stir emotion, and spark imagination. I am a versatile and passionate writer dedicated to crafting words that inspire, inform, and captivate. With years of experience in poetry, travel writing, creative content writing, ghostwriting, and copywriting, I bring stories and ideas to life in a way that resonates deeply with audiences. My work blends creativity with clarity, ensuring every piece delivers impact and value. Whether it is evoking emotion through verse or delivering persuasive brand copy, I approach every project with professionalism, originality, and a deep understanding of the audience. </p>

          <div className="about-buttons">
            <a href={CV}  className="btn primary">Download CV</a>
            <a href="https://wa.link/u4uvt6" className="btn secondary">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
