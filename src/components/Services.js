import React from "react";
/*import "./Services.css";*/

function Services() {
  const services = [
    {
      name: "Hair Cut",
      price: "₹300",
      time: "30 min",
      desc: "Trendy and professional haircut by certified experts.",
      img: "/images/imgh1.jpg"
    },
    {
      name: "Facial",
      price: "₹800",
      time: "45 min",
      desc: "Glow boosting facial treatment using premium products.",
      img: "/images/imgf3.jpg"
    },
    {
      name: "Makeup",
      price: "₹2000",
      time: "1.5 hrs",
      desc: "Party & bridal makeup by professional makeup artists.",
      img: "/images/imgm2.jpg"
    },
    {
      name: "Bridal Package",
      price: "₹8000",
      time: "3 hrs",
      desc: "Complete bridal beauty package for your special day.",
      img: "/images/img4.jpg"
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Beauty Services</h2>
      <p className="subtitle">Professional care, premium products, affordable prices</p>

      <div className="services-container">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.name} />
            <div className="card-body">
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="service-info">
                <span>⏱ {s.time}</span>
                <span className="price">{s.price}</span>
              </div>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
