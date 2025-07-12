import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
      } else {
        alert('Registered successfully! You can now login.');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src="/loginpage.jpg" alt="Register" className="register-illustration" />
        <h1 className="register-logo">🔷 SkillSwap</h1>
        <p className="register-subtext">Create your skill profile. Start swapping today.</p>
      </div>

      <div className="register-right">
        <div className="register-form-card">
          <h2>Register</h2>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" onChange={handleChange} required />

            <label>Email address</label>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />

            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange} required />

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="register-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
