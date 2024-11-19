import React from "react";
import "../styles/ProjectInfoBar.css";

const ProjectInfoBar = ({ projectName, outputName, lastRun }) => {
  return (
    <div className="project-info-bar">
      <div className="info-item">
        <span className="label">PROJECT NAME:</span>
        <span className="value">{projectName}</span>
      </div>
      <div className="info-item">
        <span className="label">OUTPUT DATASET NAME:</span>
        <span className="value">{outputName}</span>
      </div>
      <div className="info-item">
        <span className="label">LAST RUN:</span>
        <span className="value">{lastRun}</span>
      </div>
    </div>
  );
};

export default ProjectInfoBar;
