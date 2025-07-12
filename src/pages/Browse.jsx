import React from 'react';
import './Browse.css';

const Browse = () => {
  // Temporary data - will be replaced with API calls later
  const skills = [
    {
      id: 1,
      name: 'Web Development',
      description: 'I can teach HTML, CSS, JavaScript and React',
      category: 'Technology',
      user: {
        name: 'John Doe',
        location: 'New York'
      }
    },
    {
      id: 2,
      name: 'Photography',
      description: 'Professional photographer willing to teach basics',
      category: 'Arts',
      user: {
        name: 'Sarah Smith',
        location: 'Los Angeles'
      }
    },
    {
      id: 3,
      name: 'Spanish Language',
      description: 'Native speaker offering Spanish lessons',
      category: 'Language',
      user: {
        name: 'Carlos Mendez',
        location: 'Miami'
      }
    }
  ];

  return (
    <div className="browse-container">
      <h1>Browse Skills</h1>
      <div className="search-filter">
        <input type="text" placeholder="Search skills..." className="search-input" />
        <select className="category-filter">
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Arts">Arts</option>
          <option value="Language">Language</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.name}</h3>
            <p className="category">{skill.category}</p>
            <p className="description">{skill.description}</p>
            <div className="user-info">
              <p><strong>Offered by:</strong> {skill.user.name}</p>
              <p><strong>Location:</strong> {skill.user.location}</p>
            </div>
            <button className="request-btn">Request Swap</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;