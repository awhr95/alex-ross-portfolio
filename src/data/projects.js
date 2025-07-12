import Homepage from "../assets/imgs/Homepage.png";
import Map from "../assets/imgs/Map.png";
import Login from "../assets/imgs/Login.png";
import Backofthenet from "../assets/imgs/backofthenet/Backofthenethomepage.png";
import Gameplay from "../assets/imgs/backofthenet/Gameplay.png";
import SelectLeague from "../assets/imgs/backofthenet/SelectLeague.png";
import Winner from "../assets/imgs/backofthenet/Winnercrop.png";
import Leaderboard from "../assets/imgs/backofthenet/Leaderboard.png";

const projects = [
  {
    id: "nlist",
    title: "NList",
    summary:
      "My Capstone - A full stack application to discover and promote volunteering opportunities.",
    description: [
      "NList is a place to discover and promote volunteering opportunities. The 'air-bnb' of volunteering. I originally built this over a two weeks for my 'Capstone Project' at the end of my coding bootcamp. It is a full stack application with a react front end, a node & express backend with a fully implemented database.",
      "The pain point NList is built to solve is double sided - to connect volunteers with opportunities, and to connect people or organisations with volunteers. It is a place to discover and promote volunteering opportunities.",
      "I loved building this app, speaking with potential users to get anecdotal evidence of the needs for this app, and then building it to solve that problem. I also loved the challenge of building a full stack application in a short time frame, and the satisfaction of seeing it come together.",
      "The main challenges I found in building it was the building of a database to suit the needs of the app, something I had never done before.",
    ],
    details: [
      "Front end: React, Sass, MapBox",
      "Back end: Node, Express, Knex, JSON Web Token",
      "Project Management: Figma, Jira, Git",
    ],
    githublink: "https://github.com/awhr95/Capstone-nlist-client",
    images: [{ src: Homepage }, { src: Map }, { src: Login }],
  },
  {
    id: "backofthenet",
    title: "Back of the Net",
    summary:
      "A full stack application to play a football management game with friends.",
    description: [
      "A 24-hour hackathon project – a football quiz where you try to name the top scorers in all of Europe’s top 5 leagues.",
      "I built this project solo in 24 hours for a hackathon. I wanted to build something that would be fun to play, and that would challenge my knowledge of football. I also wanted to build something that would be visually appealing and easy to use.",
      "I loved the challenge of building this project in such a short time frame, and the satisfaction of seeing it come together. I also loved the challenge of building a project that would be fun to play, and that would challenge my knowledge of football.",
      "The main challenges I found in building it were the time constraints, and the need to build something that would be fun to play. I also found it challenging to build a project that would be visually appealing and easy to use.",
    ],
    details: [
      "Front end: React, Sass",
      "Data: Local JSON, useEffect",
      "Hackathon: Solo build in 24 hours",
    ],
    githublink: "https://github.com/awhr95/back-of-the-net",
    images: [
      { src: Backofthenet },
      { src: Gameplay },
      { src: SelectLeague },
      { src: Winner },
      { src: Leaderboard },
    ],
  },
];

export default projects;
