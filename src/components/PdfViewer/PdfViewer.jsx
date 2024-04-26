import "./PdfViewer.scss";
import React from "react";
import cv from "../../assets/documents/alex-ross-cv.pdf";

const PdfViewer = () => {
  return (
    <div className="pdfViewer">
      <iframe title="cv" src={cv} width="100%" height="500px" />
    </div>
  );
};

export default PdfViewer;
