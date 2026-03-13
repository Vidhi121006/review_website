import { useState } from "react";

export default function WriteReview() {
  const [product, setProduct] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const reviewData = { product, review, rating };

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      if (res.ok) {
        alert("✅ Review submitted successfully!");
        setProduct("");
        setReview("");
        setRating("");
      } else {
        alert("❌ Failed to submit review.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong, try again.");
    }
  }

  return (
    <div className="form-box">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Product/Service Name</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="e.g., Dell XPS 15"
          required
        />

        <label>Your Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="5"
          placeholder="Write your honest thoughts..."
          required
        ></textarea>

        <label>Rating (1-5)</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          placeholder="4"
          required
        />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
