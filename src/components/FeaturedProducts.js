import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import seedMix from "../assets/birdseed.png";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Seed Mix",
      price: "$24.99",
      originalPrice: "$32.99",
      image: seedMix, // Real image
      isEmoji: false,
      description: "Nutritious blend of seeds for all bird types",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Deluxe Bird Cage",
      price: "$149.99",
      originalPrice: "$189.99",
      image: "🏠", // Emoji
      isEmoji: true,
      description: "Spacious cage with premium accessories",
      badge: "20% Off",
    },
    {
      id: 3,
      name: "Health Check Package",
      price: "$89.99",
      originalPrice: null,
      image: "🩺", // Emoji
      isEmoji: true,
      description: "Complete veterinary health examination",
      badge: "Service",
    },
  ];

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products & Services</h2>
          <p className="section-subtitle">
            Our most popular items trusted by bird owners everywhere
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <div
                  className={`product-badge ${
                    product.badge === "Service" ? "service" : "sale"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              <div className="product-image">
                {product.isEmoji ? (
                  <span className="product-emoji">{product.image}</span>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-pricing">
                  <span className="product-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="product-original-price">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <Link
                  to={product.badge === "Service" ? "/contact" : "/store"}
                  className="product-cta"
                >
                  {product.badge === "Service" ? "Book Now" : "Add to Cart"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-footer">
          <Link to="/store" className="view-all-btn">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
