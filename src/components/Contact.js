import React from "react";
/*import "./Contact.css";*/

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p className="subtitle">We would love to hear from you</p>

      <div className="contact-container">

        <div className="contact-info">
          <div className="info-box">
            <span>📞</span>
            <h4>Phone</h4>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <span>📧</span>
            <h4>Email</h4>
            <p>parlour@gmail.com</p>
          </div>

          <div className="info-box">
            <span>📍</span>
            <h4>Address</h4>
            <p>Tikrapara, Raipur, Chhattisgarh</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
