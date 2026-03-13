// src/components/LatestReviews.jsx
import React from "react";
import latestReviews from "../data/LatestData";
import { Link } from "react-router-dom";
import AllReviews from "./AllReviews";
const LatestReviews = () => {
  return (
    <section className="section">
      <h2>Latest Reviews</h2>
      <div className="reviews-grid">
        {latestReviews.map((review) => (
          <div key={review.id} className="review-card">
            {/* Avatar + Content */}
            <div className="avatar">
              {review.avatar 
                ? <img src={review.avatar} alt={review.author} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                : review.author.charAt(0).toUpperCase()}
            </div>
                <div className="avatar-name">
                <span className="author">{review.author}</span>
              </div>
            <div className="review-content">
              <div className="review-header">
                <h3 className="review-product">{review.title}</h3>
              </div>
              <p className="review-text">{review.content}</p>

              <div className="review-footer">
                <span className="time">{review.time}</span>
              </div>

              <div className="stars">
                {"⭐".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button Centered */}
      <div className="btn-all-reviews-container">
  <Link to="/AllReviews" className="btn-all-reviews">
    See All Reviews
  </Link>
</div>
    </section>
  );
};

export default LatestReviews;
