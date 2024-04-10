import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <h3>Alex Ross</h3>
      <nav>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        <Link to="">Blog</Link>
        <Link to="">Projects</Link>
      </nav>
    </section>
  );
}

export default Header;
