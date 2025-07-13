import Homepage from "../assets/imgs/Homepage.png";
import Map from "../assets/imgs/Map.png";
import Login from "../assets/imgs/Login.png";
import Backofthenet from "../assets/imgs/backofthenet/Backofthenethomepage.png";
import Gameplay from "../assets/imgs/backofthenet/Gameplay.png";
import SelectLeague from "../assets/imgs/backofthenet/SelectLeague.png";
import Winner from "../assets/imgs/backofthenet/Winnercrop.png";
import Leaderboard from "../assets/imgs/backofthenet/Leaderboard.png";
import BrainflixDesktop from "../assets/imgs/brainflix/Brainflix_desktop.png";
import BrainflixMobile from "../assets/imgs/brainflix/Brainflix_mobile.png";
import BrainflixTablet from "../assets/imgs/brainflix/Brainflix_tablet.png";
import BrainlixApi from "../assets/imgs/brainflix/Brainflix_api.png";
import Warehouses from "../assets/imgs/Instock/Warehouses.png";
import Warehouse from "../assets/imgs/Instock/Warehouse.png";
import DeleteWarehouse from "../assets/imgs/Instock/Delete_Warehouse.png";
import AddInventory from "../assets/imgs/Instock/Add_New_inventory.png";
import EditInventory from "../assets/imgs/Instock/Edit_Invetory.png";
import Inventory from "../assets/imgs/Instock/Inventory.png";

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
  {
    id: "brainflix",
    title: "Brainflix",
    summary: "A YouTube clone built with React - my first API!",
    description: [
      "Brainflix is a YouTube clone built with React. It was my first project that used an API - using axios to fetch data from a JSON file.",
      "This was an assignment for Brainstation my coding bootcamp. Built over the course of a week, it was my first project that used an API which finally opened my mind to what full stack coding is in reality.",
      "On the front end, the assignment required the app was responsive in mobile, tablet and desktop as well as accepting comments in a comments section. ",
      "The front end made use of components and props which was a new concept for me at the time.",
    ],
    details: [
      "Front end: React, Sass, axios",
      "Back end: Node, Express",
      "Project Management Git",
    ],
    githublink: "",
    images: [
      {
        src: BrainflixDesktop,
      },
      { src: BrainflixTablet },
      { src: BrainflixMobile },
      { src: BrainlixApi },
    ],
  },
  {
    id: "instock",
    title: "InStock",
    summary: "A full stack application to manage inventory in warehouses.",
    description: [
      "InStock is a full stack application to manage inventory in warehouses. It was built as a group project for my coding bootcamp.",
      "The app allows users to manage warehouses, add and edit inventory, and delete warehouses. It is a fully functional application with a responsive design.",
      "I built this project with a team of 4 over the course of 2 weeks. I was responsible for the front end, and I also helped with the back end.",
      "On of the main challenges was the project management of the team. We used Jira to manage our tasks and Git for version control. This was the first project I had worked in a team on one repository, and it was a great learning experience.",
      "We ran daily standups to discuss our progress and any blockers we had. This helped us to stay on track and to communicate effectively.",
    ],
    details: [
      "Front end: React, Sass",
      "Back end: Node, Express, Knex",
      "Database: MySQL",
      "Project Management: Jira, Git",
    ],
    githublink: "",
    images: [
      { src: Warehouses },
      { src: Inventory },
      { src: Warehouse },
      { src: DeleteWarehouse },
      { src: AddInventory },
      { src: EditInventory },
    ],
  },
];

export default projects;
