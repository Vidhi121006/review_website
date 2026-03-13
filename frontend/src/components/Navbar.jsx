import { Link } from "react-router-dom";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="navbar modern-navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Pen & Pixel</Link>
      </div>

      {/* Search Bar */}
      <form className="search-bar">
  <FontAwesomeIcon icon={faSearch} className="search-icon" />
  <input
    type="text"
    placeholder="Search reviews for products, services, or places..."
  />
</form>


      {/* Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/write">Write a Review</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link to="/login" className="btn-outline">Login</Link>
        <Link to="/signup" className="btn-filled">Sign Up</Link>
      </div>
    </header>
  );
}
