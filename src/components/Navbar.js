import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

<div className="logo">
  <img src={logo} alt="Parlour Logo" />
  <h2>Parlour Booking</h2>
</div>



function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Parlour Booking</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Price</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/book" className="book-btn">Book Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;

