// src/AppointmentForm.js
import React, { useState, useEffect } from 'react';

function AppointmentForm({ onSubmit, onUpdateData }) {
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });

  useEffect(() => {
    if (onUpdateData) {
      setFormData({
        name: onUpdateData.name || '',
        date: onUpdateData.date || '',
        time: onUpdateData.time || '',
      });
    }
  }, [onUpdateData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdateData) {
      onUpdateData.name = formData.name;
      onUpdateData.date = formData.date;
      onUpdateData.time = formData.time;
      onSubmit(onUpdateData);
    } else {
      onSubmit(formData);
    }
    setFormData({ name: '', date: '', time: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        placeholder="Time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <button type="submit">{onUpdateData ? 'Update Appointment' : 'Book Appointment'}</button>
    </form>
  );
}

export default AppointmentForm;
