import "./PortfolioHomepage.scss";

const PortfolioHomepage = () => {
  return (
    <section>
      <h3 className="portfolio__subtitle">My portfolio of work:</h3>
      <h2 className="portfolio__project-title">NList</h2>
      <p>
        NList is a place to discover and promote volunteering opportunities. The
        'air-bnb' of volunteering.
      </p>
      <a href="https://github.com/awhr95/Capstone-nlist-client">
        <p>Guithub Link</p>
      </a>
    </section>
  );
};

export default PortfolioHomepage;
