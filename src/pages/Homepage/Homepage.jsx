import Header from "../../components/Header/Header";
import "./Homepage.scss";
import Hero from "../../components/Hero/Hero";
import TechStack from "../../components/TechStack/TechStack";
import PortfolioHomepage from "../../components/PortfolioHomepage/PortfolioHomepage";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <main className="homepage">
      <Header />
      <Hero />
      <TechStack />
      <PortfolioHomepage />
      <Footer />
    </main>
  );
}

export default Homepage;
