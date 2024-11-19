import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./sampleData", () => ({
  project_name: "Test Project",
  output_name: "Test Output",
  table_headers: [
    { name: "Header1", type: "string" },
    { name: "Header2", type: "int" },
  ],
  table_data: [
    ["Row1Col1", 123],
    ["Row2Col1", 456],
  ],
  workflow_steps: [
    { id: 1, name: "Step 1" },
    { id: 2, name: "Step 2" },
  ],
}));

jest.mock("./DataTable", () => ({ headers, data }) => (
  <div data-testid="data-table">Mock DataTable</div>
));
jest.mock("./WorkflowPanel", () => ({ steps }) => (
  <div data-testid="workflow-panel">Mock WorkflowPanel</div>
));
jest.mock("./Tabs", () => ({ activeTab, onTabChange }) => (
  <div>
    <button onClick={() => onTabChange("Data")} data-testid="data-tab">
      Data
    </button>
    <button onClick={() => onTabChange("Workflow")} data-testid="workflow-tab">
      Workflow
    </button>
  </div>
));
jest.mock("./ProjectInfoBar", () => ({ projectName, outputName, lastRun }) => (
  <div data-testid="project-info-bar">
    {projectName} - {outputName}
  </div>
));

describe("App Component", () => {
  it("renders ProjectInfoBar and DataTable by default", () => {
    render(<App />);

    expect(screen.getByTestId("project-info-bar")).toBeInTheDocument();
    expect(screen.getByText("Test Project - Test Output")).toBeInTheDocument();

    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });

  it("renders WorkflowPanel when 'Workflow' tab is clicked", () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("workflow-tab"));

    expect(screen.getByTestId("workflow-panel")).toBeInTheDocument();
  });

  it("renders DataTable when 'Data' tab is clicked after switching tabs", () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("workflow-tab"));

    fireEvent.click(screen.getByTestId("data-tab"));

    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
});
