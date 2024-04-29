import DesktopNavigation from "../DesktopNav/DesktopNavigation";
import MobileNavigation from "../MobileNav/MobileNavigation";
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
