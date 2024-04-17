import "./Footer.scss";
import Github from "../../assets/icons/mdi--github.svg";
import Linkedin from "../../assets/icons/logos--linkedin-icon.svg";
import Email from "../../assets/icons/ic--outline-email.svg";

const Footer = () => {
  return (
    <section className="footer">
      <a href="https://github.com/awhr95">
        <img className="footer__icon" src={Github} alt="Html icon" />
      </a>
      <a href="https://www.linkedin.com/in/alex-ross95/">
        <img className="footer__icon" src={Linkedin} alt="React icon" />
      </a>
      <a href="mailto: info@travelsite.com">
        <img className="footer__icon" src={Email} alt="Sass icon" />
      </a>
    </section>
  );
};

export default Footer;
