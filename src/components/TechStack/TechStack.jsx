import "./TechStack.scss";
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

const TechStack = () => {
  return (
    <section className="techstack">
      <h3 className="techstack__subtitle">My tech stack:</h3>

      <div className="techstack__icon-container">
        <section className="techstack__icon-section">
          <a href="https://www.html.com" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={HTML} alt="Html icon" />
              <figcaption className="techstack__caption">HTML</figcaption>
            </figure>
          </a>

          <a
            href="https://www.w3schools.com/css/css_intro.asp"
            className="techstack__stack-link"
          >
            <figure className="techstack__figures">
              <img className="techstack__icon" src={CSS} alt="CSS icon" />
              <figcaption className="techstack__caption">CSS</figcaption>
            </figure>
          </a>
          <a href="https://sass-lang.com/" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={Sass} alt="Sass icon" />
              <figcaption className="techstack__caption">SASS</figcaption>
            </figure>
          </a>
          <a
            href="https://www.javascript.com/"
            className="techstack__stack-link"
          >
            <figure className="techstack__figures">
              <img
                className="techstack__icon"
                src={Javascript}
                alt="Html icon"
              />
              <figcaption className="techstack__caption">JavaScript</figcaption>
            </figure>
          </a>
          <a href="https://react.dev/" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={React} alt="React icon" />
              <figcaption className="techstack__caption">React</figcaption>
            </figure>
          </a>
          <a href="https://nodejs.org/en" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={Node} alt="Node.js icon" />
              <figcaption className="techstack__caption">Node.js</figcaption>
            </figure>
          </a>
          <a href="https://expressjs.com/" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img
                className="techstack__icon"
                src={Express}
                alt="Express icon"
              />
              <figcaption className="techstack__caption"> Express</figcaption>
            </figure>
          </a>
          <a href="https://knexjs.org/" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={Knex} alt="Knex icon" />
              <figcaption className="techstack__caption">Knex</figcaption>
            </figure>
          </a>
          <a href="https://www.mysql.com/" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={MySQL} alt="MySQL icon" />
              <figcaption className="techstack__caption">MySQL</figcaption>
            </figure>
          </a>
          <a href="https://git-scm.com/" className="techstack__stack-link">
            <figure className="techstack__figures">
              <img className="techstack__icon" src={Git} alt="Git icon" />
              <figcaption className="techstack__caption">Git</figcaption>
            </figure>
          </a>
        </section>
      </div>
    </section>
  );
};

export default TechStack;
