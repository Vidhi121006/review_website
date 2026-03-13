export default function Signup() {
  return (
    <div className="form-box">
      <h2>Signup</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" placeholder="you@example.com" required />

        <label>Password</label>
        <input type="password" placeholder="Make a password" required />

        <button type="submit">Create Account</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
