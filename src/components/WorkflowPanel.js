import React from "react";
import PropTypes from "prop-types";
import "../styles/WorkflowPanel.css";

function WorkflowPanel({ steps }) {
  return (
    <div className="workflow-panel">
      <h2 className="workflow-header">Workflow</h2>
      <div className="workflow-steps">
        {steps.map((step, index) => (
          <div key={step.id} className="workflow-step">
            <div className="step-title">
              <span className="step-index">{index + 1}. </span>
              <span className="step-name">{step.name_title || step.name}</span>
            </div>
            <div className="step-details">
              <p><strong>Status:</strong> {step.status}</p>
              {step.params_extra && (
                <div className="step-params">
                  {/* Customize this display as per your needs */}
                  <h4>Parameters:</h4>
                  <pre>{JSON.stringify(step.params_extra, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

WorkflowPanel.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      ord_exec: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      name_title: PropTypes.string,
      params_extra: PropTypes.object,
    })
  ).isRequired,
};

export default WorkflowPanel;
