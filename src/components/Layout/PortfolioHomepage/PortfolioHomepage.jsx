import ImgCarousel from "../ImgCarousel/ImgCarousel";
import "./PortfolioHomepage.scss";
import Homepage from "../../../assets/imgs/Homepage.png";
import Map from "../../../assets/imgs/Map.png";
import Login from "../../../assets/imgs/Login.png";
import Backofthenet from "../../../assets/imgs/backofthenet/Backofthenethomepage.png";
import Gameplay from "../../../assets/imgs/backofthenet/Gameplay.png";
import SelectLeague from "../../../assets/imgs/backofthenet/SelectLeague.png";
import Winner from "../../../assets/imgs/backofthenet/Winnercrop.png";
import Leaderboard from "../../../assets/imgs/backofthenet/Leaderboard.png";
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
      <div className="portfolio__container">
        <h3 className="portfolio__subtitle">My projects:</h3>
        <article className="portfolio__project">
          <h2 className="portfolio__title">NList</h2>
          <p className="portfolio__description">
            NList is a place to discover and promote volunteering opportunities.
            The 'air-bnb' of volunteering. I originally built this over a two
            weeks for my 'Capstone Project' at the end of my coding bootcamp. It
            is a full stack application with a react front end, a node & express
            backend with a fully implemented database.
          </p>
          <p className="portfolio__description">
            NList was built over 2 weeks as a full stack application with a
            react front end, a node & express backend with a fully implemented
            database.
          </p>
          <section className="portfolio__details-container">
            <div className="portfolio__details">
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
              <a
                className="portfolio__link"
                href="https://github.com/awhr95/Capstone-nlist-client"
              >
                Link to Github repo
              </a>
            </div>

            <ImgCarousel images={NListImages} />
          </section>
        </article>
        <article className="portfolio__project">
          <h2 className="portfolio__title">Back of the Net</h2>
          <p className="portfolio__description">
            A 24-hour hackathon project – a football quiz where you try to name
            the top scorers in all of Europe’s top 5 leagues.
          </p>
          <section className="portfolio__details-container">
            <div className="portfolio__details">
              <button className="portfolio__button" onClick={toggleDetails}>
                {!showDetails ? "./Project_Details" : "./Hide_Details"}
              </button>
              {showDetails && (
                <section>
                  <p className="portfolio__description">
                    Front end: React, Sass
                  </p>
                  <p className="portfolio__description">
                    Data: Local JSON, useEffect
                  </p>
                  <p className="portfolio__description">
                    Hackathon: Solo build in 24 hours
                  </p>
                </section>
              )}
              <a
                className="portfolio__link"
                href="https://github.com/awhr95/back-of-the-net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to GitHub repo
              </a>
            </div>

            <ImgCarousel images={BackOfTheNet} />
          </section>
        </article>
        <p className="portfolio__link-text">Guithub Link</p>
      </div>
    </section>
  );
};

export default PortfolioHomepage;
