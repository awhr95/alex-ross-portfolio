import React from "react";
import "./GithubRepoViewer.scss";

const GithubRepoViewer = ({ username, repository }) => {
  const iframeSrc = `https://github.dev/${username}/${repository}`;

  return (
    <div>
      <div>
        <iframe
          src={iframeSrc}
          title="GitHub Repository Viewer"
          style={{ border: "none", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default GithubRepoViewer;
