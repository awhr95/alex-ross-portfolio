import "./Footer.scss";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <section className="footer-nav">
      <Link to="#">About</Link>
      <Link to="#">Portfolio</Link>
      <Link to="#">Experience</Link>
      <Link to="#">Contact</Link>
    </section>
  );
};

export default FooterNav;
