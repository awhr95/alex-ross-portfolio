import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <NavLink className="NavLinks__link" to="#">
        ./About
      </NavLink>
      <NavLink className="NavLinks__link" to="#">
        ./Projects
      </NavLink>
      <NavLink className="NavLinks__link" to="#">
        ./Experience
      </NavLink>
      <NavLink className="NavLinks__link" to="#">
        ./Contact
      </NavLink>
    </nav>
  );
};

export default NavLinks;
