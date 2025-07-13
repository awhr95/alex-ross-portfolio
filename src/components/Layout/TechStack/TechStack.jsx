import React, { useEffect } from "react";
import AOS from "aos";
import "./TechStack.scss";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { techStack, learning } from "../../../data/techStackData";

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="techstack">
      <div className="techstack__icon-container">
        <div className="techstack__title-container">
          <h3 className="techstack__title">Core tech stack:</h3>
        </div>
        <section className="techstack__icon-section">
          {techStack.map((item, index) => {
            const tooltipId = `tooltip-core-${index}`;

            return (
              <figure
                key={index}
                className="techstack__figures"
                data-aos="fade-in"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="techstack__link"
                  aria-label={`View ${item.title} documentation`}
                  data-tooltip-id={tooltipId}
                  data-tooltip-content={`Open ${item.title} documentation`}
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
                <Tooltip
                  id={tooltipId}
                  place="top"
                  className="techstack__tooltip"
                  variant="custom"
                  classNameArrow="arrow"
                />
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
            const tooltipId = `tooltip-learning-${index}`;
            return (
              <figure
                key={index}
                className="techstack__figures"
                data-aos="fade-in"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="techstack__link"
                  aria-label={`Open ${item.title} documentation`}
                  data-tooltip-id={tooltipId}
                  data-tooltip-content={`Open ${item.title} documentation`}
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
                <Tooltip
                  id={tooltipId}
                  place="top"
                  variant="custom"
                  className="techstack__tooltip"
                  classNameArrow="arrow"
                />
              </figure>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default TechStack;
