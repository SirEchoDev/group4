// src/AddData.js
import React, { useState } from 'react';

const AddData = ({ addData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    addData(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      status: '',
    });
  };

  return (
    <div>
      <h2>Add Data</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Contact:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddData;
