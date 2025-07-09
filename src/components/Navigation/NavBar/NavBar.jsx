import DesktopNavigation from "../DesktopNav/DesktopNav";
import MobileNavigation from "../MobileNav/MobileNav";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
