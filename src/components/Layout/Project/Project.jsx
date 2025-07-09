import React, { useState } from "react";
import "./Project.scss";
import ImgCarousel from "../ImgCarousel/ImgCarousel";

const Project = ({ title, description, details, githublink, images }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title">{title}</h2>
        <p className="project__description">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </p>
        <button className="project__details-button" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && (
          <div className="project__details">
            <p>{details}</p>
            <a
              href={githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__github-link"
            >
              View on GitHub
            </a>
          </div>
        )}
        <ImgCarousel images={images} />
      </div>
    </section>
  );
};

export default Project;
