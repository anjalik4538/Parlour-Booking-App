import React from "react";
/*import "./App.css";*/

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We provide professional beauty services like <b>Haircut, Facial, Makeup and Bridal Packages</b>
            at affordable prices. Our expert beauticians use high-quality products to give you a
            relaxing and refreshing experience. Your beauty and satisfaction is our first priority.
          </p>

          <ul>
            <li>✔ Certified Beauty Experts</li>
            <li>✔ Premium Quality Products</li>
            <li>✔ Premium Quality Products</li>
            <li>✔ 100% Customer Satisfaction</li>
          </ul>
        </div>

        <div className="about-img">
          <img src="/images/img10.jpg" alt="Parlour" />
        </div>

      </div>
    </section>
  );
}

export default About;
