// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// ✅ Correct Import Paths (PascalCase & correct names)
import GetStarted from './pages/getstarted';
import SignupConsumer from './pages/signUpconsumer';
import SignupSkilled from './pages/signUpsikilled';
import Dashboard from './pages/dashboard';
import Homepage from './pages/Homepage';      // ← Added
import SignInPage from './pages/SignInPage';  // ← Added
import About from './pages/About'; // ← Add this import

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* ===== Landing Page (Public Home) ===== */}
          <Route
            path="/"
            element={
              <>
                {/* Navbar */}
                <nav className="navbar">
                  <Link to="/" className="nav-logo">
                    <i className="fas fa-handshake"></i>
                    <span>SkillLink</span>
                  </Link>
                  <ul className="nav-links">
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#features">Features</a></li>
                  </ul>
                </nav>

                {/* Hero Section */}
                <section id="home" className="hero">
                  <div className="hero-content">
                    <h1>Welcome to SkillLink 🚀</h1>
                    <p className="hero-subtext">Unlocking Human Potential</p>
                    <div className="cta-group">
                      <Link to="/get-started" className="cta-button">Get Started</Link>
                      <Link to="/signin" className="signin-button">Sign In</Link>
                    </div>
                  </div>
                  <div className="hero-image">
                    {/* Fallback: Use online image if local one doesn't exist */}
                    <img
                      src="/images/hero-illustration.png"
                      alt="Connecting skills with opportunities"
                      className="hero-illustration"
                    />
                  </div>
                </section>

               {/* Features Section */}
<section id="features" className="features">
  <h2>What can you Offer?</h2>

  {/* Desktop: Grid (3 in a row) | Mobile: Triangle */}
  <div className="features-grid">
    {/* Card 1 - Find Opportunities */}
    <div className="feature-card">
      <i className="fas fa-magnifying-glass icon"></i>
      <h3>Find Opportunities</h3>
      <p>Discover jobs, projects, and collaborations tailored to your skills and interests.</p>
    </div>

    {/* Card 2 - Showcase Skills */}
    <div className="feature-card">
      <i className="fas fa-lightbulb icon"></i>
      <h3>Showcase Your Skills</h3>
      <p>Build a professional profile that highlights your experience, portfolios, and endorsements.</p>
    </div>

    {/* Card 3 - Hire Professionals */}
    <div className="feature-card">
      <i className="fas fa-users icon"></i>
      <h3>Hire Professionals</h3>
      <p>Find skilled personnel to help with specific tasks or work in your area.</p>
    </div>
  </div>
</section>
                {/* Footer */}
                <footer className="footer">
                  <p className="footer-text">
                    © 2025 SkillLink | Designed by the Ian and Terry nnamani
                  </p>
                  <div className="social-icons">
                    <a
                      href="https://instagram.com/skilllink.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://x.com/skilllink.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on X"
                    >
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a
                      href="https://discord.gg/skilllink.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Join us on Discord"
                    >
                      <i className="fab fa-discord"></i>
                    </a>
                  </div>
                </footer>
              </>
            }
          />

          {/* ===== Other Pages ===== */}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup/consumer" element={<SignupConsumer />} />
          <Route path="/signup/skilled" element={<SignupSkilled />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;