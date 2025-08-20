// src/pages/Homepage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  // ✅ Add state to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  // Mock data (this will come from backend later)
  const profiles = [
    {
      id: 1,
      name: "james nwosu",
      title: "Senior Plumber",
      location: "Lekki, Lagos",
      skills: ["Plumbing", "Pipe Repair", "Water Heater"],
      image: "https://images.unsplash.com/photo-1633108885195-2f5309dc864e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5pZ2VyaWFuJTIwcGx1bWJlcnxlbnwwfHwwfHx8MA%3D%3D",
      endorsements: 12,
    },
    {
      id: 2,
      name: "Chinedu Okafor",
      title: "Expert Electrician",
      location: "Ikeja, Lagos",
      skills: ["Wiring", "Lighting", "Solar Installation"],
      image: "https://plus.unsplash.com/premium_photo-1678766821881-9d6899c22e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnZXJpYW4lMjBlbGVjdHJpY2lhbnxlbnwwfHwwfHx8MA%3D%3D",
      endorsements: 8,
    },
    {
      id: 3,
      name: "Amina Yusuf",
      title: "Professional Hair Stylist",
      location: "Yaba, Lagos",
      skills: ["Braiding", "Hair Coloring", "Extensions"],
      image: "https://plus.unsplash.com/premium_photo-1664972618137-fd84373e336c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwaGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D",
      endorsements: 15,
    },
  ];

  const posts = [
    {
      id: 1,
      author: "Tunde Adebayo",
      role: "Carpenter",
      content: "Just completed a custom wardrobe for a client in Ajah! Love seeing my work come to life 🛠️",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D",
      likes: 20,
      comments: 5,
    },
    {
      id: 2,
      author: "Grace Eze",
      role: "Painter",
      content: "New mural at a café in Victoria Island! What do you think?",
      image: "https://images.unsplash.com/photo-1587105309274-dcb6aac960c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlJTIwc2hvcCUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      likes: 31,
      comments: 8,
    },
  ];

  return (
    <div className="homepage">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">SkillLink</div>
          <button onClick={toggleSidebar} className="close-btn">
            ✕
          </button>
        </div>
        <nav>
          <Link to="/home" className="active">Home</Link>
          <Link to="/network">My Network</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Feed */}
      <main className={`feed ${!isSidebarOpen ? 'full-width' : ''}`}>
        {/* Hamburger Button to Open Sidebar */}
{!isSidebarOpen && (
  <button onClick={toggleSidebar} className="hamburger-btn">
    <i className="fas fa-bars"></i>
  </button>
)}
        <div className="create-post">
          <input type="text" placeholder="what work do you need done?..." />
          <button>Post</button>
        </div>

        {/* Profiles Section */}
        <section className="profiles-section">
          <h3>Skilled Professionals Near You</h3>
          <div className="profiles-grid">
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <img src={profile.image} alt={profile.name} className="profile-img" />
                <h4>{profile.name}</h4>
                <p className="title">{profile.title}</p>
                <p className="location">{profile.location}</p>
                <div className="skills">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <button className="endorse-btn">+ Endorse ({profile.endorsements})</button>
              </div>
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section className="posts-section">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={post.image} alt="" className="post-author-img" />
                <div>
                  <h4>{post.author}</h4>
                  <p className="post-role">{post.role}</p>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              {post.image && <img src={post.image} alt="" className="post-image" />}
              <div className="post-actions">
                <button>👍 Like ({post.likes})</button>
                <button>💬 Comment ({post.comments})</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Homepage;