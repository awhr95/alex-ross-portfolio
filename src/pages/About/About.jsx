import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
// import cv from "../../assets/documents/alex-ross-cv.pdf";

function About() {
  const code = `import { alexanderRoss, geographyAndPlanning, upperSecondClass } from newcastleUniversity;
  import { alexanderRoss, fullStackDeveloperDiploma } from brainStationLondon;
  
  const developerProfile = {
      name: "Alex Ross",
      age: 30,
      skills: ["JavaScript", "React", "Node.js", "HTML/CSS/SASS", ""],
      hobbies: ["Playing video games", "Reading fantasy novels", "Cooking new recipes"],
      introduce() {
          console.log("Hi, Im Alex!")
  
      }
  };
  
  
  developerProfile.introduce();`;

  return (
    <>
      <Header />
      <CodeSnippet
        code={code}
        language={"javascript"}
        showLineNumbers={true}
        theme={dracula}
      />
      <PdfViewer />
      <Footer />
    </>
  );
}

export default About;
