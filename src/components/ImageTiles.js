import React from "react";
import { Link } from "react-router-dom";
import "./ImageTiles.css";

const ImageTiles = () => {
  return (
    <section className="image-tiles">
      <div className="container">
        <div className="tiles-grid">
          {/* Bird Food & Nutrition Tile */}
          <div className="tile">
            <div className="tile-image penguin-tile">
              <div className="penguin">
                <div className="penguin-body">
                  <div className="penguin-belly"></div>
                </div>
                <div className="penguin-head">
                  <div className="penguin-beak"></div>
                  <div className="penguin-eye penguin-eye-left"></div>
                  <div className="penguin-eye penguin-eye-right"></div>
                </div>
                <div className="penguin-wing penguin-wing-left"></div>
                <div className="penguin-wing penguin-wing-right"></div>
                <div className="penguin-feet">
                  <div className="penguin-foot penguin-foot-left"></div>
                  <div className="penguin-foot penguin-foot-right"></div>
                </div>
              </div>
              <div className="tile-bg penguin-bg"></div>
            </div>
            <div className="tile-content">
              <h3 className="tile-title">Premium Bird Food</h3>
              <p className="tile-description">
                Nutritious seed mixes, pellets, and treats specially formulated
                for different bird species. Starting at $12.99.
              </p>
              <Link to="/store" className="tile-link">
                Shop Food →
              </Link>
            </div>
          </div>

          {/* Veterinary Services Tile */}
          <div className="tile">
            <div className="tile-image sloth-tile">
              <div className="sloth">
                <div className="sloth-body"></div>
                <div className="sloth-head">
                  <div className="sloth-eye sloth-eye-left"></div>
                  <div className="sloth-eye sloth-eye-right"></div>
                  <div className="sloth-nose"></div>
                  <div className="sloth-mouth"></div>
                </div>
                <div className="sloth-arm sloth-arm-left"></div>
                <div className="sloth-arm sloth-arm-right"></div>
                <div className="sloth-claw sloth-claw-left"></div>
                <div className="sloth-claw sloth-claw-right"></div>
              </div>
              <div className="tile-bg sloth-bg"></div>
            </div>
            <div className="tile-content">
              <h3 className="tile-title">Veterinary Care</h3>
              <p className="tile-description">
                Expert avian veterinary services including check-ups,
                treatments, and emergency care by certified bird specialists.
              </p>
              <Link to="/contact" className="tile-link">
                Book Appointment →
              </Link>
            </div>
          </div>

          {/* Accessories & Supplies Tile */}
          <div className="tile">
            <div className="tile-image condor-tile">
              <div className="condor">
                <div className="condor-body"></div>
                <div className="condor-head">
                  <div className="condor-eye"></div>
                  <div className="condor-beak"></div>
                </div>
                <div className="condor-wing condor-wing-left">
                  <div className="wing-feather"></div>
                  <div className="wing-feather"></div>
                  <div className="wing-feather"></div>
                </div>
                <div className="condor-wing condor-wing-right">
                  <div className="wing-feather"></div>
                  <div className="wing-feather"></div>
                  <div className="wing-feather"></div>
                </div>
                <div className="condor-tail"></div>
              </div>
              <div className="tile-bg condor-bg"></div>
            </div>
            <div className="tile-content">
              <h3 className="tile-title">Cages & Accessories</h3>
              <p className="tile-description">
                Premium bird cages, perches, toys, and accessories to create the
                perfect environment for your feathered friends.
              </p>
              <Link to="/store" className="tile-link">
                Browse Supplies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTiles;
