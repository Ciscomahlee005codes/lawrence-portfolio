import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const education = [
  {
    year: "2017 – 2021",
    title: "Bachelor’s Degree in Philosophy",
    institution: "Bigard Memorial Seminary, Enugu (Affiliated with Pontificia Universitas Urbaniana, Rome & University of Ibadan)",
    description:
      "Specialized in Logic, Ethics, Metaphysics, Epistemology, and Critical Thinking. Built a strong foundation in academic writing, analytical reasoning, and classical studies."
  },
  {
    year: "2017",
    title: "Diploma in Latin Language",
    institution: "Sacred Heart Seminary, Nsude, Enugu, Nigeria",
    description:
      "Proficient in Latin writing, translation, and grammar. Developed precision and clarity in language through structured classical language education."
  },
  {
    year: "2022",
    title: "Creative Writing Specialization",
    institution: "Wesleyan University (Coursera Online)",
    description:
      "Covered narrative craft, style, and advanced storytelling techniques, applying skills directly to professional and client projects."
  },
  {
    year: "2022",
    title: "Content Marketing Certification",
    institution: "HubSpot Academy (Online)",
    description:
      "Learned SEO-driven content creation, audience targeting, and storytelling strategies for effective brand communication."
  },
  {
    year: "2023",
    title: "Copywriting Essentials",
    institution: "American Writers & Artists Institute (AWAI Online)",
    description:
      "Mastered persuasive writing, sales copy structure, and emotional appeal techniques for web, print, and ad campaigns."
  },
  {
    year: "2023",
    title: "SEO Fundamentals",
    institution: "Google Digital Garage (Online)",
    description:
      "Gained practical skills in keyword research, content optimization, and analytics for improving online visibility."
  }
];


  const experience = [
  {
    year: "2019 – 2020",
    title: "Independent Writing & Poetry Development",
    company: "Self-Initiated Projects",
    description:
      "Explored the craft of writing through poetry, essays, and short prose, developing a strong foundation in storytelling, creativity, and emotional expression."
  },
  {
    year: "2020 – 2021",
    title: "Creative Writing Studies & Self-Training",
    company: "Independent Study",
    description:
      "Studied literary techniques, brand storytelling, and audience engagement. Experimented with multiple styles to build versatility across niches."
  },
  {
    year: "2021 – Present",
    title: "Ghostwriting, Copywriting & Travel Guide Publishing",
    company: "Freelance & Amazon Kindle Direct Publishing",
    description:
      "Partnered with individuals, businesses, and brands to produce tailored content. Authored detailed, research-driven travel guidebooks on Amazon for global audiences."
  },
  {
    year: "2022 – Present",
    title: "Freelance Creative Writer & Ghostwriter",
    company: "Independent Clients",
    description:
      "Delivered website content, brand copy, blog posts, poetry collections, and personal narratives that align with client goals and tone."
  },
  {
    year: "2022 – Present",
    title: "Copywriter – Marketing Campaigns & Branding Projects",
    company: "Freelance",
    description:
      "Created persuasive and authentic copy for marketing campaigns, focusing on engagement, clarity, and measurable results."
  },
  {
    year: "2023 – Present",
    title: "Author & Travel Guide Writer",
    company: "Amazon Kindle Direct Publishing",
    description:
      "Write and publish user-friendly travel guides for various destinations, offering accurate, actionable, and inspiring advice for travelers."
  },
  {
    year: "2023 – Present",
    title: "Private Writing Mentor & Consultant",
    company: "Freelance",
    description:
      "Coach aspiring writers in storytelling, structure, and audience engagement. Provide brand messaging strategies for entrepreneurs and small businesses."
  }
];


  return (
    <section className="edu-exp" data-aos="slide-right">
      <div className="section-header">
        <span className="section-title">Education & Experience</span>
        <div className="underline">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="edu-exp-container">
        <div className="edu-section">
          <h3><FaGraduationCap /> Education</h3>
          {education.map((item, index) => (
            <div className="edu-card" key={index}>
              <span className="year">{item.year}</span>
              <h4>{item.title}</h4>
              <h5>{item.institution}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="exp-section">
          <h3><FaBriefcase /> Experience</h3>
          {experience.map((item, index) => (
            <div className="exp-card" key={index}>
              <span className="year">{item.year}</span>
              <h4>{item.title}</h4>
              <h5>{item.company}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
