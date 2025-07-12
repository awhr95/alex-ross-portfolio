import "./PortfolioHomepage.scss";
import Project from "../Project/Project";
import projects from "../../../data/projects";

const PortfolioHomepage = () => {
  return (
    <div className="portfolio">
      <section className="portfolio__container">
        <h1 className="portfolio__title">My Projects</h1>
        {projects.map((project, index) => (
          <Project
            key={project.id}
            {...project}
            isOpen={index === 0} // Open the first project by default
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioHomepage;
