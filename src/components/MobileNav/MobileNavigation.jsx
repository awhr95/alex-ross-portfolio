import NavLinks from "../NavLinks/NavLinks";
import "./MobileNav.scss";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const MobileNavigation = () => {
  const [click, setclick] = useState(false);

  const Close = (
    <MdClose
      className="mobile-nav__menu-close"
      onClick={() => setclick(!click)}
    />
  );

  const Hamburger = (
    <CiMenuBurger
      className="mobile-nav__menu"
      onClick={() => setclick(!click)}
    />
  );
  return (
    <nav className="mobile-nav">
      <h3 className="mobile-nav__logo">{"< AR /> "}</h3>
      {click ? Close : Hamburger}
      {click && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
