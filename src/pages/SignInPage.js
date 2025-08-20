// src/pages/SignInPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Auth.css'; // Updated name
import { Link } from 'react-router-dom';


function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login success
    console.log('User signed in:', formData);
    navigate('/home'); // ✅ Redirect to homepage
  };
  

  return (
    <div className="get-started-page">
      <div className="card">
        <h2>Welcome Back</h2>
        <p>Sign in to your SkillLink account.</p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••"
            />
          </div>
          

          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
        </form>

        <p className="text-center">
          Don't have an account?{' '}
<Link to="/get-started" className="btn btn-primary btn-small">
  Sign up
</Link>
        </p>
      </div>
    </div>

    
  );

}

export default SignInPage;