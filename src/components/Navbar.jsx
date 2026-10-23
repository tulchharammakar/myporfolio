import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">Your Name</div>

      {/* Navigation Links */}
      <div className="nav-links">
        {/* Home Link */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        {/* About Link */}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        {/* Services Link */}
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sevices
        </NavLink>

        {/* Contact Link */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
