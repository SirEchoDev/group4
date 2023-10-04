// src/Table.js
import React, { useState } from 'react';
import MoreInfo from './MoreInfo';

const Table = ({ data }) => {
  const [selectedData, setSelectedData] = useState(null);

  const showMoreInfo = (item) => {
    setSelectedData(item);
  };

  // Define the possible status options
  const statusOptions = ['Active', 'Done', 'In Progress', 'Cancel'];

  const handleStatusChange = (item, newStatus) => {
    // Find the index of the item in the data array
    const dataIndex = data.findIndex((d) => d === item);

    if (dataIndex !== -1) {
      // Update the status of the item in the data array
      data[dataIndex].status = newStatus;
      setSelectedData({ ...item, status: newStatus });
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item, e.target.value)}
                >
                  {statusOptions.map((status, idx) => (
                    <option key={idx} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button onClick={() => showMoreInfo(item)}>More Info</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedData && <MoreInfo data={selectedData} />}
    </div>
  );
};

export default Table;
