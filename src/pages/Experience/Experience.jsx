import React from "react";
import "./Experience.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
// import cv from "../../assets/documents/alex-ross-cv.pdf";

function Experience() {
  return (
    <>
      <Header />
      <PdfViewer />
      <Footer />
    </>
  );
}

export default Experience;
