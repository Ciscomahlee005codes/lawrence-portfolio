import React, { useState } from "react";
import "./MyProjects.css";

const portfolioItems = [
  {
    category: "Travel Guide",
    title: "Discover Bali: A Travel Guide",
    description: "A 30-page travel guide created for a tourism campaign.",
    pdf: "/pdfs/travel-guide-bali.pdf"
  },
  {
    category: "Poems & Novels",
    title: "The Sunset Poem Collection",
    description: "A set of poems for a literary magazine.",
    pdf: "/pdfs/sunset-poems.pdf"
  },
  {
    category: "Motivational Quotes",
    title: "Daily Motivation",
    description: "50+ motivational quotes crafted for social media.",
    pdf: "/pdfs/motivational-quotes.pdf"
  },
  {
    category: "Travel Guide",
    title: "Discover Bermuda: A Travel Guide",
    description: "A 30-page travel guide created for a tourism campaign.",
    pdf: "/pdfs/travel-guide-bali.pdf"
  },
   {
    category: "Poems & Novels",
    title: "The Tempest",
    description: "A set of poems for a literary magazine.",
    pdf: "/pdfs/sunset-poems.pdf"
  },
   {
    category: "Motivational Quotes",
    title: "Morning Motivation",
    description: "50+ motivational quotes crafted for social media.",
    pdf: "/pdfs/motivational-quotes.pdf"
  },
   {
    category: "Travel Guide",
    title: "Discover Bermuda: A Travel Guide",
    description: "A 30-page travel guide created for a tourism campaign.",
    pdf: "/pdfs/travel-guide-bali.pdf"
  },
];

function MyProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];

  // Filter items based on category
  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="portfolio" id="projects">
      <h2>My Writing Portfolio</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{item.title}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p>{item.description}</p>
            <a href={item.pdf} target="_blank" rel="noreferrer" className="btn">
              View PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
