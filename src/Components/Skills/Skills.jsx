import React from "react";
import { FaPenNib, FaFeatherAlt, FaLightbulb, FaBookOpen, FaComments, FaGlobe } from "react-icons/fa";
import { FaHourglassStart, FaHandshake } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Content Writing", level: 90, icon: <FaPenNib /> },
    { name: "Ghost Writing", level: 85, icon: <FaFeatherAlt /> },
    { name: "Creative Ideation", level: 80, icon: <FaLightbulb /> },
    { name: "Research", level: 88, icon: <FaBookOpen /> },
    { name: "Communication Skill", level: 92, icon: <FaComments /> },
    { name: "Adaptability", level: 87, icon: <FaGlobe /> },
    { name: "Cultural Insight", level: 83, icon: <FaGlobe /> },
    { name: "Time Management", level: 89, icon: <FaHourglassStart /> },
    { name: "Attention to Details", level: 91, icon: <GiMagnifyingGlass /> },
    { name: "Collaboration", level: 90, icon: <FaHandshake /> },
    { name: "Problem Solving", level: 95, icon: <FaPuzzlePiece /> },
    { name: "Critical Thinking", level: 89, icon: <GiThink /> },
  ];

  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <div className="skills-header">
        <span className="skills-title">My Skills</span>
        <div className="underline">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}>
                <span>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
