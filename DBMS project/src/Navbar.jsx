import { Link } from 'react-router-dom'; // Optional, for navigation (install react-router-dom if needed)
import './App.css'; // We'll add styles here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;