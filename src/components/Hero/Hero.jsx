import "./Hero.scss";
import { Link } from "react-router-dom";
import Alex from "../../assets/icons/Alex Ross (1).jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <section className="hero__mobile-img">
          <div className="hero__picture-container">
            {" "}
            <img alt="" className="hero__pic" src={Alex} />
          </div>
        </section>
        <div className="hero__leftside">
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
          <section className="hero__blurb">
            <p className="hero__text">
              You have arrived! I’m Alex and welcome to my portfolio website!
            </p>
            <p className="hero__text">
              I'm a London based full stack software engineer passionate about
              designing and building applications people love using...{" "}
            </p>
            <p className="hero__text">
              Here’s <Link>NList</Link>, the ‘Airbnb’ of volunteering that I
              have built to encourage more giving in the world....you can see
              more of examples of my work below.
            </p>
          </section>
        </div>
      </div>
      <div className="hero__content">
        <section className="hero__picture-container">
          {" "}
          <img alt="" className="hero__pic" src={Alex} />
        </section>
        <section className="hero__contact">
          <p className="hero__text">Alex Ross</p>
          <p className="hero__text">
            <a className="hero__link" href="mailto: awhr95@gmail.com">
              email
            </a>
          </p>
          <p className="hero__text">
            {" "}
            <a
              className="hero__link"
              href="https://www.linkedin.com/in/alex-ross95/"
            >
              linkedin
            </a>
          </p>
          <p className="hero__text">
            <a className="hero__link" href="https://github.com/awhr95">
              github
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
