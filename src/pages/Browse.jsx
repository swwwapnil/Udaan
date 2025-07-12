import React from 'react';
import './Browse.css';

const Browse = () => {
  const skills = [
    {
      id: 1,
      name: 'Emma J.',
      avatar: 'https://i.pravatar.cc/100?img=1',
      role: 'Web Developer',
      location: 'Mumbai',
      skillsOffered: ['Photography', 'React.js'],
      skillsWanted: ['UI Design', 'Public Speaking']
    },
    {
      id: 2,
      name: 'Avery M.',
      avatar: 'https://i.pravatar.cc/100?img=2',
      role: 'Content Writer',
      location: 'Delhi',
      skillsOffered: ['Copywriting', 'Blog Writing'],
      skillsWanted: ['SEO', 'Graphic Design']
    },
    {
      id: 3,
      name: 'Hasan R.',
      avatar: 'https://i.pravatar.cc/100?img=3',
      role: 'App Developer',
      location: 'Bangalore',
      skillsOffered: ['Flutter', 'Firebase'],
      skillsWanted: ['UX Research', 'Marketing']
    },
    {
      id: 4,
      name: 'Tina L.',
      avatar: 'https://i.pravatar.cc/100?img=4',
      role: 'Life Coach',
      location: 'Hyderabad',
      skillsOffered: ['Motivation Talks', 'Goal Planning'],
      skillsWanted: ['Video Editing', 'LinkedIn Strategy']
    }
  ];

  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1>Browse Skills</h1>
        <p>Find people offering what you want to learn — and request a swap!</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="profile-top">
              <img src={skill.avatar} alt={skill.name} className="profile-avatar" />
              <div>
                <h3>{skill.name}</h3>
                <p className="meta">{skill.location} | {skill.role}</p>
              </div>
            </div>

            <div className="tag-section">
              <p className="tag-title">Skills Offered:</p>
              <div className="tag-list">
                {skill.skillsOffered.map((s, i) => (
                  <span key={i} className="tag tag-offered">{s}</span>
                ))}
              </div>

              <p className="tag-title">Skills Wanted:</p>
              <div className="tag-list">
                {skill.skillsWanted.map((s, i) => (
                  <span key={i} className="tag tag-wanted">{s}</span>
                ))}
              </div>
            </div>

            <button className="request-btn">Request Swap</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;