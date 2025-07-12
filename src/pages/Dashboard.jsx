import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name}</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Your Skills</h3>
          <p>View and manage skills you're offering</p>
        </div>
        <div className="dashboard-card">
          <h3>Requested Skills</h3>
          <p>Skills you want to learn</p>
        </div>
        <div className="dashboard-card">
          <h3>Swap Requests</h3>
          <p>Manage your pending swaps</p>
        </div>
        <div className="dashboard-card">
          <h3>Swap History</h3>
          <p>View your completed swaps</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;