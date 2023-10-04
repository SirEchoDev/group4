// src/MoreInfo.js
import React from 'react';

const MoreInfo = ({ data }) => {
  return (
    <div>
      <h2>More Information</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Contact: {data.contact}</p>
      <p>Status: {data.status}</p>
    </div>
  );
};

export default MoreInfo;
