// src/pages/SignupSkilled.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationSelector from '../components/locationselector';
import SkillsSelector from '../components/skillselector';

function SignupSkilled() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    location: '',
    skills: [],
    qualifications: '',
    profileImage: null,
    portfolioImages: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData((prev) => ({ ...prev, skills: selectedSkills }));
    if (errors.skills) setErrors((prev) => ({ ...prev, skills: null }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (name === 'profileImage') {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else if (name === 'portfolioImages') {
      setFormData((prev) => ({ ...prev, portfolioImages: Array.from(files) }));
    }
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
    if (formData.skills.length === 0) newErrors.skills = 'Please select at least one skill';
    if (!formData.qualifications.trim()) newErrors.qualifications = 'Qualifications are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate success
    console.log('Skilled user signed up:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      <div className="card">
        <h2>Create Your Skilled Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Smith"
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

          <div className="form-group">
            <label>Skills</label>
            <SkillsSelector
              selected={formData.skills}
              onChange={handleSkillsChange}
            />
            {errors.skills && <span className="error">{errors.skills}</span>}
          </div>

          <div className="form-group">
            <label>Qualifications</label>
            <textarea
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              placeholder="Certifications, experience, training..."
              rows="3"
            />
            {errors.qualifications && <span className="error">{errors.qualifications}</span>}
          </div>

          <div className="form-group">
            <label>Profile Image</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="form-group">
            <label>Portfolio Images (Optional)</label>
            <input
              type="file"
              name="portfolioImages"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupSkilled;