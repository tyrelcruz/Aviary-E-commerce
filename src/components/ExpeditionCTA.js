import React from "react";
import { Link } from "react-router-dom";
import "./ExpeditionCTA.css";

const ExpeditionCTA = () => {
  return (
    <section className="expedition-cta">
      <div className="expedition-background">
        <div className="container">
          <div className="expedition-content">
            <div className="expedition-text">
              <h1 className="expedition-title">
                Everything You Need for Your Feathered Friends
              </h1>

              <div className="expedition-description">
                <p>
                  From <em>premium bird food and treats</em> to expert
                  veterinary care and training services, Mysher Aviary is your
                  one-stop destination for all things birds. Browse our curated
                  collection of
                  <strong>
                    {" "}
                    bird supplies, accessories, and professional services
                  </strong>
                  designed to keep your avian companions happy and healthy.
                </p>
              </div>

              <div className="expedition-cta-button">
                <Link to="/store" className="btn btn-cta">
                  SHOP NOW! 🛒
                </Link>
              </div>
            </div>

            <div className="expedition-visual">
              {/* Decorative elements */}
              <div className="flight-path">
                <svg viewBox="0 0 200 100" className="flight-svg">
                  <path
                    d="M20 60 Q60 20, 100 40 Q140 60, 180 30"
                    stroke="#A4C639"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <circle cx="20" cy="60" r="3" fill="#A4C639" />
                  <circle cx="100" cy="40" r="3" fill="#A4C639" />
                  <circle cx="180" cy="30" r="3" fill="#A4C639" />
                </svg>
              </div>

              <div className="shopping-icon">
                <svg viewBox="0 0 60 40" className="shopping-svg">
                  <rect
                    x="10"
                    y="15"
                    width="30"
                    height="20"
                    rx="2"
                    fill="#333"
                    stroke="#A4C639"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="22" r="3" fill="#A4C639" />
                  <circle cx="32" cy="22" r="3" fill="#A4C639" />
                  <path
                    d="M15 12 L20 8 L45 8 L50 12"
                    stroke="#333"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="25" cy="25" r="1.5" fill="#87CEEB" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionCTA;
