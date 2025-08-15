import { useEffect } from "react"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import MyProjects from "./Components/MyProjects/MyProjects"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import Testimonials from "./Components/Testimonials/Testimonials"
import AboutPage from "./Pages/AboutPage/AboutPage"
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // only animate once per scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <Navbar />
    <Hero data-aos="fade-down"/>
    <AboutPage data-aos="zoom-in"/>
    <Services />
    <MyProjects />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
