import NavLinks from "./NavLinks";
import "./NavBar.scss";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const MobileNavigation = () => {
  const [click, setclick] = useState(false);

  const Close = (
    <MdClose
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setclick(!click)}
    />
  );

  const Hamburger = (
    <CiMenuBurger
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setclick(!click)}
    />
  );
  return (
    <nav className="MobileNavigation">
      <h3 className="name">{"< AR /> "}</h3>
      {click ? Close : Hamburger}
      {click && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
