import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
