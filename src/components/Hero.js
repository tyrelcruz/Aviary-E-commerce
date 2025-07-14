import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import birdworldImage from "../assets/birdworld.png";
import seedMixImage from "../assets/birdseed.png";
import ImageUpload from "./ImageUpload";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const [carouselImages, setCarouselImages] = useState([
    {
      id: 1,
      title: "Premium Bird Food",
      description: "Nutritious blends for every species",
      image: seedMixImage,
      bgColor: "#E8F5E8",
    },
    {
      id: 2,
      title: "Expert Veterinary Care",
      description: "Professional health services",
      image: null,
      bgColor: "#E8F0FF",
    },
    {
      id: 3,
      title: "Spacious Bird Cages",
      description: "Comfortable homes for your birds",
      image: null,
      bgColor: "#FFF5E8",
    },
    {
      id: 4,
      title: "Bird Training Services",
      description: "Professional behavior training",
      image: null,
      bgColor: "#F0E8FF",
    },
    {
      id: 5,
      title: "Exotic Bird Species",
      description: "Beautiful birds for adoption",
      image: null,
      bgColor: "#E8FFF5",
    },
  ]);

  const achievements = [
    {
      icon: "🏆",
      title: "Best Aviary 2023",
      subtitle: "National Bird Show",
      color: "#FFD700",
    },

    {
      icon: "⭐",
      title: "5-Star Rating",
      subtitle: "Customer Reviews",
      color: "#FFA500",
    },
    {
      icon: "🏅",
      title: "20+ Years",
      subtitle: "Experience in Bird Care",
      color: "#CD7F32",
    },
  ];

  const quickStats = [
    { number: "10,000+", label: "Birds Cared For" },
    { number: "500+", label: "Happy Families" },
    { number: "50+", label: "Bird Species" },
    { number: "24/7", label: "Emergency Support" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length, isDragging]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleImageUpload = (slideId, imageData) => {
    setCarouselImages((prev) =>
      prev.map((slide) =>
        slide.id === slideId ? { ...slide, image: imageData } : slide
      )
    );
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        setCurrentSlide(
          (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
        );
      } else {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  // Touch drag handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const diff = e.touches[0].clientX - dragStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        setCurrentSlide(
          (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
        );
      } else {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${birdworldImage})` }}
      ></div>

      {/* Floating Achievement Badges */}
      <div className="floating-badges">
        <div className="floating-badge badge-1">
          <span className="badge-icon">🏆</span>
          <span className="badge-text">Award Winner</span>
        </div>
        <div className="floating-badge badge-2">
          <span className="badge-icon">⭐</span>
          <span className="badge-text">5-Star Rated</span>
        </div>
        <div className="floating-badge badge-3">
          <span className="badge-icon">🎖️</span>
          <span className="badge-text">Certified</span>
        </div>
        <div className="floating-badge badge-4">
          <span className="badge-icon">🏅</span>
          <span className="badge-text">15+ Years</span>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Mysher Aviary</h1>
          <p className="hero-subtitle">
            Your trusted partner for bird care, products, and services
          </p>

          {/* Quick Stats Bar */}
          <div className="quick-stats-bar">
            {quickStats.map((stat, index) => (
              <div key={index} className="quick-stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div
                    className="achievement-icon"
                    style={{ backgroundColor: achievement.color }}
                  >
                    {achievement.icon}
                  </div>
                  <div className="achievement-text">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-subtitle">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drag Carousel Component */}
          <div className="hero-carousel">
            <div className="carousel-container">
              <div
                className="carousel-wrapper"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className={`carousel-track ${isDragging ? "dragging" : ""}`}
                  style={{
                    transform: `translateX(calc(-${
                      currentSlide * 100
                    }% + ${dragOffset}px))`,
                    transition: isDragging
                      ? "none"
                      : "transform 0.5s ease-in-out",
                  }}
                >
                  {carouselImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="carousel-slide"
                      style={{ backgroundColor: image.bgColor }}
                    >
                      <div className="slide-content">
                        <div className="slide-image">
                          <ImageUpload
                            onImageSelect={(imageData) =>
                              handleImageUpload(image.id, imageData)
                            }
                            currentImage={image.image}
                            slideTitle={image.title}
                          />
                        </div>
                        <h3 className="slide-title">{image.title}</h3>
                        <p className="slide-description">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <div className="drag-hint">
              <span>← Drag to browse →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
