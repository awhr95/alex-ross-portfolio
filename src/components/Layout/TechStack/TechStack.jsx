import React, { useEffect } from "react";
import AOS from "aos";
import "./TechStack.scss";
import "aos/dist/aos.css";
import HTML from "../../../assets/icons/skill-icons--html.svg";
import ReactIcon from "../../../assets/icons/skill-icons--react-dark.svg";
import Sass from "../../../assets/icons/skill-icons--sass.svg";
import Javascript from "../../../assets/icons/skill-icons--javascript.svg";
import CSS from "../../../assets/icons/skill-icons--css.svg";
import Node from "../../../assets/icons/skill-icons--nodejs-dark.svg";
import Git from "../../../assets/icons/skill-icons--git.svg";
import Express from "../../../assets/icons/skill-icons--expressjs-light.svg";
import Knex from "../../../assets/icons/devicon--knexjs-wordmark.svg";
import MySQL from "../../../assets/icons/logos--mysql.svg";
import TypeScriptIcon from "../../../assets/icons/skill-icons--typescript.svg";
import Tailwind from "../../../assets/icons/skill-icons--tailwindcss-dark.svg";
import GoLang from "../../../assets/icons/skill-icons--golang.svg";
import Python from "../../../assets/icons/logos--python.svg";

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const techStack = [
    { title: "HTML", link: "https://www.html.com", icon: HTML },
    {
      title: "CSS",
      link: "https://www.w3schools.com/css/css_intro.asp",
      icon: CSS,
    },
    { title: "React", link: "https://react.dev/", icon: ReactIcon },
    { title: "Sass", link: "https://sass-lang.com/", icon: Sass },

    {
      title: "JavaScript",
      link: "https://www.javascript.com",
      icon: Javascript,
    },
    { title: "Node.js", link: "https://nodejs.org", icon: Node },
    { title: "Git", link: "https://git-scm.com", icon: Git },
    { title: "Express.js", link: "https://expressjs.com", icon: Express },
    { title: "Knex.js", link: "http://knexjs.org", icon: Knex },
    { title: "MySQL", link: "https://www.mysql.com", icon: MySQL },
  ];
  const learning = [
    {
      title: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: TypeScriptIcon,
    },
    { title: "Tailwind", link: "https://tailwindcss.com/", icon: Tailwind },
    { title: "Go", link: "https://go.dev/", icon: GoLang },
    {
      title: "Python",
      link: "https://python.org/",
      icon: Python,
    },
  ];

  return (
    <section className="techstack">
      <div className="techstack__icon-container">
        <div className="techstack__title-container">
          <h3 className="techstack__title">Core tech stack:</h3>
        </div>
        <section className="techstack__icon-section">
          {techStack.map((item, index) => {
            return (
              <figure
                key={index}
                className="techstack__figures"
                data-aos="fade-in"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack__link"
                >
                  <img
                    className="techstack__icon"
                    src={item.icon}
                    alt={`${item.title} icon`}
                  />
                  <figcaption className="techstack__caption">
                    {item.title}
                  </figcaption>
                </a>
              </figure>
            );
          })}
        </section>
      </div>
      <div className="techstack__icon-container">
        <div className="techstack__title-container">
          <h3 className="techstack__title">What I'm learning:</h3>
        </div>
        <section className="techstack__icon-section">
          {learning.map((item, index) => {
            return (
              <figure
                key={index}
                className="techstack__figures"
                data-aos="fade-in"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack__link"
                >
                  <img
                    className="techstack__icon"
                    src={item.icon}
                    alt={`${item.title} icon`}
                  />
                  <figcaption className="techstack__caption">
                    {item.title}
                  </figcaption>
                </a>
              </figure>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default TechStack;
