import NavLinks from "../NavLinks/NavLinks";
import "./NavBar.scss";

const DesktopNavigation = () => {
  return (
    <nav className="DesktopNavigation">
      <a href="/" className="DesktopNavigation__link">
        <h3 className="DesktopNavigation__logo">{"< AR /> "}</h3>
      </a>
      <NavLinks />
    </nav>
  );
};

export default DesktopNavigation;
