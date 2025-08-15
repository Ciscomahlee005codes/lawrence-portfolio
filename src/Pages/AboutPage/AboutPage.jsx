import React, { useEffect } from 'react'
import AboutMe from '../../Components/AboutMe/AboutMe'
import Skills from '../../Components/Skills/Skills'
import Education from '../../Components/Education/Education'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,   
        easing: "ease-in-out",
      });
    }, []);
  return (
    <div>
      <AboutMe />
      <Skills data-aos="fade-up"/>
      <Education data-aos="slide-right"/>
    </div>
  )
}

export default AboutPage
