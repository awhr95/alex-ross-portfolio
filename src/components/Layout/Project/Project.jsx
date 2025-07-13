import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Project.scss";
import ImgCarousel from "../ImgCarousel/ImgCarousel";

const Project = ({
  title,
  description,
  details,
  githublink,
  images,
  isOpen: initiallyOpen,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [showDetails, setShowDetails] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const visibleDescription = showFullDescription
    ? description
    : description.slice(0, 2);
  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title" onClick={toggleOpen}>
          {isOpen ? "▼" : "▶"} {title}
        </h2>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="project__content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="project__description">
                {visibleDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {description.length > 2 && (
                  <button
                    className="project__toggle-description"
                    onClick={toggleDescription}
                  >
                    {showFullDescription ? "read less" : "read more"}
                  </button>
                )}
              </div>
              <button
                className="project__details-button"
                onClick={toggleDetails}
              >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Project;
