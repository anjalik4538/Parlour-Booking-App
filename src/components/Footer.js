import React from "react";
/*import "./Footer.css";*/

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h3>Parlour Booking</h3>
          <p>
            Book your beauty services easily and quickly. We provide professional
            beauty services at affordable prices.
          </p>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#price">Price</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#booking">Book Now</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h4>Contact</h4>
          <p>📞 9876543210</p>
          <p>📧 parlour@gmail.com</p>
          <p>📍 Tikrapara, Raipur</p>
        </div>

        <div className="footer-box">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Parlour Booking App | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
