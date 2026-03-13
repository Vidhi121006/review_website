export default function Contact() {
  return (
    <div className="form-box">
      <h2>Contact Us</h2>
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Your name" required />

        <label>Your Email</label>
        <input type="email" placeholder="you@example.com" required />

        <label>Message</label>
        <textarea rows="5" placeholder="Write message..." required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
