import React from "react";
import "./Page.css";

const Blog = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">
            Latest news, stories, and insights from the bird world
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Recent Articles</h2>
              <div className="blog-grid">
                <article className="blog-card">
                  <div className="blog-image"></div>
                  <div className="blog-content">
                    <span className="blog-date">March 15, 2024</span>
                    <h3>The Secret Life of Owls</h3>
                    <p>
                      Discover the fascinating nocturnal behaviors and hunting
                      techniques of these magnificent predators...
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </article>
                <article className="blog-card">
                  <div className="blog-image"></div>
                  <div className="blog-content">
                    <span className="blog-date">March 10, 2024</span>
                    <h3>Spring Migration Season</h3>
                    <p>
                      Everything you need to know about the incredible journey
                      birds take during spring migration...
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </article>
                <article className="blog-card">
                  <div className="blog-image"></div>
                  <div className="blog-content">
                    <span className="blog-date">March 5, 2024</span>
                    <h3>Conservation Success Stories</h3>
                    <p>
                      How our conservation efforts have helped protect
                      endangered bird species in the region...
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="content-section">
              <h2>Categories</h2>
              <p>
                Explore our blog categories covering various aspects of bird
                life, conservation, and aviary management.
              </p>

              <div className="features-list">
                <div className="feature">
                  <h3>Bird Behavior</h3>
                  <p>
                    Insights into the fascinating behaviors and social
                    structures of different bird species.
                  </p>
                </div>
                <div className="feature">
                  <h3>Conservation</h3>
                  <p>
                    Updates on conservation efforts and success stories from
                    around the world.
                  </p>
                </div>
                <div className="feature">
                  <h3>Aviary Life</h3>
                  <p>
                    Behind-the-scenes stories and updates from our daily
                    operations at Mysher Aviary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
