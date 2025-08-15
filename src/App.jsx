import React, { Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Loader/Loader"; 

// Lazy-load components with React.lazy
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Hero = React.lazy(() => import("./Components/Hero/Hero"));
const AboutPage = React.lazy(() => import("./Pages/AboutPage/AboutPage"));
const Services = React.lazy(() => import("./Components/Services/Services"));
const MyProjects = React.lazy(() => import("./Components/MyProjects/MyProjects"));
const Testimonials = React.lazy(() => import("./Components/Testimonials/Testimonials"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero data-aos="fade-down" />
      <AboutPage data-aos="zoom-in" />
      <Services data-aos="fade-up" />
      <MyProjects data-aos="fade-up" />
      <Testimonials data-aos="zoom-in-up" />
      <Contact data-aos="fade-up" />
      <Footer />
    </Suspense>
  );
}

export default App;
