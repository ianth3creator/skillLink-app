// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Welcome! 🎉</h2>
        <p>Your account has been created successfully.</p>
        <p>You can now start exploring opportunities or managing your services.</p>
       <Link to="/home" className="btn btn-secondary">
          explore homepage
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;