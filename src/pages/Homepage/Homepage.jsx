import Header from "../../components/Header/Header";
import "./Homepage.scss";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Header />
      <p>Hi, I'm</p>
      <h1>Alex Ross</h1>
      <p>
        I’m a London based full stack software engineer passionate about
        designing and building applications people love using...
      </p>
      <p>
        Here’s <Link>NList</Link>, the ‘Airbnb’ of volunteering that I have
        built to encourage more giving in the world....you can see more of my
        active projects here.
      </p>
    </>
  );
}

export default Homepage;
