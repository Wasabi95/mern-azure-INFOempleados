//App.js
//App.js
//App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/records'; // Adjust the base URL if necessary

const App = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    position: '',
    level: '',
    salary: '',
    contractType: '',
    dateOfEntry: '',
    ubicacion: ''
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all records
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(baseUrl);
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Create or update a record
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        // Update record
        await axios.patch(`${baseUrl}/${editingId}`, formData);
      } else {
        // Create record
        await axios.post(baseUrl, formData);
      }

      // Clear form and refresh records
      setFormData({
        name: '',
        apellido: '',
        position: '',
        level: '',
        salary: '',
        contractType: '',
        dateOfEntry: '',
        ubicacion: ''
      });
      setEditingId(null);
      const response = await axios.get(baseUrl);
      setRecords(response.data);
    } catch (error) {
      console.error('Error saving record:', error);
    }
  };

  // Start editing a record
  const handleEdit = (record) => {
    setFormData(record);
    setEditingId(record._id);
  };

  // Delete a record
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      const response = await axios.get(baseUrl);
      setRecords(response.data);
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div>
      <h1>Records Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" />
        <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position" />
        <input type="text" name="level" value={formData.level} onChange={handleChange} placeholder="Level" />
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" />
        <input type="text" name="contractType" value={formData.contractType} onChange={handleChange} placeholder="Contract Type" />
        <input type="date" name="dateOfEntry" value={formData.dateOfEntry} onChange={handleChange} placeholder="Date of Entry" />
        <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} placeholder="Ubicacion" />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {records.map(record => (
          <li key={record._id}>
            {record.name} - {record.position} - {record.salary}
            <button onClick={() => handleEdit(record)}>Edit</button>
            <button onClick={() => handleDelete(record._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

