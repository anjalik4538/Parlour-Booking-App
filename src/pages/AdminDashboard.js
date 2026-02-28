import React, { useEffect, useState } from "react";
import axios from "axios";


function AdminDashboard() {

  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/bookings/");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`http://127.0.0.1:8000/api/update/${id}/`, { status });
    loadBookings();
  };

  const deleteBooking = async (id) => {
    if (window.confirm("Delete this booking?")) {
      await axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`);
      loadBookings();
    }
  };

  return (
    <div className="admin-container">

      <h1>Admin Dashboard</h1>
      <p className="subtitle">Manage all bookings here</p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.phone}</td>
                <td>{b.service}</td>
                <td>₹{b.price}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>
                  <span className={`status ${b.status.toLowerCase()}`}>
                    {b.status}
                  </span>
                </td>
                <td>
                  <button className="approve" onClick={() => updateStatus(b.id, "Approved")}>Approve</button>
                  <button className="complete" onClick={() => updateStatus(b.id, "Completed")}>Complete</button>
                  <button className="delete" onClick={() => deleteBooking(b.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default AdminDashboard;
