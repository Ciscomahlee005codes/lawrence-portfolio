import React from "react";
import "./MyProjects.css";
import Project1 from "../../assets/Project-1.jpg"
import Project2 from "../../assets/Project-2.jpg"
import Project3 from "../../assets/Project-3.jpg"
import Project4 from "../../assets/Project-4.jpg"

const projects = [
  {
    id: 1,
    title: "Client A",
    description: "Brand identity & content strategy for a lifestyle brand.",
    img: Project1,
    link: "#"
  },
  {
    id: 2,
    title: "Client B",
    description: "Website copywriting and SEO optimization.",
    img: Project2,
    link: "#"
  },
  {
    id: 3,
    title: "Client C",
    description: "Social media campaign and ad creatives.",
   img: Project3,
    link: "#"
  },
  {
    id: 4,
    title: "Client D",
    description: "Product descriptions and e-commerce strategy.",
   img: Project4,
    link: "#"
  }
];

const MyProjects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="project-img">
              <img src={proj.img} alt={proj.title} />
            </div>
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} className="project-btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
