import React, { useState } from 'react';
import './CreateSkillCard.css';

const CreateSkillCard = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [privacyPublic, setPrivacyPublic] = useState(true);
  const [newOfferedSkill, setNewOfferedSkill] = useState('');
  const [newWantedSkill, setNewWantedSkill] = useState('');

  const handleAddOfferedSkill = () => {
    if (newOfferedSkill.trim()) {
      setSkillsOffered([...skillsOffered, newOfferedSkill.trim()]);
      setNewOfferedSkill('');
    }
  };

  const handleAddWantedSkill = () => {
    if (newWantedSkill.trim()) {
      setSkillsWanted([...skillsWanted, newWantedSkill.trim()]);
      setNewWantedSkill('');
    }
  };

  const handleRemoveOfferedSkill = (skill) => {
    setSkillsOffered(skillsOffered.filter(s => s !== skill));
  };

  const handleRemoveWantedSkill = (skill) => {
    setSkillsWanted(skillsWanted.filter(s => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = {
      name,
      location,
      skillsOffered,
      skillsWanted,
      isPublic: privacyPublic,
    };
    console.log('Saving skill card:', profile);
    // Save logic here (API call)
  };

  return (
    <div className="create-skill-container">
      <div className="create-skill-header">
        <h2>Let’s build your Skill Profile!</h2>
        <p>Fill in your skills and availability to start swapping.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-section">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="e.g. Mumbai, Delhi"
          />
        </div>

        <div className="form-section">
          <label>Skills Offered</label>
          <div className="skills-chips">
            {skillsOffered.map(skill => (
              <div className="skill-chip" key={skill}>
                {skill} <span onClick={() => handleRemoveOfferedSkill(skill)}>×</span>
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              className="skill-input"
              value={newOfferedSkill}
              onChange={e => setNewOfferedSkill(e.target.value)}
              placeholder="Add a skill"
            />
            <button
              type="button"
              className="add-skill-btn"
              onClick={handleAddOfferedSkill}
            >
              +
            </button>
          </div>
        </div>

        <div className="form-section">
          <label>Skills Wanted</label>
          <div className="skills-chips">
            {skillsWanted.map(skill => (
              <div className="skill-chip" key={skill}>
                {skill} <span onClick={() => handleRemoveWantedSkill(skill)}>×</span>
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              className="skill-input"
              value={newWantedSkill}
              onChange={e => setNewWantedSkill(e.target.value)}
              placeholder="Add a skill"
            />
            <button
              type="button"
              className="add-skill-btn"
              onClick={handleAddWantedSkill}
            >
              +
            </button>
          </div>
        </div>

        <div className="form-section">
          <label>Profile Privacy</label>
          <div className="privacy-toggle">
            <input
              type="checkbox"
              checked={privacyPublic}
              onChange={() => setPrivacyPublic(!privacyPublic)}
            />
            <span>{privacyPublic ? 'Public' : 'Private'}</span>
          </div>
        </div>

        <button type="submit" className="save-btn">
          Save & Preview
        </button>
      </form>
    </div>
  );
};

export default CreateSkillCard;