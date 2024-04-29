import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";

function About() {
  const code = `import { alexanderRoss, geographyAndPlanning, upperSecondClass } from "newcastleUniversity";
  import { alexanderRoss, fullStackDeveloperDiploma } from "brainStationLondon";
  
  const coder = {
      name: "Alex Ross",
      age: 30,
      skills: ["HTML", "CSS", "SASS", "Javascript", "React", 
      "Node.js", "Express", "Knex", "MySQL", "Git"],
      hobbies: ["Reading anything and everything", 
      "Running (slow but far)", "Skiing (mostly in control)", 
      "Cooking for anyone brave enough"],
      problemSolver: true,
      hardWorker: true,
      quickLearner: true,
      communicator: true,
      hireablility: function() {
        return(
          this.problemSolver &&
          this.hardWorker &&
          this.quickLearner &&
          this.communicator &&
              )
         };
  };

  developerProfile.introduce();`;

  return (
    <>
      <Header />
      <section className="code__mobile">
        <CodeSnippet
          code={code}
          language={"javascript"}
          showLineNumbers={false}
        />
      </section>
      <section className="code__desktop">
        <CodeSnippet
          code={code}
          language={"javascript"}
          showLineNumbers={true}
        />
      </section>
      <PdfViewer />
      <Footer />
    </>
  );
}

export default About;
