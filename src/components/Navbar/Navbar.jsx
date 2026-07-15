import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img src={logo} alt="Golden Jewellers" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;