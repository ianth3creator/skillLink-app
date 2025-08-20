// src/pages/SignupConsumer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationSelector from '../components/locationselector';

function SignupConsumer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    location: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.location) newErrors.location = 'Please select a location';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate success
    console.log('Consumer signed up:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      <div className="card">
        <h2>Create Consumer Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
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
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label>Location</label>
            <LocationSelector
              value={formData.location}
              onChange={(value) => {
                setFormData((prev) => ({ ...prev, location: value }));
                if (errors.location) setErrors((prev) => ({ ...prev, location: null }));
              }}
            />
            {errors.location && <span className="error">{errors.location}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupConsumer;