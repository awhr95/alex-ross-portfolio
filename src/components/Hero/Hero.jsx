import "./Hero.scss";
import { Link } from "react-router-dom";
import Alex from "../../assets/icons/Alex Ross (1).jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__picture-container">
        <img alt="" className="hero__pic" src={Alex} />
      </div>
      <p className="hero__text">Hi, I'm</p>
      <h1 className="hero__title">Alex Ross</h1>
      <p className="hero__text">
        I’m a London based full stack software engineer passionate about
        designing and building applications people love using...
      </p>
      <p className="hero__text">
        Here’s <Link>NList</Link>, the ‘Airbnb’ of volunteering that I have
        built to encourage more giving in the world....you can see more of my
        active projects here.
      </p>
    </section>
  );
};

export default Hero;
