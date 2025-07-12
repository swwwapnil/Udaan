import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Skill Swap Platform</h1>
        <p>Exchange your skills with others in your community</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn btn-primary">Get Started</Link>
          <Link to="/browse" className="btn btn-secondary">Browse Skills</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">1</div>
            <h3>List Your Skills</h3>
            <p>Add the skills you're willing to teach or share with others.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">2</div>
            <h3>Find Skills You Need</h3>
            <p>Browse through skills offered by other community members.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">3</div>
            <h3>Swap & Learn</h3>
            <p>Connect and exchange skills with others in your area.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"I learned photography in exchange for teaching web development. Amazing platform!"</p>
            <p className="author">- Sarah, Designer</p>
          </div>
          <div className="testimonial-card">
            <p>"Found someone to help me with Spanish while I taught them guitar. Perfect trade!"</p>
            <p className="author">- Mike, Musician</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;