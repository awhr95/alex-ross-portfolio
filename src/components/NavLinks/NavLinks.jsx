import "./Navlinks.scss";
import { NavLink } from "react-router-dom";
import download from "../../assets/icons/material-symbols-light--download.svg";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <NavLink className="NavLinks__link" to="/">
        ./Homepage
      </NavLink>
      <NavLink className="NavLinks__link" to="/about">
        ./About
      </NavLink>
      {/* <NavLink className="NavLinks__link" to="/portfolio">
        ./Portfolio
      </NavLink> */}
      {/* <NavLink className="NavLinks__link" to="/experience">
        ./Experience
      </NavLink> */}
      <NavLink className="NavLinks__link" to="/contact">
        ./Contact
      </NavLink>
      <a
        className="NavLinks__cv"
        href="/alex-ross-cv.pdf"
        download="alex-ross-cv.pdf"
      >
        ./CV{" "}
        <img
          className="NavLinks__download"
          src={download}
          alt="download button"
        />
      </a>
    </nav>
  );
};

export default NavLinks;
