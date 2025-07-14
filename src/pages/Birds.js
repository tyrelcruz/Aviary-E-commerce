import React from "react";
import "./Page.css";

const Birds = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Birds</h1>
          <p className="page-subtitle">
            Meet the incredible bird species that call Mysher Aviary home
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h2>Bird Species</h2>
              <div className="birds-grid">
                <div className="bird-card">
                  <div className="bird-image eagles"></div>
                  <h3>Bald Eagles</h3>
                  <p>
                    Majestic symbols of freedom with impressive 8-foot wingspans
                  </p>
                  <span className="habitat">Habitat: Mountains & Lakes</span>
                </div>
                <div className="bird-card">
                  <div className="bird-image parrots"></div>
                  <h3>Tropical Parrots</h3>
                  <p>
                    Colorful and intelligent birds known for their vocal
                    abilities
                  </p>
                  <span className="habitat">Habitat: Rainforest</span>
                </div>
                <div className="bird-card">
                  <div className="bird-image owls"></div>
                  <h3>Great Horned Owls</h3>
                  <p>Silent nighttime hunters with exceptional hearing</p>
                  <span className="habitat">Habitat: Forests</span>
                </div>
                <div className="bird-card">
                  <div className="bird-image penguins"></div>
                  <h3>African Penguins</h3>
                  <p>
                    Playful aquatic birds with distinctive black and white
                    markings
                  </p>
                  <span className="habitat">Habitat: Coastal Waters</span>
                </div>
                <div className="bird-card">
                  <div className="bird-image flamingos"></div>
                  <h3>Chilean Flamingos</h3>
                  <p>Elegant wading birds famous for their pink coloration</p>
                  <span className="habitat">Habitat: Wetlands</span>
                </div>
                <div className="bird-card">
                  <div className="bird-image hawks"></div>
                  <h3>Red-tailed Hawks</h3>
                  <p>Skilled hunters with exceptional eyesight and agility</p>
                  <span className="habitat">Habitat: Open Fields</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Conservation Efforts</h2>
              <p>
                At Mysher Aviary, we're dedicated to the conservation and
                protection of bird species through education, research, and
                rehabilitation programs.
              </p>

              <div className="features-list">
                <div className="feature">
                  <h3>Breeding Programs</h3>
                  <p>
                    Supporting endangered species through carefully managed
                    breeding initiatives.
                  </p>
                </div>
                <div className="feature">
                  <h3>Rehabilitation</h3>
                  <p>
                    Caring for injured birds and preparing them for release back
                    into the wild.
                  </p>
                </div>
                <div className="feature">
                  <h3>Education</h3>
                  <p>
                    Teaching visitors about bird behavior, conservation, and
                    environmental protection.
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

export default Birds;
