import "./Navlinks.scss";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <NavLink className="NavLinks__link" to="/about">
        ./About
      </NavLink>
      <NavLink className="NavLinks__link" to="/portfolio">
        ./Portfolio
      </NavLink>
      <NavLink className="NavLinks__link" to="/experience">
        ./Experience
      </NavLink>
      <NavLink className="NavLinks__link" to="/contact">
        ./Contact
      </NavLink>
    </nav>
  );
};

export default NavLinks;
