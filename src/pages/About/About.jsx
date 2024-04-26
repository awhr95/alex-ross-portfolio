import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
// import cv from "../../assets/documents/alex-ross-cv.pdf";

function About() {
  return (
    <>
      <Header />
      <a href="/alex-ross-cv.pdf" download="alex-ross-cv.pdf">
        Download
      </a>
      <PdfViewer />
      <Footer />
    </>
  );
}

export default About;
