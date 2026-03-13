export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About <span>Pen & Pixel</span></h2>
        <p className="about-intro">
          Welcome to <strong>Pen & Pixel</strong>, a community-driven platform where students and users
          share honest reviews about <b>gadgets, books, food, travel</b>, and much more.  
        </p>

        <div className="about-content">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide a simple, transparent, and reliable space for sharing
              experiences that help others make informed decisions.
            </p>
          </div>

          <div className="about-card">
            <h3>🌍 Why Pen & Pixel?</h3>
            <p>
              Unlike complicated review platforms, our design is clean, lightweight,
              and easy to maintain—perfect for students, learners, and creators.
            </p>
          </div>

          <div className="about-card">
            <h3>🤝 Join Us</h3>
            <p>
              Share your reviews, discover new insights, and be part of a
              growing community that values honest feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}