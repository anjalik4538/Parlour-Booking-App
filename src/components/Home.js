
function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
           

          <h1>Welcome to Parlour Booking App</h1>
          <p>Book your beauty services easily from home.</p>
          <a href="/book" className="hero-btn">Book Appointment</a>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <h2 className="section-title">Our Popular Services</h2>

      <div className="service-grid">

        <div className="service-card">
          <img src="/images/imgh1.jpg" alt="Hair Cut" />
          <h3>Hair Cut</h3>
          <p>Professional haircut by experts.</p>
          <span>₹300</span>
        </div>

        <div className="service-card">
          <img src="/images/imgf3.jpg" alt="Facial" />
          <h3>Facial</h3>
          <p>Glowing facial treatment.</p>
          <span>₹800</span>
        </div>

        <div className="service-card">
          <img src="/images/imgm2.jpg" alt="Makeup" />
          <h3>Makeup</h3>
          <p>Party and bridal makeup.</p>
          <span>₹2000</span>
        </div>

        <div className="service-card">
          <img src="/images/img4.jpg" alt="Bridal" />
          <h3>Bridal Package</h3>
          <p>Complete bridal makeover.</p>
          <span>₹8000</span>
        </div>

      </div>
    </div>
  );
}

export default Home;
