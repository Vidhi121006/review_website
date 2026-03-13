import { useEffect, useState } from "react";
import categoriesData from "../data/CategoriesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../utils/iconMap";
import LatestReviews from "./LatestReviews";

export default function Categories() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      let res = await fetch("http://localhost:5000/api/reviews");
      let data = await res.json();
      setReviews(data);
    } catch (err) {
      console.log("error loading reviews", err);
    }
  }

  async function deleteReview(id) {
    if (window.confirm("Do you really want to delete?")) {
      await fetch("http://localhost:5000/api/reviews/" + id, {
        method: "DELETE",
      });
      fetchReviews();
    }
  }

  async function editReview(id) {
    let newText = prompt("Enter new review:");
    let newRating = prompt("Enter new rating (1-5):");
    if (newText && newRating) {
      await fetch("http://localhost:5000/api/reviews/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: newText, rating: newRating }),
      });
      fetchReviews();
    }
  }

  return (
    <section className="section">
      <h2>Explore Categories</h2>
      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="icon">
              <FontAwesomeIcon icon={iconMap[cat.icon]} size="2x" />
            </div>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>

      <div className="review-list">
        {reviews.map((r) => (
          <div key={r._id} className="review-card">
            <h3>
              {r.product} ⭐ {r.rating}/5
            </h3>
            <p>{r.review}</p>
            <button onClick={() => editReview(r._id)}>Edit</button>
            <button onClick={() => deleteReview(r._id)}>Delete</button>
          </div>
        ))}
      </div>

      <div>
        <LatestReviews />
      </div>
    </section>
  );
}
