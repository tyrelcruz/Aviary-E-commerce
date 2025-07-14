import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Ric Cruz Tanael",
      text: "Very accomodating seller and will give you lots of advice on proper care, he will even allow you to handle his trained parrot so you can play and take pictures with them",
      rating: 5,
      timeAgo: "5 years ago",
      platform: "Google Reviews",
    },
    {
      id: 2,
      name: "KARA AYROSO",
      text: "So the reviews said YOU CAN PLAY WITH THEM REALLY? YOUR MY NEW TOP FAVORITE PET STORE",
      rating: 5,
      timeAgo: "10 months ago",
      platform: "Google Reviews",
    },
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Happy Customers" },
    { number: "5.0★", label: "Google Rating" },
    { number: "100+", label: "Bird Species" },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Google Reviews</h2>
          <p className="section-subtitle">
            Authentic feedback from our valued customers
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="google-badge">
                  <span className="google-icon">G</span>
                  <span className="platform-text">{testimonial.platform}</span>
                </div>
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  {testimonial.badge && (
                    <span className="author-badge">{testimonial.badge}</span>
                  )}
                  <p className="author-details">{testimonial.reviewInfo}</p>
                  <p className="review-time">{testimonial.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
