// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Building the Future of Work in Africa</h1>
          <p className="hero-subtext">
            SkillLink is redefining how talent connects with opportunity — starting in Nigeria, scaling across Africa.
          </p>
          <div className="cta-group">
            <Link to="/get-started" className="btn btn-primary">Join the Movement</Link>
            <Link to="/contact" className="btn btn-secondary">Investor Inquiry</Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Millions of skilled professionals in Nigeria — plumbers, electricians, tailors, hair stylists — are invisible to the digital economy.
            They rely on word-of-mouth, local networks, and chance encounters to find work.
          </p>
          <p>
            At the same time, consumers struggle to find reliable, vetted service providers in their area.
          </p>
          <p className="highlight">
            <strong>SkillLink bridges this gap.</strong> We’re creating a trusted, mobile-first platform where talent is seen, valued, and connected — instantly.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="problem-solution">
        <div className="container">
          <div className="split">
            <div className="block">
              <h3>The Problem</h3>
              <ul>
                <li>🔍 <strong>Fragmented Market:</strong> No centralized platform for skilled trades in Nigeria.</li>
                <li>📉 <strong>Underemployment:</strong> 40%+ of skilled workers underutilize their abilities (NBS 2024).</li>
                <li>📱 <strong>Digital Exclusion:</strong> Existing platforms are foreign, expensive, or not mobile-optimized.</li>
                <li>🔐 <strong>Trust Deficit:</strong> No way to verify quality or reliability.</li>
              </ul>
            </div>
            <div className="block">
              <h3>Our Solution</h3>
              <ul>
                <li>🎯 <strong>Hyperlocal Discovery:</strong> Find skilled professionals in your neighborhood.</li>
                <li>💼 <strong>Profile Building:</strong> Create a digital identity with skills, portfolios, and endorsements.</li>
                <li>📲 <strong>Mobile-First Design:</strong> Works on low-end smartphones and slow networks.</li>
                <li>⭐ <strong>Reputation System:</strong> Ratings, reviews, and skill verification build trust.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Opportunity */}
      <section className="vision">
        <div className="container">
          <h2>Why This Matters</h2>
          <p>
            Nigeria has over <strong>20 million informal sector workers</strong> — the largest in Africa.
            The African gig economy is projected to reach <strong>$150B by 2030</strong> (McKinsey).
          </p>
          <p>
            We’re not just building an app — we’re building <strong>the infrastructure for the next generation of African entrepreneurs</strong>.
          </p>
          <p className="vision-quote">
            “SkillLink isn’t just connecting talent — it’s unlocking human potential.”
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <div className="container">
          <h2>Founded by Nigerians, for Nigerians</h2>
          <p>
            SkillLink was created by <strong>ian & Terry Nnamani</strong> — brothers from Lagos who’ve seen firsthand the untapped talent in their community.
          </p>
          <p>
            We believe every skilled worker deserves a digital presence, a fair chance, and the dignity of being seen.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="investor-cta">
        <div className="container">
          <h2>Join Us in Building the Future</h2>
          <p>We're currently raising our pre-seed round to scale across Lagos, Ibadan, and Abuja.</p>
          <p>Download our pitch deck or schedule a meeting with the founders.</p>
          <div className="cta-group">
           <a 
  href="https://wa.me/2348146003773?text=Hi%20SkillLink%2C%20I%27m%20an%20investor%20interested%20in%20your%20vision%20for%20the%20future%20of%20work%20in%20Africa.%20Can%20we%20schedule%20a%20brief%20call%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  Schedule a Call on WhatsApp
</a>
            <a href="#!" className="btn btn-secondary">Download Pitch Deck</a>
          </div>
        </div>
      </section>
      <div className="about-footer">
  <Link to="/" className="btn btn-back">
    ← Back to Home
  </Link>
</div>
    </div>
  );
}

export default About;