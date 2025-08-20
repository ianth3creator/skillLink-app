// src/pages/GetStarted.js
import React from 'react';
import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div className="get-started-page">
      <div className="logo-placeholder">
        <h1>SkillLink</h1>
      </div>
      <div className="card">
        <h2>Join Our Skilled Network</h2>
        <p>Create your profile to connect, collaborate, and grow.</p>
        <div className="button-group">
          <Link to="/signup/consumer" className="btn btn-secondary">
          
            Sign up as Consumer
          </Link>
          <Link to="/signup/skilled" className="btn btn-primary">
            Sign up as Skilled Personnel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;