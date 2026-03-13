import { useEffect, useState, useRef } from "react";
import trendingData from "../data/TrendingData";
import categoriesData from "../data/CategoriesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../utils/iconMap"; // Move iconMap here if you modularize it
import { Link } from "react-router-dom";
import LatestReviews from "./LatestReviews";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      let res = await fetch("http://localhost:5000/api/posts");
      let data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log("Error loading posts:", err);
    }
  }

  /*async function deletePost(id) {
    await fetch("http://localhost:5000/api/posts/" + id, { method: "DELETE" });
    loadPosts();
  }

  async function editPost(id) {
    let newTitle = prompt("Enter new title:");
    let newContent = prompt("Enter new content:");
    if (newTitle && newContent) {
      await fetch("http://localhost:5000/api/posts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });
      loadPosts();
    }
  }*/

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero modern-hero">
        <div className="hero-content">
          <h1>Find Honest Reviews Before You Decide</h1>
          <p>
            Join thousands of users who make informed decisions based on
            authentic reviews from real people. Share your experiences and help
            others choose wisely.
          </p>
          <div className="hero-buttons">
            <a href="/write" className="btn-filled">
              Write a Review
            </a>
            <a href="/categories" className="btn-outline">
              Explore Categories
            </a>
          </div>
        </div>

        <div className="hero-illustration">
          <img src="bghome.png" alt="reviews cycle" className="hero-bg" />
          <div className="review-bubble bubble-top">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Great product!</p>
          </div>
          <div className="review-bubble bubble-bottom">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Highly recommend!</p>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="section">
        <h2>Trending Reviews</h2>
        <div className="scroll-container">
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            ◀
          </button>
          <div className="scroll-content" ref={scrollRef}>
            {trendingData.map((review) => (
              <div key={review.id} className="card">
                <div className="icon">
                  <img
                    src={review.img}
                    alt={review.title}
                    style={{
                      width: "255px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h4>{review.title}</h4>
                <div className="stars">{"⭐".repeat(review.rating)}</div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll("right")}>
            ▶
          </button>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="section">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          {categoriesData.slice(0, 6).map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="icon">
                <FontAwesomeIcon icon={iconMap[cat.icon]} size="2x" />
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link to="/categories" className="view-all-btn">View All Categories</Link>
        </div>
      </section>

      {/* Latest Reviews */}
      <LatestReviews />

    </div>
  );
}
