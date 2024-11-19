import React from "react";
import "../styles/Tabs.css";

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Data", "Summary", "Logs"];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
