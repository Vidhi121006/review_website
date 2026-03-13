import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: About */}
        <div className="footer-section">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
            We provide honest and real reviews for products, services, and places.
            Your trust is our priority.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-list">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/team" className="footer-link">Our Team</a></li>
            <li><a href="/careers" className="footer-link">Careers</a></li>
            <li><a href="/contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="footer-section">
          <h2 className="footer-title">Newsletter</h2>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="footer-input"
            />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>

        {/* Column 4: Social */}
        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <div className="footer-socials">
            <a href="#" className="footer-social"><FaFacebookF /></a>
            <a href="#" className="footer-social"><FaTwitter /></a>
            <a href="#" className="footer-social"><FaInstagram /></a>
            <a href="#" className="footer-social"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ReviewHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
