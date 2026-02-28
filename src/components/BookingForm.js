import React, { useState } from "react";
import axios from "axios";

function BookingForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    price: "",
    date: "",
    time: ""
  });

  const services = [
    { name: "Hair Cut", price: 300 },
    { name: "Facial", price: 800 },
    { name: "Makeup", price: 2000 },
    { name: "Bridal Package", price: 8000 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updated = { ...form, [name]: value };

    if (name === "service") {
      const selected = services.find(s => s.name === value);
      updated.price = selected ? selected.price : "";
    }

    setForm(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/bookings/create/", form);
      alert("Booking Confirmed Successfully 🎉");

      setForm({
        name: "",
        phone: "",
        service: "",
        price: "",
        date: "",
        time: ""
      });

    } catch (err) {
      alert("Server Error ❌");
      console.log(err);
    }
  };

  return (
    <section className="booking-section">
      <h2>Book Your Appointment</h2>

      <form className="booking-form" onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Full Name"
          value={form.name} onChange={handleChange} required />

        <input type="tel" name="phone" placeholder="Mobile Number"
          value={form.phone} onChange={handleChange} required />

        <select name="service" value={form.service}
          onChange={handleChange} required>
          <option value="">Select Service</option>
          {services.map((s, i) => (
            <option key={i} value={s.name}>{s.name}</option>
          ))}
        </select>

        <input type="text" placeholder="₹ Price" value={form.price} readOnly />

        <input type="date" name="date"
          value={form.date} onChange={handleChange} required />

        <input type="time" name="time"
          value={form.time} onChange={handleChange} required />

        <button type="submit">Confirm Booking</button>

      </form>
    </section>
  );
}

export default BookingForm;
