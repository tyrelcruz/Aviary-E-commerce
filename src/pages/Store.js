import React from "react";
import "./Page.css";

const Store = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Store</h1>
          <p className="page-subtitle">
            Shop our collection of bird-themed merchandise and gifts
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Featured Products</h2>
              <div className="product-grid">
                <div className="product-card">
                  <div className="product-image"></div>
                  <h3>Bird Watching Guide</h3>
                  <p>Complete guide to local bird species</p>
                  <span className="price">$24.99</span>
                </div>
                <div className="product-card">
                  <div className="product-image"></div>
                  <h3>Mysher Aviary T-Shirt</h3>
                  <p>Premium cotton with logo design</p>
                  <span className="price">$19.99</span>
                </div>
                <div className="product-card">
                  <div className="product-image"></div>
                  <h3>Bird Feeder Set</h3>
                  <p>Professional grade bird feeding kit</p>
                  <span className="price">$39.99</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Gift Shop</h2>
              <p>
                Take home a piece of your Mysher Aviary experience with our
                curated collection of bird-themed gifts, educational materials,
                and exclusive merchandise.
              </p>

              <div className="features-list">
                <div className="feature">
                  <h3>Educational Materials</h3>
                  <p>
                    Books, guides, and learning resources for bird enthusiasts
                    of all ages.
                  </p>
                </div>
                <div className="feature">
                  <h3>Unique Gifts</h3>
                  <p>
                    Handcrafted items and exclusive Mysher Aviary branded
                    merchandise.
                  </p>
                </div>
                <div className="feature">
                  <h3>Support Conservation</h3>
                  <p>
                    Your purchases help support our bird conservation efforts.
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

export default Store;
