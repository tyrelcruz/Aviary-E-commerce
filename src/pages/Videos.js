import React from "react";
import "./Page.css";

const Videos = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Videos</h1>
          <p className="page-subtitle">
            Watch our collection of bird documentaries and educational content
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Featured Videos</h2>
              <div className="video-grid">
                <div className="video-card">
                  <div className="video-thumbnail"></div>
                  <h3>Life of Eagles</h3>
                  <p>Documentary about the majestic eagles and their habitat</p>
                  <span className="duration">15:30</span>
                </div>
                <div className="video-card">
                  <div className="video-thumbnail"></div>
                  <h3>Tropical Parrots</h3>
                  <p>Colorful world of tropical parrots and their behaviors</p>
                  <span className="duration">22:45</span>
                </div>
                <div className="video-card">
                  <div className="video-thumbnail"></div>
                  <h3>Migration Patterns</h3>
                  <p>Understanding bird migration across continents</p>
                  <span className="duration">18:20</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Educational Series</h2>
              <p>
                Explore our comprehensive video library featuring documentaries,
                educational content, and behind-the-scenes footage from Mysher
                Aviary.
              </p>

              <div className="features-list">
                <div className="feature">
                  <h3>Nature Documentaries</h3>
                  <p>
                    Professional documentaries showcasing bird behavior and
                    habitats.
                  </p>
                </div>
                <div className="feature">
                  <h3>Educational Content</h3>
                  <p>
                    Learning videos perfect for students and bird enthusiasts.
                  </p>
                </div>
                <div className="feature">
                  <h3>Behind the Scenes</h3>
                  <p>Exclusive footage showing daily life at Mysher Aviary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
