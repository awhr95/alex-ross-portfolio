import "./Hero.scss";
import { Link } from "react-router-dom";
import Alex from "../../assets/icons/Alex Ross (1).jpg";
import HTML from "../../assets/icons/skill-icons--html.svg";
import React from "../../assets/icons/skill-icons--react-dark.svg";
import Sass from "../../assets/icons/skill-icons--sass.svg";
import Javascript from "../../assets/icons/skill-icons--javascript.svg";
import CSS from "../../assets/icons/skill-icons--css.svg";
import Node from "../../assets/icons/skill-icons--nodejs-dark.svg";
import Git from "../../assets/icons/skill-icons--git.svg";
import Express from "../../assets/icons/skill-icons--expressjs-light.svg";
import Knex from "../../assets/icons/devicon--knexjs-wordmark.svg";
import MySQL from "../../assets/icons/logos--mysql.svg";

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
      <p className="hero__subtitle">My tech stack:</p>
      <section className="hero__icon-container">
        <a href="https://www.html.com">
          <img className="hero__icon" src={HTML} alt="Html icon" />
        </a>
        <a href="https://react.dev/">
          <img className="hero__icon" src={React} alt="React icon" />
        </a>
        <a href="https://sass-lang.com/">
          <img className="hero__icon" src={Sass} alt="Sass icon" />
        </a>
        <a href="https://www.javascript.com/">
          <img className="hero__icon" src={Javascript} alt="Html icon" />
        </a>
        <a href="https://www.w3schools.com/css/css_intro.asp">
          <img className="hero__icon" src={CSS} alt="CSS icon" />
        </a>
        <a href="https://nodejs.org/en">
          <img className="hero__icon" src={Node} alt="Node.js icon" />
        </a>
        <a href="https://git-scm.com/">
          <img className="hero__icon" src={Git} alt="Git icon" />
        </a>
        <a href="https://expressjs.com/">
          <img className="hero__icon" src={Express} alt="Express icon" />
        </a>
        <a href="https://knexjs.org/">
          <img className="hero__icon" src={Knex} alt="Knex icon" />
        </a>
        <a href="https://www.mysql.com/">
          <img className="hero__icon" src={MySQL} alt="MySQL icon" />
        </a>
      </section>
    </section>
  );
};

export default Hero;
