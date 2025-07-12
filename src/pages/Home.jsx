import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section gradient-bg">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Swap Skills. Grow Together.</h1>
            <p>Discover people who can teach you something new — and share your own talents.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary">Get Started</Link>
              <Link to="/browse" className="btn btn-secondary">Browse skills</Link>
            </div>
          </div>
          <div className="hero-graphic">
            <img src="/Homeeepage.png" alt="Skill exchange illustration" />
          </div>
        </div>
      </header>

      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Create your Skill Profile</h3>
            <p>Showcase your skills and expertise to attract swaps.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Search and Request Swaps</h3>
            <p>Explore and connect with skill partners in your community.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Meet, Swap & Review</h3>
            <p>Collaborate, learn, and leave feedback after each swap.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
