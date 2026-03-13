// src/pages/AllReviews.jsx
import React, { useState } from "react";
import allReviews from "../data/AllReviewsData";

const AllReviews = () => {
  const categories = [...new Set(allReviews.map((review) => review.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredReviews = allReviews.filter(
    (review) => review.category === selectedCategory
  );

  return (
    <section className="section">
      <h2>All Reviews</h2>

      {/* Category Tabs */}
      <div className="categories-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        {filteredReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="avatar">
              {review.avatar ? (
                <img src={review.avatar} alt={review.author} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
              ) : (
                review.author.charAt(0)
              )}
            </div>
            <div className="review-content">
              <div className="review-header">
                <h3 className="review-product">{review.title}</h3>
              </div>
              <p className="review-text">{review.content}</p>
              <div className="review-footer">
                <span className="author">{review.author}</span>
                <span className="time">{review.time}</span>
              </div>
              <div className="stars">
                {"⭐".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllReviews;
