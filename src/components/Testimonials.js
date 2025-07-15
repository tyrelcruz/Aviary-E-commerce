import "./Testimonials.css";

const Marquee = ({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  vertical = false,
}) => {
  return (
    <div
      className={`marquee-container ${className} ${
        pauseOnHover ? "pause-on-hover" : ""
      } ${vertical ? "vertical" : "horizontal"}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`marquee-content ${reverse ? "reverse" : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

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
      name: "Kara Ayroso",
      text: "So the reviews said YOU CAN PLAY WITH THEM REALLY? YOUR MY NEW TOP FAVORITE PET STORE",
      rating: 5,
      timeAgo: "10 months ago",
      platform: "Google Reviews",
    },
    {
      id: 3,
      name: "Maria Santos",
      text: "Amazing experience! The staff is knowledgeable and the birds are well-cared for. Highly recommend!",
      rating: 4,
      timeAgo: "2 months ago",
      platform: "Google Reviews",
    },
    {
      id: 4,
      name: "David Chen",
      text: "Best pet store in town! Great selection of birds and excellent customer service.",
      rating: 4,
      timeAgo: "6 months ago",
      platform: "Google Reviews",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      text: "The owner is passionate about birds and it shows. Great advice and healthy birds!",
      rating: 5,
      timeAgo: "1 year ago",
      platform: "Google Reviews",
    },
    {
      id: 6,
      name: "Mike Rodriguez",
      text: "Fantastic place! The birds are beautiful and well-trained. Will definitely come back!",
      rating: 4,
      timeAgo: "8 months ago",
      platform: "Google Reviews",
    },
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Happy Customers" },
    { number: "5.0★", label: "Google Rating" },
    { number: "100+", label: "Bird Species" },
  ];

  // Split testimonials into groups for different columns
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Google Reviews</h2>
          <p className="section-subtitle">
            Authentic feedback from our valued customers
          </p>
        </div>

        {/* 3D Marquee Container */}
        <div className="testimonials-3d-container">
          <div className="testimonials-3d-wrapper">
            {/* Column 1 */}
            <Marquee
              vertical={true}
              pauseOnHover={true}
              className="testimonials-column"
              repeat={2}
            >
              {firstColumn.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, i) => (
                          <span key={i} className="star">
                            ⭐
                          </span>
                        )
                      )}
                    </div>
                    <div className="google-badge">
                      <span className="google-icon">G</span>
                      <span className="platform-text">
                        {testimonial.platform}
                      </span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      {testimonial.badge && (
                        <span className="author-badge">
                          {testimonial.badge}
                        </span>
                      )}
                      <p className="author-details">{testimonial.reviewInfo}</p>
                      <p className="review-time">{testimonial.timeAgo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Column 2 */}
            <Marquee
              vertical={true}
              reverse={true}
              pauseOnHover={true}
              className="testimonials-column"
              repeat={2}
            >
              {secondColumn.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, i) => (
                          <span key={i} className="star">
                            ⭐
                          </span>
                        )
                      )}
                    </div>
                    <div className="google-badge">
                      <span className="google-icon">G</span>
                      <span className="platform-text">
                        {testimonial.platform}
                      </span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      {testimonial.badge && (
                        <span className="author-badge">
                          {testimonial.badge}
                        </span>
                      )}
                      <p className="author-details">{testimonial.reviewInfo}</p>
                      <p className="review-time">{testimonial.timeAgo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Column 3 */}
            <Marquee
              vertical={true}
              pauseOnHover={true}
              className="testimonials-column"
              repeat={2}
            >
              {thirdColumn.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, i) => (
                          <span key={i} className="star">
                            ⭐
                          </span>
                        )
                      )}
                    </div>
                    <div className="google-badge">
                      <span className="google-icon">G</span>
                      <span className="platform-text">
                        {testimonial.platform}
                      </span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      {testimonial.badge && (
                        <span className="author-badge">
                          {testimonial.badge}
                        </span>
                      )}
                      <p className="author-details">{testimonial.reviewInfo}</p>
                      <p className="review-time">{testimonial.timeAgo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Column 4 */}
            <Marquee
              vertical={true}
              reverse={true}
              pauseOnHover={true}
              className="testimonials-column"
              repeat={2}
            >
              {firstColumn.map((testimonial) => (
                <div
                  key={`${testimonial.id}-repeat`}
                  className="testimonial-card"
                >
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, i) => (
                          <span key={i} className="star">
                            ⭐
                          </span>
                        )
                      )}
                    </div>
                    <div className="google-badge">
                      <span className="google-icon">G</span>
                      <span className="platform-text">
                        {testimonial.platform}
                      </span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      {testimonial.badge && (
                        <span className="author-badge">
                          {testimonial.badge}
                        </span>
                      )}
                      <p className="author-details">{testimonial.reviewInfo}</p>
                      <p className="review-time">{testimonial.timeAgo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Gradient overlays for 3D effect */}
          <div className="gradient-overlay gradient-top"></div>
          <div className="gradient-overlay gradient-bottom"></div>
          <div className="gradient-overlay gradient-left"></div>
          <div className="gradient-overlay gradient-right"></div>
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
