import Header from "../../components/Layout/Header/Header";
import "./Homepage.scss";
import Hero from "../../components/Layout/Hero/Hero";
import TechStack from "../../components/Layout/TechStack/TechStack";
import PortfolioHomepage from "../../components/Layout/PortfolioHomepage/PortfolioHomepage";
import Footer from "../../components/Layout/Footer/Footer";

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
