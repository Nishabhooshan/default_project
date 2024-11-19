import React from "react";
import "../styles/DataTable.css";

const DataTable = ({ headers, data }) => {
  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="table-header">
                <div className="header-container">
                  <span>{header.name}</span>
                  <select className="header-dropdown">
                    <option>{header.type}</option>
                  </select>
                  <button className="delete-btn" aria-label="Delete Column">🗑️</button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
