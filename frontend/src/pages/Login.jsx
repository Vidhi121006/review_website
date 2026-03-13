export default function Login() {
  return (
    <div className="form-box">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        No account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}
