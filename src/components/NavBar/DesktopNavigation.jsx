import NavLinks from "./NavLinks";
import "./NavBar.scss";

const DesktopNavigation = () => {
  return (
    <nav className="DesktopNavigation">
      <h3 className="name">{"< AR /> "}</h3>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
