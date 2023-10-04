// src/App.js
import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import AddData from './AddData';

function App() {
  const [tableData, setTableData] = useState([]);

  const addData = (data) => {
    setTableData([...tableData, data]);
  };

  return (
    <div className="App">
      <h1>React Table Example</h1>
      <AddData addData={addData} />
      <Table data={tableData} />
    </div>
  );
}

export default App;
