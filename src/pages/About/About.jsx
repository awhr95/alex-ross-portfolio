import React from "react";
import "./About.scss";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import PdfViewer from "../../components/Layout/PdfViewer/PdfViewer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function About() {
  const codeString = `
  const coder = {
      name: "Alex Ross",
      age: 30,
      skills: ["HTML", "CSS", "SASS", "Javascript", "React", "Node.js", "Express", "Knex", "MySQL", "Git"],
      hobbies: ["Reading anything and everything", "Running (slowly)", "Skiing (fast)", "Cooking (for anyone brave enough)"],
      problemSolver: true,
      hardWorker: true,
      quickLearner: true,
      hireablility: function() {
        return(
          this.problemSolver &&
          this.hardWorker &&
          this.quickLearner &&
          this.skills.length >= 5
              )
         };
  };`;
  return (
    <>
      <Header />
      <section className="code__mobile">
        <div className="code__mobile-box">
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="code__mobile-glass">
          <div className="about">
            <h1 className="about__title">About</h1>
          </div>
        </div>
      </section>
      <section className="code__desktop">
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          wrapLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </section>
      <PdfViewer />
      <Footer />
    </>
  );
}

export default About;
