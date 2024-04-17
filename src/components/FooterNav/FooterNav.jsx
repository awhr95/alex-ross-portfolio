import "./Footer.scss";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <section className="footer-nav">
      <Link>About</Link>
      <Link>Portfolio</Link>
      <Link>Experience</Link>
      <Link>Contact</Link>
    </section>
  );
};

export default FooterNav;
