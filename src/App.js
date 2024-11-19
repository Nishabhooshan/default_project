import React, { useState } from "react";
import DataTable from "./components/DataTable";
import Tabs from "./components/Tabs";
import WorkflowPanel from "./components/WorkflowPanel";
import ProjectInfoBar from "./components/ProjectInfoBar";
import sampleData from "./sampleData";

function App() {
  const { project_name, output_name, table_headers, table_data, workflow_steps } = sampleData;

  const [activeTab, setActiveTab] = useState("Data");

  return (
    <div className="app-container">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ProjectInfoBar
        projectName={project_name}
        outputName={output_name}
        lastRun={sampleData.last_run}
      />
      {activeTab === "Data" && <DataTable headers={table_headers} data={table_data} />}
      {activeTab === "Workflow" && <WorkflowPanel steps={workflow_steps} />}
    </div>
  );
}

export default App;
