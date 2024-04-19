import ImgCarousel from "../ImgCarousel/ImgCarousel";
import "./PortfolioHomepage.scss";
import Homepage from "../../assets/imgs/Homepage.png";
import Map from "../../assets/imgs/Map.png";
import Login from "../../assets/imgs/Login.png";
import Backofthenet from "../../assets/imgs/backofthenet/Backofthenethomepage.png";
import Gameplay from "../../assets/imgs/backofthenet/Gameplay.png";
import SelectLeague from "../../assets/imgs/backofthenet/SelectLeague.png";
import Winner from "../../assets/imgs/backofthenet/Winnercrop.png";
import Leaderboard from "../../assets/imgs/backofthenet/Leaderboard.png";
import React, { useState } from "react";

const PortfolioHomepage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const NListImages = [
    {
      src: Homepage,
    },
    {
      src: Map,
    },
    { src: Login },
  ];
  const BackOfTheNet = [
    {
      src: Backofthenet,
    },
    {
      src: Gameplay,
    },
    {
      src: SelectLeague,
    },
    {
      src: Winner,
    },
    {
      src: Leaderboard,
    },
  ];
  return (
    <section className="portfolio">
      <h3 className="portfolio__subtitle">My portfolio of work:</h3>
      <article className="portfolio__project">
        <h2 className="portfolio__title">NList</h2>
        <p className="portfolio__description">
          NList is a place to discover and promote volunteering opportunities.
          The 'air-bnb' of volunteering.
        </p>
        <button className="portfolio__button" onClick={toggleDetails}>
          {" "}
          {!showDetails ? "./Project_Details" : "./Hide_Details"}
        </button>
        {showDetails && (
          <section>
            <p className="portfolio__description">
              Front end: React, Sass, MapBox
            </p>
            <p className="portfolio__description">
              Back end: Node, Express, Knex, JSON Web Token
            </p>
            <p className="portfolio__description">
              Project Management: Figma, Jira, Git
            </p>
          </section>
        )}

        <ImgCarousel images={NListImages} />
        <a
          className="portfolio__link"
          href="https://github.com/awhr95/Capstone-nlist-client"
        >
          <p className="portfolio__link-text">Guithub Link</p>
        </a>
      </article>
      <article>
        <h2 className="portfolio__title">Back of the Net</h2>
        <p className="portfolio__description">
          A 24hr hackathon project - A football quiz, can you name tope scorers
          in all of Europes top 5 leagues??.
        </p>
        <ImgCarousel images={BackOfTheNet} />

        <a
          className="portfolio__link"
          href="https://github.com/awhr95/Capstone-nlist-client"
        >
          Guithub Link
        </a>
      </article>
      <p className="portfolio__link-text">Guithub Link</p>
    </section>
  );
};

export default PortfolioHomepage;
