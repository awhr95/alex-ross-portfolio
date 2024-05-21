import "./Hero.scss";
import { Link } from "react-router-dom";
import Alex from "../../assets/icons/Alex Ross (1).jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <section className="hero__img">
          <div className="hero__picture-container">
            {" "}
            <img alt="" className="hero__pic" src={Alex} />
          </div>
        </section>
        <section className="hero__text-container">
          <p className="hero__text">Hi, I'm</p>
          <h1 className="hero__title">
            {" "}
            <ReactTyped
              strings={[
                "Alex Ross",
                "A Software Engineer",
                "A Full Stack Developer",
                "A Web Developer",
                "A Product Builder",
                "A Salesperson turned Developer",
              ]}
              typeSpeed={100}
              loop
              backSpeed={30}
              cursorChar="/"
              showCursor={true}
            />
          </h1>
        </section>
      </div>
      <div className="hero__content">
        <section className="hero__blurb">
          <p className="hero__text">
            I’m Alex and welcome to my portfolio website!
          </p>
          <p className="hero__text">
            I'm a London based full stack software engineer passionate about
            designing and building applications people love using...{" "}
          </p>
          <p className="hero__text">
            Here’s <Link>NList</Link>, the ‘Airbnb’ of volunteering that I have
            built to encourage more giving in the world....you can see more of
            my active projects below.
          </p>
        </section>
        <section className="hero__contact">
          <p>name: Alex Ross</p>
          <p>
            email: <a href="mailto: awhr95@gmail.com">awhr95@gmail.com</a>
          </p>
          <p>
            linkedin:{" "}
            <a href="https://www.linkedin.com/in/alex-ross95/">
              linkedin.com/in/alex-ross95
            </a>
          </p>
          <p>
            github: <a href="https://github.com/awhr95">github.com/awhr95</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
