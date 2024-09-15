import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We bring you the latest news from around the world, covering a
            variety of topics including politics, technology, entertainment, and
            more. Stay informed with us!
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: contact@newswebsite.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h2>Subscribe</h2>
          <p>
            Subscribe to our newsletter to get the latest news delivered to your
            inbox.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ACONEWS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
