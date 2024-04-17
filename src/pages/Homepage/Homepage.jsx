import Header from "../../components/Header/Header";
import "./Homepage.scss";
import Hero from "../../components/Hero/Hero";
import Techstack from "../../components/TechStack/TechStack";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Techstack />

      <Footer />
    </>
  );
}

export default Homepage;
